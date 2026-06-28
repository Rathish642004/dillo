'use client';

import { useEffect, useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import ImageUpload from '@/components/admin/ImageUpload';
import type { Client } from '@/lib/types';
import { Plus, X, Pencil, Trash2 } from 'lucide-react';

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

const empty: Omit<Client, 'id'> = { name: '', logo_url: '', display_order: 0 };

export default function ClientsAdminPage() {
  const [clients, setClients] = useState<Client[]>([]);
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState<Partial<Client> | null>(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => { load(); }, []);

  async function load() {
    const supabase = createClient();
    const { data } = await supabase.from('clients').select('*').order('display_order');
    setClients(data ?? []);
    setLoading(false);
  }

  async function save() {
    if (!modal) return;
    setSaving(true);
    const supabase = createClient();
    if (modal.id) {
      await supabase.from('clients').update(modal).eq('id', modal.id);
    } else {
      await supabase.from('clients').insert({ ...empty, ...modal });
    }
    setSaving(false);
    setModal(null);
    load();
  }

  async function handleDelete(client: Client) {
    if (!window.confirm(`Remove "${client.name}" from clients?`)) return;
    const supabase = createClient();
    await supabase.from('clients').delete().eq('id', client.id);
    setClients((prev) => prev.filter((c) => c.id !== client.id));
  }

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <h1 style={pageTitle}>Clients</h1>
        <button
          onClick={() => setModal({ ...empty, display_order: clients.length + 1 })}
          style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'var(--dillo-red-500)', color: '#fff', border: 'none', borderRadius: 'var(--radius-md)', padding: '10px 18px', fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 14, cursor: 'pointer', marginTop: 4 }}
        >
          <Plus size={14} /> Add client
        </button>
      </div>
      <hr style={redRule} />

      {loading ? (
        <p style={{ fontFamily: 'var(--font-body)', color: 'var(--text-muted)' }}>Loading…</p>
      ) : clients.length === 0 ? (
        <p style={{ fontFamily: 'var(--font-body)', color: 'var(--text-muted)' }}>No clients yet.</p>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: 16 }}>
          {clients.map((client) => (
            <div key={client.id} style={{
              background: 'var(--surface-card)', borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--border-subtle)', padding: 16,
              display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10,
              boxShadow: 'var(--shadow-md)',
            }}>
              {client.logo_url ? (
                <img src={client.logo_url} alt={client.name}
                  style={{ width: '100%', height: 80, objectFit: 'contain', borderRadius: 'var(--radius-md)' }}
                />
              ) : (
                <div style={{
                  width: '100%', height: 80, background: 'var(--bg-page-alt)',
                  borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 13, color: 'var(--text-muted)',
                  textAlign: 'center', padding: '0 8px',
                }}>
                  {client.name}
                </div>
              )}
              <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 13, color: 'var(--text-primary)', textAlign: 'center' }}>
                {client.name}
              </span>
              <div style={{ display: 'flex', gap: 6, width: '100%' }}>
                <button onClick={() => setModal({ ...client })} style={{ flex: 1, padding: '6px', background: 'var(--dillo-navy-50)', border: 'none', borderRadius: 'var(--radius-md)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 4, fontFamily: 'var(--font-heading)', fontSize: 12, color: 'var(--dillo-navy-500)' }}>
                  <Pencil size={11} /> Edit
                </button>
                <button onClick={() => handleDelete(client)} style={{ flex: 1, padding: '6px', background: 'var(--dillo-red-50)', border: 'none', borderRadius: 'var(--radius-md)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 4, fontFamily: 'var(--font-heading)', fontSize: 12, color: 'var(--dillo-red-500)' }}>
                  <Trash2 size={11} /> Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {modal !== null && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', zIndex: 200, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 16 }}>
          <div style={{ background: 'var(--surface-card)', borderRadius: 'var(--radius-lg)', padding: 28, width: '100%', maxWidth: 400, boxShadow: 'var(--shadow-xl)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 20 }}>
              <h3 style={{ margin: 0, fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 18 }}>{modal.id ? 'Edit Client' : 'Add Client'}</h3>
              <button onClick={() => setModal(null)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)' }}><X size={18} /></button>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <div>
                <label style={labelStyle}>Client Name</label>
                <input value={modal.name ?? ''} onChange={(e) => setModal((p) => ({ ...p, name: e.target.value }))} style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>Display Order</label>
                <input type="number" value={modal.display_order ?? 0} onChange={(e) => setModal((p) => ({ ...p, display_order: Number(e.target.value) }))} style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>Logo</label>
                <ImageUpload value={modal.logo_url ?? ''} onChange={(url) => setModal((p) => ({ ...p, logo_url: url }))} folder="clients" />
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
