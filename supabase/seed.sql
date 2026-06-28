-- Dillo Uniforms — Seed Data
-- Run AFTER schema.sql in Supabase SQL Editor

-- company_info
INSERT INTO company_info (key, value) VALUES
  ('address',          'Plot 27, MIDC Phase II, Andheri East, Mumbai 400093'),
  ('phone',            '+91 98202 12345'),
  ('email',            'hello@dillouniforms.com'),
  ('working_hours',    'Mon – Sat, 09:30 – 18:30 IST'),
  ('whatsapp',         '919820212345'),
  ('whatsapp_message', 'Hi Dillo, I''d like a uniform quote.'),
  ('response_time',    '24 hours'),
  ('founded_year',     '2005'),
  ('location_city',    'Andheri East, Mumbai')
ON CONFLICT (key) DO UPDATE SET value = EXCLUDED.value;

-- stats
INSERT INTO stats (metric, value, icon, display_order) VALUES
  ('Uniforms delivered',  '2.4M+', 'Package',    1),
  ('Years stitching',     '20',    'Calendar',   2),
  ('Active clients',      '450+',  'Users',      3),
  ('Industries served',   '5',     'LayoutGrid', 4),
  ('Stitching machines',  '240',   'Wrench',     5),
  ('Indian states served','14',    'MapPin',     6),
  ('On-time delivery',    '98%',   'BadgeCheck', 7);

-- clients
INSERT INTO clients (name, logo_url, display_order) VALUES
  ('MedStar Hospitals', NULL, 1),
  ('Taj Hotels',        NULL, 2),
  ('Ryan International',NULL, 3),
  ('Larsen & Toubro',   NULL, 4),
  ('Welspun',           NULL, 5),
  ('Apollo Clinics',    NULL, 6),
  ('Hyatt Place',       NULL, 7),
  ('DPS Group',         NULL, 8);

-- testimonials
INSERT INTO testimonials (quote, author, role, avatar_url, display_order) VALUES
  (
    'Dillo delivered 4,200 school uniforms two weeks ahead of schedule. Parents noticed the quality immediately — no fraying after the first wash.',
    'Priya Nair',
    'Principal, St. Xavier''s School Mumbai',
    NULL, 1
  ),
  (
    'We''ve outfitted three Hyatt properties through Dillo. The F&B vests hold colour wash after wash — exactly what front-of-house needs.',
    'Arjun Mehta',
    'GM, Hyatt Place Mumbai',
    NULL, 2
  ),
  (
    'Scrubs for 900 staff across four Apollo locations. Same spec, same fit. That consistency is rare at this volume.',
    'Dr. Kavitha Rao',
    'Operations Head, Apollo Diagnostics',
    NULL, 3
  );

-- value_props
INSERT INTO value_props (number, title, description, display_order) VALUES
  ('01', 'Made to spec',
   'Every order is manufactured to your exact measurement and colour spec — not modified off-the-shelf stock.', 1),
  ('02', 'Volume without compromise',
   'From 50 pieces to 50,000. Our floor runs the same QC checks at every scale.', 2),
  ('03', 'Wash-tested durability',
   'All fabrics are certified to 100 wash cycles before we quote them to you.', 3),
  ('04', '24-hour quote turnaround',
   'Send us your brief today. A detailed quote — fabric, quantity, timeline — lands in your inbox within 24 hours.', 4);

-- product_categories
INSERT INTO product_categories (slug, name, description, image_url, display_order) VALUES
  ('healthcare',  'Healthcare',         'Scrubs, lab coats and ward uniforms engineered for hygiene and a hundred wash cycles.',               NULL, 1),
  ('hospitality', 'Hospitality',        'Front-of-house, F&B and housekeeping uniforms that hold colour shift after shift.',                   NULL, 2),
  ('educational', 'Educational',        'School uniforms — shirts, trousers, blazers, sportswear — built for daily wear and parental approval.',NULL, 3),
  ('industrial',  'Industrial / PPE',   'Coveralls, hi-vis and work shirts that meet safety standards without sacrificing comfort.',            NULL, 4),
  ('corporate',   'Corporate T-Shirts', 'Customised tees, polos and hoodies for events, agencies and internal branding.',                      NULL, 5);

-- products (healthcare)
INSERT INTO products (category_id, name, price_text, moq, badge, display_order)
SELECT product_categories.id, p.name, p.price_text, p.moq, p.badge, p.display_order FROM product_categories,
(VALUES
  ('V-neck scrubs',    '₹325 / piece', '100 pieces', 'Bestseller', 1),
  ('Lab coats',        '₹370 / piece', '50 pieces',  NULL,         2),
  ('Ward shirts',      '₹280 / piece', '100 pieces', NULL,         3),
  ('OT gowns',         '₹415 / piece', '50 pieces',  NULL,         4),
  ('Patient gowns',    '₹195 / piece', '200 pieces', NULL,         5),
  ('Caps & masks set', '₹85 / set',    '500 sets',   'New',        6)
) AS p(name, price_text, moq, badge, display_order)
WHERE product_categories.slug = 'healthcare';

-- products (hospitality)
INSERT INTO products (category_id, name, price_text, moq, badge, display_order)
SELECT product_categories.id, p.name, p.price_text, p.moq, p.badge, p.display_order FROM product_categories,
(VALUES
  ('Reception suits',    '₹850 / piece', '50 pieces',  NULL,         1),
  ('F&B vests',          '₹415 / piece', '100 pieces', 'Bestseller', 2),
  ('Housekeeping sets',  '₹460 / piece', '100 pieces', NULL,         3),
  ('Chef coats',         '₹325 / piece', '50 pieces',  NULL,         4),
  ('Apron sets',         '₹195 / set',   '100 sets',   NULL,         5),
  ('Bell-boy uniforms',  '₹780 / piece', '50 pieces',  NULL,         6)
) AS p(name, price_text, moq, badge, display_order)
WHERE product_categories.slug = 'hospitality';

-- products (educational)
INSERT INTO products (category_id, name, price_text, moq, badge, display_order)
SELECT product_categories.id, p.name, p.price_text, p.moq, p.badge, p.display_order FROM product_categories,
(VALUES
  ('Shirts',          '₹195 / piece', '200 pieces', 'Bestseller', 1),
  ('Trousers / skirts','₹235 / piece','200 pieces', NULL,         2),
  ('Blazers',         '₹460 / piece', '100 pieces', NULL,         3),
  ('Ties & belts',    '₹85 / piece',  '200 pieces', NULL,         4),
  ('Sportswear set',  '₹280 / set',   '100 sets',   NULL,         5),
  ('House T-shirts',  '₹150 / piece', '100 pieces', 'New',        6)
) AS p(name, price_text, moq, badge, display_order)
WHERE product_categories.slug = 'educational';

-- products (industrial)
INSERT INTO products (category_id, name, price_text, moq, badge, display_order)
SELECT product_categories.id, p.name, p.price_text, p.moq, p.badge, p.display_order FROM product_categories,
(VALUES
  ('Coveralls',       '₹510 / piece', '50 pieces',  'Bestseller', 1),
  ('Hi-vis vests',    '₹235 / piece', '100 pieces', NULL,         2),
  ('Work shirts',     '₹280 / piece', '100 pieces', NULL,         3),
  ('Cargo trousers',  '₹325 / piece', '100 pieces', NULL,         4),
  ('FR jackets',      '₹690 / piece', '50 pieces',  NULL,         5),
  ('Safety caps',     '₹95 / piece',  '500 pieces', 'New',        6)
) AS p(name, price_text, moq, badge, display_order)
WHERE product_categories.slug = 'industrial';

-- products (corporate)
INSERT INTO products (category_id, name, price_text, moq, badge, display_order)
SELECT product_categories.id, p.name, p.price_text, p.moq, p.badge, p.display_order FROM product_categories,
(VALUES
  ('Crew tees',     '₹195 / piece', '50 pieces', 'Bestseller', 1),
  ('Polos',         '₹280 / piece', '50 pieces', NULL,         2),
  ('Hoodies',       '₹460 / piece', '50 pieces', NULL,         3),
  ('Quarter-zips',  '₹415 / piece', '50 pieces', NULL,         4),
  ('Caps',          '₹150 / piece', '100 pieces',NULL,         5),
  ('Tote sets',     '₹235 / set',   '100 sets',  'New',        6)
) AS p(name, price_text, moq, badge, display_order)
WHERE product_categories.slug = 'corporate';

-- product_specs
INSERT INTO product_specs (title, value, display_order) VALUES
  ('Fabric',          'Cotton-poly blends, pure cotton, poly-viscose — GSM matched to your vertical',  1),
  ('Minimum order',   '50 pieces (T-shirts) · 100 pieces (uniforms)',                                  2),
  ('Sampling',        'Pre-production samples in 5–7 working days',                                    3),
  ('Bulk lead time',  '21–28 working days after sample sign-off',                                      4),
  ('Customisation',   'Embroidery, screen print, woven label, reflective tape',                        5),
  ('Care standard',   'All fabrics rated for 100 wash cycles at 60°C',                                 6);

-- portfolio_projects
INSERT INTO portfolio_projects (name, location, quantity, vertical, year, image_url, display_order) VALUES
  ('MedStar Hospitals',    'Mumbai, Pune, Nashik', 12400, 'Healthcare',  2024, NULL, 1),
  ('Hyatt Place',          'Mumbai',               1850,  'Hospitality', 2024, NULL, 2),
  ('St. Xavier''s School', 'Mumbai',               4200,  'Educational', 2023, NULL, 3),
  ('Welspun Manufacturing','Vapi, Gujarat',         3600,  'Industrial',  2024, NULL, 4),
  ('Razorpay Hackathon',   'Bangalore',             850,   'Corporate',   2025, NULL, 5),
  ('Apollo Diagnostics',   'Pan-India',             8900,  'Healthcare',  2023, NULL, 6),
  ('Taj Bengal',           'Kolkata',               2200,  'Hospitality', 2022, NULL, 7),
  ('Ryan International',   '16 campuses',          18400,  'Educational', 2024, NULL, 8);

-- industries
INSERT INTO industries (name, description, icon, display_order) VALUES
  ('Healthcare',         'Scrubs, lab coats, ward uniforms — clinics & hospitals',          'Stethoscope',    1),
  ('Hospitality',        'Hotel front-of-house, F&B, housekeeping, chef whites',            'ChefHat',        2),
  ('Educational',        'School uniforms — shirts, trousers, skirts, blazers, sportswear', 'GraduationCap',  3),
  ('Industrial / PPE',   'Coveralls, work shirts, hi-vis, factory floor',                   'HardHat',        4),
  ('Corporate T-Shirts', 'Customised tees for events, agencies, internal branding',         'Shirt',          5);

-- process_steps (how_it_works)
INSERT INTO process_steps (type, step_number, title, description) VALUES
  ('how_it_works', 1, 'Send your brief',
   'Tell us the industry, headcount, any logo or colour requirements. A WhatsApp photo of your current uniform helps.'),
  ('how_it_works', 2, 'Receive your quote',
   'We reply within 24 hours with fabric options, per-piece pricing, and a lead-time schedule.'),
  ('how_it_works', 3, 'Approve the sample',
   'We stitch one pre-production sample. You approve fit, fabric, and finish before we cut the full order.'),
  ('how_it_works', 4, 'Take delivery',
   'Bulk order ships 21–28 working days after sample sign-off. Pan-India delivery included.');

-- process_steps (manufacturing)
INSERT INTO process_steps (type, step_number, title, description) VALUES
  ('manufacturing', 1, 'Fabric sourcing',
   'We source certified cotton-poly and poly-viscose fabrics from mills in Surat and Tiruppur — GSM verified on arrival.'),
  ('manufacturing', 2, 'Pattern & cutting',
   'Each style is pattern-graded in-house. Fabric is spread and cut in batches of 500 pieces per table.'),
  ('manufacturing', 3, 'Stitching floor',
   '240 industrial machines across three floors. Each operator is certified on their specific stitch type.'),
  ('manufacturing', 4, 'Quality checks',
   'Every piece is checked at three stages: post-cut, post-stitch, and pre-pack. Rejects are reworked, not shipped.'),
  ('manufacturing', 5, 'Packing & dispatch',
   'Garments are pressed, folded to spec, poly-bagged per size, and packed by order. Dispatched within 48 hours of QC clearance.');
