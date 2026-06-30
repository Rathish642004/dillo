export type CompanyInfo = {
  key: string;
  value: string;
  updated_at?: string;
};

export type Stat = {
  id: string;
  metric: string;
  value: string;
  icon?: string;
  display_order: number;
};

export type Client = {
  id: string;
  name: string;
  logo_url: string | null;
  display_order: number;
};

export type Testimonial = {
  id: string;
  quote: string;
  author: string;
  role: string;
  avatar_url?: string;
  display_order: number;
};

export type ProductCategory = {
  id: string;
  slug: string;
  name: string;
  description?: string;
  image_url?: string;
  display_order: number;
  products?: Product[];
};

export type Product = {
  id: string;
  category_id: string;
  name: string;
  price_text?: string;
  moq?: string;
  badge?: string;
  image_url?: string;
  gender?: 'men' | 'women' | 'unisex';
  display_order: number;
};

export type ProductSpec = {
  id: string;
  title: string;
  value: string;
  display_order: number;
};

export type PortfolioProject = {
  id: string;
  name: string;
  location: string;
  quantity: number;
  vertical: string;
  year: number;
  image_url?: string;
  display_order: number;
};

export type Industry = {
  id: string;
  name: string;
  description: string;
  icon?: string;
  display_order: number;
};

export type ProcessStep = {
  id: string;
  type: 'how_it_works' | 'manufacturing';
  step_number: number;
  title: string;
  description: string;
};

export type ValueProp = {
  id: string;
  number: string;
  title: string;
  description: string;
  display_order: number;
};

export type QuoteRequest = {
  id: string;
  name: string;
  company: string;
  phone: string;
  email?: string;
  requirement: string;
  quantity?: string;
  message?: string;
  status: 'new' | 'contacted' | 'closed';
  created_at: string;
};
