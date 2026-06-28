-- Dillo Uniforms — Supabase Schema
-- Run in Supabase SQL Editor
-- Then create a storage bucket named 'dillo-images' (public) in Storage settings

-- 1. company_info
CREATE TABLE IF NOT EXISTS company_info (
  key         TEXT PRIMARY KEY,
  value       TEXT NOT NULL,
  updated_at  TIMESTAMPTZ DEFAULT NOW()
);
ALTER TABLE company_info ENABLE ROW LEVEL SECURITY;
CREATE POLICY "public_read"  ON company_info FOR SELECT USING (true);
CREATE POLICY "admin_write"  ON company_info FOR ALL
  USING (auth.role() = 'authenticated')
  WITH CHECK (auth.role() = 'authenticated');

-- 2. stats
CREATE TABLE IF NOT EXISTS stats (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  metric        TEXT NOT NULL,
  value         TEXT NOT NULL,
  icon          TEXT,
  display_order INT  DEFAULT 0
);
ALTER TABLE stats ENABLE ROW LEVEL SECURITY;
CREATE POLICY "public_read"  ON stats FOR SELECT USING (true);
CREATE POLICY "admin_write"  ON stats FOR ALL
  USING (auth.role() = 'authenticated')
  WITH CHECK (auth.role() = 'authenticated');

-- 3. clients
CREATE TABLE IF NOT EXISTS clients (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name          TEXT NOT NULL,
  logo_url      TEXT,
  display_order INT  DEFAULT 0
);
ALTER TABLE clients ENABLE ROW LEVEL SECURITY;
CREATE POLICY "public_read"  ON clients FOR SELECT USING (true);
CREATE POLICY "admin_write"  ON clients FOR ALL
  USING (auth.role() = 'authenticated')
  WITH CHECK (auth.role() = 'authenticated');

-- 4. testimonials
CREATE TABLE IF NOT EXISTS testimonials (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  quote         TEXT NOT NULL,
  author        TEXT NOT NULL,
  role          TEXT NOT NULL,
  avatar_url    TEXT,
  display_order INT  DEFAULT 0
);
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;
CREATE POLICY "public_read"  ON testimonials FOR SELECT USING (true);
CREATE POLICY "admin_write"  ON testimonials FOR ALL
  USING (auth.role() = 'authenticated')
  WITH CHECK (auth.role() = 'authenticated');

-- 5. product_categories
CREATE TABLE IF NOT EXISTS product_categories (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug          TEXT NOT NULL UNIQUE,
  name          TEXT NOT NULL,
  description   TEXT,
  image_url     TEXT,
  display_order INT  DEFAULT 0
);
ALTER TABLE product_categories ENABLE ROW LEVEL SECURITY;
CREATE POLICY "public_read"  ON product_categories FOR SELECT USING (true);
CREATE POLICY "admin_write"  ON product_categories FOR ALL
  USING (auth.role() = 'authenticated')
  WITH CHECK (auth.role() = 'authenticated');

-- 6. products
CREATE TABLE IF NOT EXISTS products (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  category_id   UUID REFERENCES product_categories(id) ON DELETE CASCADE,
  name          TEXT NOT NULL,
  price_text    TEXT,
  moq           TEXT,
  badge         TEXT,
  image_url     TEXT,
  display_order INT  DEFAULT 0
);
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
CREATE POLICY "public_read"  ON products FOR SELECT USING (true);
CREATE POLICY "admin_write"  ON products FOR ALL
  USING (auth.role() = 'authenticated')
  WITH CHECK (auth.role() = 'authenticated');

-- 7. product_specs
CREATE TABLE IF NOT EXISTS product_specs (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title         TEXT NOT NULL,
  value         TEXT NOT NULL,
  display_order INT  DEFAULT 0
);
ALTER TABLE product_specs ENABLE ROW LEVEL SECURITY;
CREATE POLICY "public_read"  ON product_specs FOR SELECT USING (true);
CREATE POLICY "admin_write"  ON product_specs FOR ALL
  USING (auth.role() = 'authenticated')
  WITH CHECK (auth.role() = 'authenticated');

-- 8. portfolio_projects
CREATE TABLE IF NOT EXISTS portfolio_projects (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name          TEXT NOT NULL,
  location      TEXT NOT NULL,
  quantity      INT  NOT NULL,
  vertical      TEXT NOT NULL,
  year          INT  NOT NULL,
  image_url     TEXT,
  display_order INT  DEFAULT 0
);
ALTER TABLE portfolio_projects ENABLE ROW LEVEL SECURITY;
CREATE POLICY "public_read"  ON portfolio_projects FOR SELECT USING (true);
CREATE POLICY "admin_write"  ON portfolio_projects FOR ALL
  USING (auth.role() = 'authenticated')
  WITH CHECK (auth.role() = 'authenticated');

-- 9. industries
CREATE TABLE IF NOT EXISTS industries (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name          TEXT NOT NULL,
  description   TEXT NOT NULL,
  icon          TEXT,
  display_order INT  DEFAULT 0
);
ALTER TABLE industries ENABLE ROW LEVEL SECURITY;
CREATE POLICY "public_read"  ON industries FOR SELECT USING (true);
CREATE POLICY "admin_write"  ON industries FOR ALL
  USING (auth.role() = 'authenticated')
  WITH CHECK (auth.role() = 'authenticated');

-- 10. process_steps
CREATE TABLE IF NOT EXISTS process_steps (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  type        TEXT NOT NULL CHECK (type IN ('how_it_works', 'manufacturing')),
  step_number INT  NOT NULL,
  title       TEXT NOT NULL,
  description TEXT NOT NULL
);
ALTER TABLE process_steps ENABLE ROW LEVEL SECURITY;
CREATE POLICY "public_read"  ON process_steps FOR SELECT USING (true);
CREATE POLICY "admin_write"  ON process_steps FOR ALL
  USING (auth.role() = 'authenticated')
  WITH CHECK (auth.role() = 'authenticated');

-- 11. value_props
CREATE TABLE IF NOT EXISTS value_props (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  number        TEXT NOT NULL,
  title         TEXT NOT NULL,
  description   TEXT NOT NULL,
  display_order INT  DEFAULT 0
);
ALTER TABLE value_props ENABLE ROW LEVEL SECURITY;
CREATE POLICY "public_read"  ON value_props FOR SELECT USING (true);
CREATE POLICY "admin_write"  ON value_props FOR ALL
  USING (auth.role() = 'authenticated')
  WITH CHECK (auth.role() = 'authenticated');

-- 12. quote_requests
CREATE TABLE IF NOT EXISTS quote_requests (
  id          UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  name        TEXT        NOT NULL,
  company     TEXT        NOT NULL,
  phone       TEXT        NOT NULL,
  email       TEXT,
  requirement TEXT        NOT NULL,
  quantity    TEXT,
  message     TEXT,
  status      TEXT        NOT NULL DEFAULT 'new'
                CHECK (status IN ('new', 'contacted', 'closed')),
  created_at  TIMESTAMPTZ DEFAULT NOW()
);
ALTER TABLE quote_requests ENABLE ROW LEVEL SECURITY;
CREATE POLICY "public_insert"        ON quote_requests FOR INSERT WITH CHECK (true);
CREATE POLICY "admin_select_update"  ON quote_requests FOR ALL
  USING (auth.role() = 'authenticated')
  WITH CHECK (auth.role() = 'authenticated');
