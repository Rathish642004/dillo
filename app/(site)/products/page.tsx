import type { Metadata } from 'next';
import ProductsClient from '@/components/site/ProductsClient';
import { getProductCategories, getProductSpecs } from '@/lib/queries';

export const metadata: Metadata = { title: 'Our Products' };
export const revalidate = 3600;

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ cat?: string }>;
}) {
  const [categories, specs, params] = await Promise.all([
    getProductCategories(),
    getProductSpecs(),
    searchParams,
  ]);

  return (
    <ProductsClient
      categories={categories}
      specs={specs}
      initialCategory={params.cat}
    />
  );
}
