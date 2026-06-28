'use client';

import { useState } from 'react';
import Input from '@/components/ds/Input';
import Textarea from '@/components/ds/Textarea';
import Select from '@/components/ds/Select';
import Button from '@/components/ds/Button';

const REQUIREMENT_OPTIONS = [
  { value: 'healthcare', label: 'Healthcare uniforms' },
  { value: 'hospitality', label: 'Hospitality uniforms' },
  { value: 'educational', label: 'Educational uniforms' },
  { value: 'industrial', label: 'Industrial / PPE' },
  { value: 'corporate', label: 'Corporate T-Shirts' },
];

interface ContactInfo {
  address?: string;
  phone?: string;
  email?: string;
  working_hours?: string;
  whatsapp?: string;
  whatsapp_message?: string;
}

export default function ContactForm({ info }: { info: ContactInfo }) {
  const [form, setForm] = useState({
    name: '', company: '', phone: '', email: '',
    requirement: 'healthcare', quantity: '', message: '',
  });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Failed to send');
      setSent(true);
    } catch {
      setError('Something went wrong. Please try again or WhatsApp us directly.');
    } finally {
      setLoading(false);
    }
  };

  const waLink = `https://wa.me/${info.whatsapp ?? '919820212345'}?text=${encodeURIComponent(info.whatsapp_message ?? 'Hi Dillo, I\'d like a uniform quote.')}`;

  const sidebar = [
    { icon: '📍', t: 'Address', v: info.address ?? 'Plot 27, MIDC Phase II, Andheri East, Mumbai 400093' },
    { icon: '📞', t: 'Phone', v: info.phone ?? '+91 98202 12345' },
    { icon: '📧', t: 'Email', v: info.email ?? 'hello@dillouniforms.com' },
    { icon: '🕒', t: 'Working hours', v: info.working_hours ?? 'Mon – Sat, 09:30 – 18:30 IST' },
    { icon: '📱', t: 'WhatsApp', v: (info.phone ?? '+91 98202 12345') + ' — fastest' },
  ];

  return (
    <section style={{ background: 'var(--bg-page)', padding: '80px 0 96px' }}>
      <div className="dillo-container">
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 64, alignItems: 'start' }}>
          {/* Form */}
          <form onSubmit={submit} style={{
            background: 'var(--surface-card)',
            border: '1px solid var(--border-default)',
            borderRadius: 'var(--radius-lg)',
            padding: 40,
            boxShadow: 'var(--shadow-md)',
            display: 'flex', flexDirection: 'column', gap: 20,
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <span style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                width: 44, height: 44, borderRadius: 'var(--radius-md)',
                background: 'var(--dillo-red-500)', color: '#fff',
                fontFamily: 'var(--font-display)', fontSize: 18,
              }}>D</span>
              <div>
                <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: 22, color: 'var(--text-primary)' }}>Request a quote</div>
                <div style={{ fontSize: 13, color: 'var(--text-muted)' }}>We respond within one business day.</div>
              </div>
            </div>
            <hr className="dillo-rule" />

            {sent && (
              <div style={{
                padding: '20px 16px',
                background: 'var(--success-50)',
                border: '1px solid var(--success-500)',
                borderRadius: 'var(--radius-md)',
                color: 'var(--success-500)',
                fontFamily: 'var(--font-heading)', fontWeight: 700,
                display: 'flex', alignItems: 'center', gap: 10,
              }}>
                <span aria-hidden style={{ fontSize: 18 }}>✓</span>
                Thanks {form.name || '—'}. We&rsquo;ve received your request and will reply by phone or email shortly.
              </div>
            )}

            {error && (
              <div style={{
                padding: '16px',
                background: 'var(--danger-50)',
                border: '1px solid var(--danger-500)',
                borderRadius: 'var(--radius-md)',
                color: 'var(--danger-500)',
                fontFamily: 'var(--font-heading)', fontWeight: 600,
              }}>{error}</div>
            )}

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              <Input label="Name" placeholder="Anita Krishnan" value={form.name} onChange={update('name')} required />
              <Input label="Company name" placeholder="MedStar Hospitals" value={form.company} onChange={update('company')} />
              <Input label="Phone" placeholder="+91 …" value={form.phone} onChange={update('phone')} required />
              <Input label="Email" type="email" placeholder="you@company.com" value={form.email} onChange={update('email')} required />
              <Select
                label="Requirement"
                value={form.requirement}
                onChange={update('requirement')}
                options={REQUIREMENT_OPTIONS}
              />
              <Input label="Quantity" placeholder="e.g. 500 pieces" value={form.quantity} onChange={update('quantity')} hint="Minimum order: 50 pieces" />
            </div>
            <Textarea
              label="Message"
              rows={4}
              placeholder="Tell us about customisation, deadlines, or anything else."
              value={form.message}
              onChange={update('message')}
            />
            <div style={{ display: 'flex', gap: 12, marginTop: 8 }}>
              <Button type="submit" variant="primary" size="lg" iconRight={<span aria-hidden>→</span>} disabled={loading || sent}>
                {loading ? 'Sending…' : 'Send request'}
              </Button>
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  padding: '0 22px', height: 56,
                  background: '#25D366', color: '#fff',
                  borderRadius: 'var(--radius-md)',
                  fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 15,
                  textDecoration: 'none',
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M20.5 3.5C18.2 1.2 15.2 0 12 0 5.4 0 0 5.4 0 12c0 2.1.6 4.2 1.6 6L0 24l6.2-1.6c1.8.9 3.8 1.4 5.8 1.4 6.6 0 12-5.4 12-12 0-3.2-1.2-6.2-3.5-8.3z" /></svg>
                WhatsApp instead
              </a>
            </div>
          </form>

          {/* Sidebar */}
          <aside style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {sidebar.map((row) => (
              <div key={row.t} style={{
                display: 'grid', gridTemplateColumns: '44px 1fr', gap: 14,
                padding: '18px 20px',
                background: 'var(--surface-card)',
                border: '1px solid var(--border-default)',
                borderRadius: 'var(--radius-lg)',
                alignItems: 'center',
              }}>
                <span aria-hidden style={{
                  fontSize: 20, width: 44, height: 44,
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  background: 'var(--dillo-red-50)', borderRadius: 'var(--radius-md)',
                }}>{row.icon}</span>
                <div>
                  <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 12, textTransform: 'uppercase' as const, letterSpacing: 'var(--ls-eyebrow)', color: 'var(--text-muted)' }}>{row.t}</div>
                  <div style={{ marginTop: 2, fontSize: 15, color: 'var(--text-primary)', lineHeight: 1.4 }}>{row.v}</div>
                </div>
              </div>
            ))}
          </aside>
        </div>
      </div>
    </section>
  );
}
