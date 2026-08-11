CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION calculate_property_rating(p_property_id UUID)
RETURNS NUMERIC AS $$
DECLARE
  avg_rating NUMERIC;
BEGIN
  SELECT COALESCE(ROUND(AVG(rating)::numeric, 2), 0)
  INTO avg_rating
  FROM reviews
  WHERE property_id = p_property_id;

  RETURN avg_rating;
END;
$$ LANGUAGE plpgsql STABLE;

CREATE OR REPLACE FUNCTION get_agent_stats(p_agent_id UUID)
RETURNS TABLE (
  total_properties BIGINT,
  total_leads BIGINT,
  total_bookings BIGINT,
  average_rating NUMERIC
) AS $$
BEGIN
  RETURN QUERY
  SELECT
    COUNT(DISTINCT p.id)::BIGINT,
    COUNT(DISTINCT al.id)::BIGINT,
    COUNT(DISTINCT b.id)::BIGINT,
    COALESCE(ROUND(AVG(r.rating)::numeric, 2), 0)
  FROM users u
  LEFT JOIN properties p ON p.agent_id = u.id
  LEFT JOIN agent_leads al ON al.agent_id = u.id
  LEFT JOIN bookings b ON b.agent_id = u.id
  LEFT JOIN reviews r ON r.property_id = p.id
  WHERE u.id = p_agent_id
  GROUP BY u.id;
END;
$$ LANGUAGE plpgsql STABLE;

CREATE OR REPLACE FUNCTION search_properties(search_term TEXT, city_name TEXT DEFAULT NULL)
RETURNS TABLE (
  id UUID,
  title TEXT,
  slug TEXT,
  price NUMERIC,
  city TEXT,
  score REAL
) AS $$
BEGIN
  RETURN QUERY
  SELECT
    p.id,
    p.title,
    p.slug,
    p.price,
    c.name AS city,
    ts_rank(to_tsvector('english', coalesce(p.title,'') || ' ' || coalesce(p.description,'')), plainto_tsquery('english', search_term)) AS score
  FROM properties p
  LEFT JOIN locations l ON p.location_id = l.id
  LEFT JOIN cities c ON l.city_id = c.id
  WHERE to_tsvector('english', coalesce(p.title,'') || ' ' || coalesce(p.description,'')) @@ plainto_tsquery('english', search_term)
    AND (city_name IS NULL OR c.name ILIKE city_name)
  ORDER BY score DESC, p.created_at DESC;
END;
$$ LANGUAGE plpgsql STABLE;

DROP MATERIALIZED VIEW IF EXISTS property_search_mv;
CREATE MATERIALIZED VIEW property_search_mv AS
SELECT
  p.id,
  p.title,
  p.slug,
  p.price,
  p.description,
  c.name AS city,
  pr.name AS province,
  p.featured,
  p.is_active,
  to_tsvector('english', coalesce(p.title,'') || ' ' || coalesce(p.description,'')) AS search_vector
FROM properties p
LEFT JOIN locations l ON p.location_id = l.id
LEFT JOIN cities c ON l.city_id = c.id
LEFT JOIN provinces pr ON l.province_id = pr.id;

CREATE UNIQUE INDEX IF NOT EXISTS idx_property_search_mv_id ON property_search_mv(id);
CREATE INDEX IF NOT EXISTS idx_property_search_mv_vector ON property_search_mv USING GIN(search_vector);

DROP VIEW IF EXISTS agent_performance_stats;
CREATE VIEW agent_performance_stats AS
SELECT
  u.id AS agent_id,
  u.full_name,
  COUNT(DISTINCT p.id) AS total_properties,
  COUNT(DISTINCT b.id) AS total_bookings,
  COUNT(DISTINCT al.id) AS total_leads,
  COALESCE(ROUND(AVG(r.rating)::numeric, 2), 0) AS average_rating
FROM users u
LEFT JOIN properties p ON p.agent_id = u.id
LEFT JOIN bookings b ON b.agent_id = u.id
LEFT JOIN agent_leads al ON al.agent_id = u.id
LEFT JOIN reviews r ON r.property_id = p.id
GROUP BY u.id, u.full_name;
