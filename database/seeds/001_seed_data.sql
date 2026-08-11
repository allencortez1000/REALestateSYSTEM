INSERT INTO roles (name, description) VALUES
('guest', 'Public visitor'),
('buyer', 'Property buyer'),
('seller', 'Property seller'),
('agent', 'Real estate agent'),
('admin', 'System administrator')
ON CONFLICT (name) DO NOTHING;

INSERT INTO permissions (name, description) VALUES
('create_property', 'Create properties'),
('edit_property', 'Edit properties'),
('delete_property', 'Delete properties'),
('manage_users', 'Manage users'),
('manage_agents', 'Manage agents'),
('view_analytics', 'View analytics'),
('manage_payments', 'Manage payments'),
('manage_blog', 'Manage blog'),
('manage_settings', 'Manage settings')
ON CONFLICT (name) DO NOTHING;

INSERT INTO property_types (name, slug) VALUES
('House', 'house'), ('Condominium', 'condominium'), ('Townhouse', 'townhouse'), ('Apartment', 'apartment'),
('Lot', 'lot'), ('Commercial', 'commercial'), ('Warehouse', 'warehouse'), ('Industrial', 'industrial'),
('Office', 'office'), ('Farm', 'farm'), ('Resort', 'resort'), ('Hotel', 'hotel'), ('Mixed Use', 'mixed-use')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO property_statuses (name, slug) VALUES
('active', 'active'), ('pending', 'pending'), ('sold', 'sold'), ('rented', 'rented'), ('inactive', 'inactive'), ('featured', 'featured')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO subscription_plans (name, slug, price, features) VALUES
('Free', 'free', 0, '["Basic listing"]'::jsonb),
('Basic', 'basic', 999, '["Featured listing"]'::jsonb),
('Professional', 'professional', 2999, '["Analytics","CRM"]'::jsonb),
('Enterprise', 'enterprise', 9999, '["Priority support","API access"]'::jsonb)
ON CONFLICT (slug) DO NOTHING;

INSERT INTO provinces (name) VALUES
('NCR'),('Cebu'),('Davao del Sur'),('Pampanga'),('Laguna'),('Bulacan'),('Rizal'),('Cavite'),('Batangas'),('Iloilo')
ON CONFLICT (name) DO NOTHING;

INSERT INTO amenities (name, icon) VALUES
('Swimming Pool','pool'),('Gym','dumbbell'),('Parking','car'),('Security','shield'),('CCTV','camera'),('Garden','leaf'),('Elevator','building'),('Balcony','sun'),('Air Conditioning','snowflake'),('Clubhouse','users')
ON CONFLICT (name) DO NOTHING;

INSERT INTO website_settings (site_name, site_tagline, contact_email, contact_phone, maintenance_mode)
VALUES ('RHBC Real Estate', 'Luxury property platform', 'hello@rhbc.com', '+63 000 000 0000', false)
ON CONFLICT DO NOTHING;
