import { createClient } from '@/lib/supabase/server';
import type {
  Stat,
  Client,
  Testimonial,
  ProductCategory,
  Product,
  ProductSpec,
  PortfolioProject,
  Industry,
  ProcessStep,
  ValueProp,
} from '@/lib/types';

export async function getCompanyInfo(): Promise<Record<string, string>> {
  const supabase = await createClient();
  const { data, error } = await supabase.from('company_info').select('key, value');
  if (error) {
    console.error('getCompanyInfo:', error);
    return {};
  }
  return Object.fromEntries((data ?? []).map(({ key, value }) => [key, value]));
}

export async function getStats(): Promise<Stat[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from('stats')
    .select('*')
    .order('display_order');
  if (error) {
    console.error('getStats:', error);
    return [];
  }
  return data ?? [];
}

export async function getClients(): Promise<Client[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from('clients')
    .select('*')
    .order('display_order');
  if (error) {
    console.error('getClients:', error);
    return [];
  }
  return data ?? [];
}

export async function getTestimonials(): Promise<Testimonial[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from('testimonials')
    .select('*')
    .order('display_order');
  if (error) {
    console.error('getTestimonials:', error);
    return [];
  }
  return data ?? [];
}

export async function getProductCategories(): Promise<ProductCategory[]> {
  const supabase = await createClient();

  const { data: categories, error: catError } = await supabase
    .from('product_categories')
    .select('*')
    .order('display_order');
  if (catError) {
    console.error('getProductCategories (categories):', catError);
    return [];
  }

  const { data: products, error: prodError } = await supabase
    .from('products')
    .select('*')
    .order('display_order');
  if (prodError) {
    console.error('getProductCategories (products):', prodError);
    return (categories ?? []).map((c) => ({ ...c, products: [] }));
  }

  const productsByCategory = (products ?? []).reduce<Record<string, Product[]>>(
    (acc, product) => {
      if (!acc[product.category_id]) acc[product.category_id] = [];
      acc[product.category_id].push(product);
      return acc;
    },
    {}
  );

  return (categories ?? []).map((cat) => ({
    ...cat,
    products: productsByCategory[cat.id] ?? [],
  }));
}

export async function getProductCategoryBySlug(slug: string): Promise<ProductCategory | null> {
  const supabase = await createClient();
  const { data: cat, error: catError } = await supabase
    .from('product_categories')
    .select('*')
    .eq('slug', slug)
    .single();
  if (catError || !cat) return null;

  const { data: products } = await supabase
    .from('products')
    .select('*')
    .eq('category_id', cat.id)
    .order('display_order');

  return { ...cat, products: products ?? [] };
}

export async function getProductSpecs(): Promise<ProductSpec[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from('product_specs')
    .select('*')
    .order('display_order');
  if (error) {
    console.error('getProductSpecs:', error);
    return [];
  }
  return data ?? [];
}

export async function getPortfolioProjects(): Promise<PortfolioProject[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from('portfolio_projects')
    .select('*')
    .order('display_order');
  if (error) {
    console.error('getPortfolioProjects:', error);
    return [];
  }
  return data ?? [];
}

export async function getIndustries(): Promise<Industry[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from('industries')
    .select('*')
    .order('display_order');
  if (error) {
    console.error('getIndustries:', error);
    return [];
  }
  return data ?? [];
}

export async function getProcessSteps(
  type: 'how_it_works' | 'manufacturing'
): Promise<ProcessStep[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from('process_steps')
    .select('*')
    .eq('type', type)
    .order('step_number');
  if (error) {
    console.error('getProcessSteps:', error);
    return [];
  }
  return data ?? [];
}

export async function getValueProps(): Promise<ValueProp[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from('value_props')
    .select('*')
    .order('display_order');
  if (error) {
    console.error('getValueProps:', error);
    return [];
  }
  return data ?? [];
}
