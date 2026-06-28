'use client';

import { useEffect, useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import DataTable from '@/components/admin/DataTable';
import ImageUpload from '@/components/admin/ImageUpload';
import type { Testimonial } from '@/lib/types';
import { Plus, X } from 'lucide-react';

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

const empty: Omit<Testimonial, 'id'> = { quote: '', author: '', role: '', avatar_url: '', display_order: 0 };

export default function TestimonialsAdminPage() {
  const [items, setItems] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState<Partial<Testimonial> | null>(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => { load(); }, []);

  async function load() {
    const supabase = createClient();
    const { data } = await supabase.from('testimonials').select('*').order('display_order');
    setItems(data ?? []);
    setLoading(false);
  }

  async function save() {
    if (!modal) return;
    setSaving(true);
    const supabase = createClient();
    if (modal.id) {
      await supabase.from('testimonials').update(modal).eq('id', modal.id);
    } else {
      await supabase.from('testimonials').insert({ ...empty, ...modal });
    }
    setSaving(false);
    setModal(null);
    load();
  }

  async function handleDelete(row: Testimonial) {
    if (!window.confirm(`Delete testimonial from "${row.author}"?`)) return;
    const supabase = createClient();
    await supabase.from('testimonials').delete().eq('id', row.id);
    setItems((prev) => prev.filter((t) => t.id !== row.id));
  }

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <h1 style={pageTitle}>Testimonials</h1>
        <button
          onClick={() => setModal({ ...empty, display_order: items.length + 1 })}
          style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'var(--dillo-red-500)', color: '#fff', border: 'none', borderRadius: 'var(--radius-md)', padding: '10px 18px', fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 14, cursor: 'pointer', marginTop: 4 }}
        >
          <Plus size={14} /> Add testimonial
        </button>
      </div>
      <hr style={redRule} />

      {loading ? <p style={{ fontFamily: 'var(--font-body)', color: 'var(--text-muted)' }}>Loading…</p> : (
        <DataTable
          columns={[
            { key: 'author', label: 'Author' },
            { key: 'role', label: 'Role' },
            { key: 'quote', label: 'Quote', render: (r) => <span title={r.quote}>{r.quote.length > 60 ? r.quote.slice(0, 60) + '…' : r.quote}</span> },
            { key: 'avatar_url', label: 'Avatar', render: (r) => r.avatar_url ? <img src={r.avatar_url} alt="" style={{ width: 36, height: 36, borderRadius: '50%', objectFit: 'cover' }} /> : <span style={{ color: 'var(--text-muted)', fontSize: 12 }}>–</span> },
          ]}
          data={items}
          onEdit={(row) => setModal({ ...row })}
          onDelete={handleDelete}
        />
      )}

      {modal !== null && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', zIndex: 200, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 16 }}>
          <div style={{ background: 'var(--surface-card)', borderRadius: 'var(--radius-lg)', padding: 28, width: '100%', maxWidth: 480, boxShadow: 'var(--shadow-xl)', maxHeight: '90vh', overflowY: 'auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 20 }}>
              <h3 style={{ margin: 0, fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 18 }}>{modal.id ? 'Edit Testimonial' : 'Add Testimonial'}</h3>
              <button onClick={() => setModal(null)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)' }}><X size={18} /></button>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <div>
                <label style={labelStyle}>Quote</label>
                <textarea value={modal.quote ?? ''} onChange={(e) => setModal((p) => ({ ...p, quote: e.target.value }))} rows={4}
                  style={{ ...inputStyle, height: 'auto', padding: '10px 12px', resize: 'vertical' }} />
              </div>
              {[['author', 'Author Name'], ['role', 'Role / Company']].map(([f, l]) => (
                <div key={f}>
                  <label style={labelStyle}>{l}</label>
                  <input value={(modal as Record<string, unknown>)[f] as string ?? ''} onChange={(e) => setModal((p) => ({ ...p, [f]: e.target.value }))} style={inputStyle} />
                </div>
              ))}
              <div>
                <label style={labelStyle}>Display Order</label>
                <input type="number" value={modal.display_order ?? 0} onChange={(e) => setModal((p) => ({ ...p, display_order: Number(e.target.value) }))} style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>Avatar Photo</label>
                <ImageUpload value={modal.avatar_url ?? ''} onChange={(url) => setModal((p) => ({ ...p, avatar_url: url }))} folder="testimonials" />
              </div>
            </div>
            <div style={{ display: 'flex', gap: 10, marginTop: 24, justifyContent: 'flex-end' }}>
              <button onClick={() => setModal(null)} style={{ padding: '9px 18px', background: 'var(--bg-page-alt)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-md)', fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 14, cursor: 'pointer' }}>Cancel</button>
              <button onClick={save} disabled={saving} style={{ padding: '9px 18px', background: 'var(--dillo-red-500)', color: '#fff', border: 'none', borderRadius: 'var(--radius-md)', fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 14, cursor: saving ? 'wait' : 'pointer' }}>
                {saving ? 'Saving…' : 'Save'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
