# System Walkthrough Summary

## Project Overview

RHBC Real Estate is a full-stack real estate platform for AMICA-branded property discovery, buyer/seller/customer workflows, and administrative oversight. The system is organized as a monorepo with separate frontend, backend, and database folders.

## Repository Structure

```text
RHBC-REAL-ESTATE/
├── frontend/   # Next.js web application
├── backend/    # TypeScript backend package and service configuration
├── database/   # PostgreSQL migrations and seed data
├── logo/       # Brand assets
└── model houses/ # Property/model house media assets
```

## Main User Walkthrough

1. **Landing page**
   - Users arrive at the AMICA-styled homepage.
   - The page introduces premium residences, model houses, guided service, and investment-focused positioning.
   - Primary actions guide users to explore residences, search listings, register, log in, or open the customer portal.

2. **Property discovery**
   - Users browse curated residences and model houses.
   - Search, comparison, favorites, and property detail flows support shortlisting and decision-making.
   - Featured examples include Athena, Hera, and Kasandra model houses with price, area, and positioning details.

3. **Authentication**
   - The system includes login and registration routes for regular users and admins.
   - Role-based entry points route users toward customer, buyer, seller, agent, or admin dashboards.

4. **Dashboard experience**
   - Customer dashboards support account-facing workflows.
   - Buyer, seller, and agent dashboards provide role-specific views.
   - Admin dashboards support operational oversight through section-based admin pages.

5. **Bookings and inquiries**
   - Users can move from browsing to action through bookings, contact, and inquiry-related pages.
   - The intended flow is discovery → comparison → inquiry/booking → guided support.

6. **Analytics and operations**
   - Analytics and admin pages provide management visibility.
   - Admin oversight is positioned around inquiries, approvals, listings, and platform operations.

## Frontend Summary

- **Framework:** Next.js 15 with React 19 and TypeScript.
- **Styling:** Tailwind CSS with Radix UI primitives, custom global styling, and AMICA luxury branding.
- **State/data tools:** React Query, Zustand, Axios, Supabase client packages.
- **Notable routes:**
  - `/` — branded landing page
  - `/properties` — property browsing
  - `/search` — listing search
  - `/compare` — property comparison
  - `/favorites` — saved listings
  - `/bookings` — booking workflow
  - `/contact` — contact/inquiry entry point
  - `/auth/login` and `/auth/register` — user authentication
  - `/auth/login/admin` and `/auth/register/admin` — admin authentication
  - `/dashboard/customer`, `/dashboard/buyer`, `/dashboard/seller`, `/dashboard/agent`, `/dashboard/admin` — role-specific dashboards
  - `/analytics` — analytics view
  - `/blog` — content/blog section

## Backend Summary

- **Framework/runtime:** TypeScript backend package with Express-related dependencies.
- **Current entry point:** `backend/src/index.ts` currently exports mock backend metadata and sample property data.
- **Configured integrations/dependencies:** PostgreSQL, Supabase, Stripe, Socket.IO, SendGrid/Nodemailer, JWT, Redis, Winston logging, file/image tooling, validation, and security middleware.
- **Backend folders:**
  - `config/` — database, logger, Stripe, and Supabase configuration
  - `data/` — mock data
  - `types/` — shared backend TypeScript types
  - `utils/` — helper and JWT utilities
  - `controllers/`, `routes/`, `services/`, `middleware/` — placeholders for API implementation layers

## Database Summary

- **Database:** PostgreSQL schema managed through SQL migrations.
- **Migration files:**
  - `001_initial_schema.sql` — core production schema
  - `002_functions_triggers.sql` — database functions and triggers
- **Seed file:**
  - `001_seed_data.sql` — initial seed records
- **Core schema areas:**
  - Roles, permissions, users, and user-role assignments
  - Buyer, seller, and agent profiles
  - Philippine location hierarchy: provinces, cities, barangays, and locations
  - Property types, statuses, properties, amenities, and property amenities
  - Booking, payment, conversation, and support-oriented enums/tables in the broader schema

## Local Development Commands

From the repository root:

```bash
npm run install:all
npm run dev
npm run dev:frontend
npm run dev:backend
npm run build
npm run start
```

Frontend-specific commands run from `frontend/` or through root scripts. The frontend dev server is configured for port `3001`.

Backend-specific commands run from `backend/`:

```bash
npm run dev
npm run build
npm run start
npm run migrate
npm run seed
```

Database migration and seed commands require `DATABASE_URL` to be set.

## Walkthrough Talking Points

- The platform presents a premium AMICA real estate brand experience.
- The homepage anchors the flow with model houses, value propositions, and clear calls to action.
- Users can browse, search, compare, favorite, inquire, and book property-related services.
- Separate dashboards support customers, buyers, sellers, agents, and administrators.
- The frontend is the most complete application layer currently visible.
- The backend package is structured for a full API but currently exposes mock-mode data at its entry point.
- The database schema is designed for a production-grade real estate marketplace with role management, property inventory, profiles, bookings, payments, and communication features.

## Suggested Demo Flow

1. Open the homepage and describe the AMICA positioning.
2. Click **Explore residences** or open `/properties`.
3. Show search, comparison, favorites, or booking pages depending on the audience.
4. Walk through authentication entry points.
5. Open the customer dashboard, then show buyer/seller/agent/admin dashboards.
6. Explain how the database supports roles, properties, locations, bookings, and payments.
7. Clarify that backend API implementation appears scaffolded/mock-mode and is the next major integration step.
