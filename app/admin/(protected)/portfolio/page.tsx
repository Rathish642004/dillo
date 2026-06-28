'use client';

import { useEffect, useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import DataTable from '@/components/admin/DataTable';
import ImageUpload from '@/components/admin/ImageUpload';
import type { PortfolioProject } from '@/lib/types';
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

const VERTICALS = ['Healthcare', 'Hospitality', 'Educational', 'Industrial', 'Corporate'];
const emptyProject: Omit<PortfolioProject, 'id'> = { name: '', location: '', quantity: 0, vertical: 'Healthcare', year: new Date().getFullYear(), image_url: '', display_order: 0 };

export default function PortfolioAdminPage() {
  const [projects, setProjects] = useState<PortfolioProject[]>([]);
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState<Partial<PortfolioProject> | null>(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => { load(); }, []);

  async function load() {
    const supabase = createClient();
    const { data } = await supabase.from('portfolio_projects').select('*').order('display_order');
    setProjects(data ?? []);
    setLoading(false);
  }

  async function save() {
    if (!modal) return;
    setSaving(true);
    const supabase = createClient();
    if (modal.id) {
      await supabase.from('portfolio_projects').update(modal).eq('id', modal.id);
    } else {
      await supabase.from('portfolio_projects').insert({ ...emptyProject, ...modal });
    }
    setSaving(false);
    setModal(null);
    load();
  }

  async function handleDelete(row: PortfolioProject) {
    if (!window.confirm(`Delete project "${row.name}"?`)) return;
    const supabase = createClient();
    await supabase.from('portfolio_projects').delete().eq('id', row.id);
    setProjects((prev) => prev.filter((p) => p.id !== row.id));
  }

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <h1 style={pageTitle}>Portfolio</h1>
        <button
          onClick={() => setModal({ ...emptyProject, display_order: projects.length + 1 })}
          style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'var(--dillo-red-500)', color: '#fff', border: 'none', borderRadius: 'var(--radius-md)', padding: '10px 18px', fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 14, cursor: 'pointer', marginTop: 4 }}
        >
          <Plus size={14} /> Add project
        </button>
      </div>
      <hr style={redRule} />

      {loading ? <p style={{ fontFamily: 'var(--font-body)', color: 'var(--text-muted)' }}>Loading…</p> : (
        <DataTable
          columns={[
            { key: 'name', label: 'Client' },
            { key: 'location', label: 'Location' },
            { key: 'quantity', label: 'Pieces', render: (r) => r.quantity.toLocaleString('en-IN') },
            { key: 'vertical', label: 'Vertical' },
            { key: 'year', label: 'Year' },
            { key: 'image_url', label: 'Image', render: (r) => r.image_url ? <img src={r.image_url} alt="" style={{ width: 48, height: 36, objectFit: 'cover', borderRadius: 4 }} /> : <span style={{ color: 'var(--text-muted)', fontSize: 12 }}>–</span> },
          ]}
          data={projects}
          onEdit={(row) => setModal({ ...row })}
          onDelete={handleDelete}
        />
      )}

      {modal !== null && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', zIndex: 200, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 16 }}>
          <div style={{ background: 'var(--surface-card)', borderRadius: 'var(--radius-lg)', padding: 28, width: '100%', maxWidth: 480, boxShadow: 'var(--shadow-xl)', maxHeight: '90vh', overflowY: 'auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 20 }}>
              <h3 style={{ margin: 0, fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 18 }}>{modal.id ? 'Edit Project' : 'Add Project'}</h3>
              <button onClick={() => setModal(null)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)' }}><X size={18} /></button>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[['name', 'Client Name'], ['location', 'Location']].map(([f, l]) => (
                <div key={f}>
                  <label style={labelStyle}>{l}</label>
                  <input value={(modal as Record<string, unknown>)[f] as string ?? ''} onChange={(e) => setModal((p) => ({ ...p, [f]: e.target.value }))} style={inputStyle} />
                </div>
              ))}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                <div>
                  <label style={labelStyle}>Quantity (pieces)</label>
                  <input type="number" value={modal.quantity ?? 0} onChange={(e) => setModal((p) => ({ ...p, quantity: Number(e.target.value) }))} style={inputStyle} />
                </div>
                <div>
                  <label style={labelStyle}>Year</label>
                  <input type="number" value={modal.year ?? new Date().getFullYear()} onChange={(e) => setModal((p) => ({ ...p, year: Number(e.target.value) }))} style={inputStyle} />
                </div>
              </div>
              <div>
                <label style={labelStyle}>Vertical</label>
                <select value={modal.vertical ?? 'Healthcare'} onChange={(e) => setModal((p) => ({ ...p, vertical: e.target.value }))} style={inputStyle}>
                  {VERTICALS.map((v) => <option key={v} value={v}>{v}</option>)}
                </select>
              </div>
              <div>
                <label style={labelStyle}>Display Order</label>
                <input type="number" value={modal.display_order ?? 0} onChange={(e) => setModal((p) => ({ ...p, display_order: Number(e.target.value) }))} style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>Project Image</label>
                <ImageUpload value={modal.image_url ?? ''} onChange={(url) => setModal((p) => ({ ...p, image_url: url }))} folder="portfolio" />
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
