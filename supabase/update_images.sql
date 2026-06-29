-- Run this in Supabase SQL Editor to add images to existing data
-- (Only needed if you already ran seed.sql — fresh installs can skip this)

-- Product category images
UPDATE product_categories SET image_url = 'https://images.unsplash.com/photo-1666214280391-8ff5bd3c0bf0?w=900&q=80' WHERE slug = 'healthcare';
UPDATE product_categories SET image_url = 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=900&q=80' WHERE slug = 'hospitality';
UPDATE product_categories SET image_url = 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=900&q=80' WHERE slug = 'educational';
UPDATE product_categories SET image_url = 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=900&q=80' WHERE slug = 'industrial';
UPDATE product_categories SET image_url = 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=900&q=80' WHERE slug = 'corporate';

-- Testimonial avatars (matched by author name)
UPDATE testimonials SET avatar_url = 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80' WHERE author = 'Priya Nair';
UPDATE testimonials SET avatar_url = 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&q=80' WHERE author = 'Arjun Mehta';
UPDATE testimonials SET avatar_url = 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=200&q=80' WHERE author = 'Dr. Kavitha Rao';

-- Portfolio project images (matched by vertical)
UPDATE portfolio_projects SET image_url = 'https://images.unsplash.com/photo-1666214280391-8ff5bd3c0bf0?w=900&q=80' WHERE vertical = 'Healthcare';
UPDATE portfolio_projects SET image_url = 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=900&q=80' WHERE vertical = 'Hospitality';
UPDATE portfolio_projects SET image_url = 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=900&q=80' WHERE vertical = 'Educational';
UPDATE portfolio_projects SET image_url = 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=900&q=80' WHERE vertical = 'Industrial';
UPDATE portfolio_projects SET image_url = 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=900&q=80' WHERE vertical = 'Corporate';
