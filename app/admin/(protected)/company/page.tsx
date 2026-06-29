'use client';

import { useEffect, useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import DataTable from '@/components/admin/DataTable';
import type { Stat } from '@/lib/types';
import { Plus, X, Save } from 'lucide-react';

const pageTitle: React.CSSProperties = {
  fontFamily: 'var(--font-display)', fontSize: 32, margin: 0, color: 'var(--text-primary)',
};
const redRule: React.CSSProperties = {
  width: 64, height: 4, background: 'var(--dillo-red-500)', border: 0, margin: '12px 0 32px',
};
const sectionHead: React.CSSProperties = {
  fontFamily: 'var(--font-heading)', fontSize: 20, fontWeight: 700, margin: '0 0 20px',
};
const inputStyle: React.CSSProperties = {
  width: '100%', height: 44, padding: '0 12px', border: '1px solid var(--border-default)',
  borderRadius: 'var(--radius-md)', fontFamily: 'var(--font-body)', fontSize: 14,
  background: 'var(--neutral-0)', color: 'var(--text-primary)', outline: 'none', boxSizing: 'border-box',
};
const labelStyle: React.CSSProperties = {
  display: 'block', fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 13, marginBottom: 5,
};

const INFO_KEYS = ['address', 'phone', 'email', 'working_hours', 'whatsapp', 'response_time', 'map_lat', 'map_lng'];
const INFO_LABELS: Record<string, string> = {
  address: 'Address', phone: 'Phone', email: 'Email',
  working_hours: 'Working Hours', whatsapp: 'WhatsApp Number', response_time: 'Response Time',
  map_lat: 'Map Latitude', map_lng: 'Map Longitude',
};

export default function CompanyPage() {
  const [info, setInfo] = useState<Record<string, string>>({});
  const [stats, setStats] = useState<Stat[]>([]);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [modalStat, setModalStat] = useState<Partial<Stat> | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => { load(); }, []);

  async function load() {
    const supabase = createClient();
    const [{ data: infoData }, { data: statsData }] = await Promise.all([
      supabase.from('company_info').select('*'),
      supabase.from('stats').select('*').order('display_order'),
    ]);
    const map: Record<string, string> = {};
    (infoData ?? []).forEach((r: { key: string; value: string }) => { map[r.key] = r.value; });
    setInfo(map);
    setStats(statsData ?? []);
    setLoading(false);
  }

  async function saveInfo() {
    setSaving(true);
    const supabase = createClient();
    await Promise.all(
      INFO_KEYS.map((k) =>
        supabase.from('company_info').upsert({ key: k, value: info[k] ?? '' })
      )
    );
    setSaving(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  async function saveStat() {
    if (!modalStat) return;
    const supabase = createClient();
    if (modalStat.id) {
      await supabase.from('stats').update(modalStat).eq('id', modalStat.id);
    } else {
      await supabase.from('stats').insert({ ...modalStat, display_order: modalStat.display_order ?? stats.length + 1 });
    }
    setModalStat(null);
    load();
  }

  async function deleteStat(row: Stat) {
    if (!window.confirm(`Delete stat "${row.metric}"?`)) return;
    const supabase = createClient();
    await supabase.from('stats').delete().eq('id', row.id);
    setStats((prev) => prev.filter((s) => s.id !== row.id));
  }

  return (
    <div>
      <h1 style={pageTitle}>Company</h1>
      <hr style={redRule} />

      {loading ? <p style={{ fontFamily: 'var(--font-body)', color: 'var(--text-muted)' }}>Loading…</p> : (
        <>
          {/* Company Info */}
          <div style={{ background: 'var(--surface-card)', borderRadius: 'var(--radius-lg)', padding: '28px', marginBottom: 40, boxShadow: 'var(--shadow-md)', border: '1px solid var(--border-subtle)' }}>
            <h2 style={sectionHead}>Contact Information</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px 24px', marginBottom: 24 }}>
              {INFO_KEYS.map((k) => (
                <div key={k} style={k === 'address' ? { gridColumn: '1 / -1' } : {}}>
                  <label style={labelStyle}>{INFO_LABELS[k]}</label>
                  <input
                    value={info[k] ?? ''}
                    onChange={(e) => setInfo((prev) => ({ ...prev, [k]: e.target.value }))}
                    style={inputStyle}
                  />
                </div>
              ))}
            </div>
            <button
              onClick={saveInfo} disabled={saving}
              style={{
                display: 'flex', alignItems: 'center', gap: 8,
                background: saved ? 'var(--success-500)' : 'var(--dillo-red-500)',
                color: '#fff', border: 'none', borderRadius: 'var(--radius-md)',
                padding: '10px 20px', fontFamily: 'var(--font-heading)', fontWeight: 700,
                fontSize: 14, cursor: saving ? 'wait' : 'pointer',
              }}
            >
              <Save size={14} /> {saved ? 'Saved!' : saving ? 'Saving…' : 'Save changes'}
            </button>
          </div>

          {/* Stats */}
          <div style={{ background: 'var(--surface-card)', borderRadius: 'var(--radius-lg)', padding: '28px', boxShadow: 'var(--shadow-md)', border: '1px solid var(--border-subtle)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
              <h2 style={{ ...sectionHead, margin: 0 }}>Key Stats</h2>
              <button
                onClick={() => setModalStat({ metric: '', value: '', display_order: stats.length + 1 })}
                style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'var(--dillo-red-500)', color: '#fff', border: 'none', borderRadius: 'var(--radius-md)', padding: '8px 16px', fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 13, cursor: 'pointer' }}
              >
                <Plus size={14} /> Add stat
              </button>
            </div>
            <DataTable
              columns={[
                { key: 'metric', label: 'Metric' },
                { key: 'value', label: 'Value' },
                { key: 'icon', label: 'Icon' },
                { key: 'display_order', label: 'Order' },
              ]}
              data={stats}
              onEdit={(row) => setModalStat({ ...row })}
              onDelete={deleteStat}
            />
          </div>
        </>
      )}

      {/* Stat modal */}
      {modalStat !== null && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', zIndex: 200, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 16 }}>
          <div style={{ background: 'var(--surface-card)', borderRadius: 'var(--radius-lg)', padding: 28, width: '100%', maxWidth: 440, boxShadow: 'var(--shadow-xl)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 20 }}>
              <h3 style={{ margin: 0, fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 18 }}>{modalStat.id ? 'Edit Stat' : 'Add Stat'}</h3>
              <button onClick={() => setModalStat(null)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)' }}><X size={18} /></button>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[['metric', 'Metric (e.g. Uniforms delivered)'], ['value', 'Value (e.g. 2.4M+)'], ['icon', 'Lucide Icon Name (e.g. Package)']].map(([field, label]) => (
                <div key={field}>
                  <label style={labelStyle}>{label}</label>
                  <input
                    value={(modalStat as Record<string, string>)[field] ?? ''}
                    onChange={(e) => setModalStat((prev) => ({ ...prev, [field]: e.target.value }))}
                    style={inputStyle}
                  />
                </div>
              ))}
              <div>
                <label style={labelStyle}>Display Order</label>
                <input type="number" value={modalStat.display_order ?? 0}
                  onChange={(e) => setModalStat((prev) => ({ ...prev, display_order: Number(e.target.value) }))}
                  style={inputStyle}
                />
              </div>
            </div>
            <div style={{ display: 'flex', gap: 10, marginTop: 24, justifyContent: 'flex-end' }}>
              <button onClick={() => setModalStat(null)} style={{ padding: '9px 18px', background: 'var(--bg-page-alt)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-md)', fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 14, cursor: 'pointer' }}>Cancel</button>
              <button onClick={saveStat} style={{ padding: '9px 18px', background: 'var(--dillo-red-500)', color: '#fff', border: 'none', borderRadius: 'var(--radius-md)', fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 14, cursor: 'pointer' }}>Save</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
