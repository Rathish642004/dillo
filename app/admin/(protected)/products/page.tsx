'use client';

import { useEffect, useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import DataTable from '@/components/admin/DataTable';
import ImageUpload from '@/components/admin/ImageUpload';
import type { ProductCategory, Product } from '@/lib/types';
import { Plus, X, Save } from 'lucide-react';

const pageTitle: React.CSSProperties = {
  fontFamily: 'var(--font-display)', fontSize: 32, margin: 0, color: 'var(--text-primary)',
};
const redRule: React.CSSProperties = {
  width: 64, height: 4, background: 'var(--dillo-red-500)', border: 0, margin: '12px 0 32px',
};
const inputStyle: React.CSSProperties = {
  width: '100%', height: 44, padding: '0 12px', border: '1px solid var(--border-default)',
  borderRadius: 'var(--radius-md)', fontFamily: 'var(--font-body)', fontSize: 14,
  background: 'var(--neutral-0)', color: 'var(--text-primary)', outline: 'none', boxSizing: 'border-box',
};
const labelStyle: React.CSSProperties = {
  display: 'block', fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 13, marginBottom: 5,
};

const emptyProduct: Omit<Product, 'id'> = { category_id: '', name: '', price_text: '', moq: '', badge: '', image_url: '', display_order: 0 };

export default function ProductsAdminPage() {
  const [categories, setCategories] = useState<ProductCategory[]>([]);
  const [selectedCat, setSelectedCat] = useState<ProductCategory | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [modalProduct, setModalProduct] = useState<(Partial<Product> & { id?: string }) | null>(null);
  const [editCat, setEditCat] = useState<ProductCategory | null>(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => { loadCategories(); }, []);

  async function loadCategories() {
    const supabase = createClient();
    const { data } = await supabase.from('product_categories').select('*').order('display_order');
    setCategories(data ?? []);
    setLoading(false);
    if ((data ?? []).length > 0) selectCategory((data ?? [])[0]);
  }

  async function selectCategory(cat: ProductCategory) {
    setSelectedCat(cat);
    const supabase = createClient();
    const { data } = await supabase.from('products').select('*').eq('category_id', cat.id).order('display_order');
    setProducts(data ?? []);
  }

  async function saveProduct() {
    if (!modalProduct || !selectedCat) return;
    setSaving(true);
    const supabase = createClient();
    const payload = { ...modalProduct, category_id: selectedCat.id };
    if (modalProduct.id) {
      await supabase.from('products').update(payload).eq('id', modalProduct.id);
    } else {
      await supabase.from('products').insert({ ...emptyProduct, ...payload });
    }
    setSaving(false);
    setModalProduct(null);
    selectCategory(selectedCat);
  }

  async function deleteProduct(row: Product) {
    if (!window.confirm(`Delete "${row.name}"?`)) return;
    const supabase = createClient();
    await supabase.from('products').delete().eq('id', row.id);
    setProducts((prev) => prev.filter((p) => p.id !== row.id));
  }

  async function saveCategory() {
    if (!editCat) return;
    const supabase = createClient();
    await supabase.from('product_categories').update({
      name: editCat.name, description: editCat.description, image_url: editCat.image_url,
    }).eq('id', editCat.id);
    setCategories((prev) => prev.map((c) => c.id === editCat.id ? editCat : c));
    setEditCat(null);
    if (selectedCat?.id === editCat.id) setSelectedCat(editCat);
  }

  return (
    <div>
      <h1 style={pageTitle}>Products</h1>
      <hr style={redRule} />

      {loading ? <p style={{ fontFamily: 'var(--font-body)', color: 'var(--text-muted)' }}>Loading…</p> : (
        <div style={{ display: 'grid', gridTemplateColumns: '220px 1fr', gap: 24 }}>
          {/* Category sidebar */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 13, color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.08em', margin: '0 0 8px' }}>Categories</h3>
            {categories.map((cat) => (
              <div key={cat.id} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <button
                  onClick={() => selectCategory(cat)}
                  style={{
                    flex: 1, textAlign: 'left', padding: '10px 14px',
                    background: selectedCat?.id === cat.id ? 'var(--dillo-red-500)' : 'var(--surface-card)',
                    color: selectedCat?.id === cat.id ? '#fff' : 'var(--text-primary)',
                    border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)',
                    fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 13, cursor: 'pointer',
                  }}
                >{cat.name}</button>
                <button onClick={() => setEditCat({ ...cat })} style={{ padding: '6px', background: 'var(--bg-page-alt)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-md)', cursor: 'pointer', fontSize: 11, color: 'var(--text-secondary)', fontFamily: 'var(--font-heading)' }}>Edit</button>
              </div>
            ))}
          </div>

          {/* Products */}
          <div>
            {selectedCat && (
              <>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
                  <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 20, fontWeight: 700, margin: 0 }}>{selectedCat.name} — Items</h2>
                  <button
                    onClick={() => setModalProduct({ ...emptyProduct, category_id: selectedCat.id, display_order: products.length + 1 })}
                    style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'var(--dillo-red-500)', color: '#fff', border: 'none', borderRadius: 'var(--radius-md)', padding: '8px 16px', fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 13, cursor: 'pointer' }}
                  >
                    <Plus size={14} /> Add item
                  </button>
                </div>
                <DataTable
                  columns={[
                    { key: 'name', label: 'Name' },
                    { key: 'price_text', label: 'Price' },
                    { key: 'moq', label: 'MOQ' },
                    { key: 'badge', label: 'Badge', render: (r) => r.badge ? <span style={{ background: 'var(--dillo-red-50)', color: 'var(--dillo-red-500)', padding: '2px 8px', borderRadius: 'var(--radius-pill)', fontSize: 11, fontFamily: 'var(--font-heading)', fontWeight: 700 }}>{r.badge}</span> : null },
                    { key: 'image_url', label: 'Image', render: (r) => r.image_url ? <img src={r.image_url} alt="" style={{ width: 40, height: 32, objectFit: 'cover', borderRadius: 4 }} /> : <span style={{ color: 'var(--text-muted)', fontSize: 12 }}>–</span> },
                  ]}
                  data={products}
                  onEdit={(row) => setModalProduct({ ...row })}
                  onDelete={deleteProduct}
                />
              </>
            )}
          </div>
        </div>
      )}

      {/* Product modal */}
      {modalProduct !== null && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', zIndex: 200, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 16 }}>
          <div style={{ background: 'var(--surface-card)', borderRadius: 'var(--radius-lg)', padding: 28, width: '100%', maxWidth: 480, boxShadow: 'var(--shadow-xl)', maxHeight: '90vh', overflowY: 'auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 20 }}>
              <h3 style={{ margin: 0, fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 18 }}>{modalProduct.id ? 'Edit Product' : 'Add Product'}</h3>
              <button onClick={() => setModalProduct(null)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)' }}><X size={18} /></button>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[['name', 'Name'], ['price_text', 'Price (e.g. ₹325 / piece)'], ['moq', 'MOQ (e.g. 100 pieces)']].map(([f, l]) => (
                <div key={f}>
                  <label style={labelStyle}>{l}</label>
                  <input value={(modalProduct as Record<string, string>)[f] ?? ''} onChange={(e) => setModalProduct((p) => ({ ...p, [f]: e.target.value }))} style={inputStyle} />
                </div>
              ))}
              <div>
                <label style={labelStyle}>Badge</label>
                <select value={modalProduct.badge ?? ''} onChange={(e) => setModalProduct((p) => ({ ...p, badge: e.target.value }))} style={inputStyle}>
                  <option value="">None</option>
                  <option value="Bestseller">Bestseller</option>
                  <option value="New">New</option>
                </select>
              </div>
              <div>
                <label style={labelStyle}>Display Order</label>
                <input type="number" value={modalProduct.display_order ?? 0} onChange={(e) => setModalProduct((p) => ({ ...p, display_order: Number(e.target.value) }))} style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>Image</label>
                <ImageUpload value={modalProduct.image_url ?? ''} onChange={(url) => setModalProduct((p) => ({ ...p, image_url: url }))} folder="products" />
              </div>
            </div>
            <div style={{ display: 'flex', gap: 10, marginTop: 24, justifyContent: 'flex-end' }}>
              <button onClick={() => setModalProduct(null)} style={{ padding: '9px 18px', background: 'var(--bg-page-alt)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-md)', fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 14, cursor: 'pointer' }}>Cancel</button>
              <button onClick={saveProduct} disabled={saving} style={{ padding: '9px 18px', background: 'var(--dillo-red-500)', color: '#fff', border: 'none', borderRadius: 'var(--radius-md)', fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 14, cursor: saving ? 'wait' : 'pointer' }}>
                {saving ? 'Saving…' : 'Save'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Category edit modal */}
      {editCat !== null && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', zIndex: 200, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 16 }}>
          <div style={{ background: 'var(--surface-card)', borderRadius: 'var(--radius-lg)', padding: 28, width: '100%', maxWidth: 440, boxShadow: 'var(--shadow-xl)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 20 }}>
              <h3 style={{ margin: 0, fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 18 }}>Edit Category</h3>
              <button onClick={() => setEditCat(null)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)' }}><X size={18} /></button>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <div>
                <label style={labelStyle}>Name</label>
                <input value={editCat.name} onChange={(e) => setEditCat((p) => p ? { ...p, name: e.target.value } : p)} style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>Description</label>
                <textarea value={editCat.description ?? ''} onChange={(e) => setEditCat((p) => p ? { ...p, description: e.target.value } : p)} rows={3}
                  style={{ ...inputStyle, height: 'auto', padding: '10px 12px', resize: 'vertical' }} />
              </div>
              <div>
                <label style={labelStyle}>Category Image</label>
                <ImageUpload value={editCat.image_url ?? ''} onChange={(url) => setEditCat((p) => p ? { ...p, image_url: url } : p)} folder="categories" />
              </div>
            </div>
            <div style={{ display: 'flex', gap: 10, marginTop: 24, justifyContent: 'flex-end' }}>
              <button onClick={() => setEditCat(null)} style={{ padding: '9px 18px', background: 'var(--bg-page-alt)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-md)', fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 14, cursor: 'pointer' }}>Cancel</button>
              <button onClick={saveCategory} style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '9px 18px', background: 'var(--dillo-red-500)', color: '#fff', border: 'none', borderRadius: 'var(--radius-md)', fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 14, cursor: 'pointer' }}>
                <Save size={14} /> Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
