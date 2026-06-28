import { createClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';
import AdminSidebar from '@/components/admin/AdminSidebar';

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) redirect('/admin/login');

  // Fetch new quote count for sidebar badge
  const { count } = await supabase
    .from('quote_requests')
    .select('*', { count: 'exact', head: true })
    .eq('status', 'new');

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--bg-page-alt)' }}>
      <AdminSidebar newQuoteCount={count ?? 0} />
      <main style={{
        flex: 1, padding: '32px',
        paddingTop: 'max(32px, env(safe-area-inset-top))',
        overflowX: 'hidden',
        maxWidth: '100%',
      }}
        className="admin-main"
      >
        <style>{`
          @media (max-width: 768px) {
            .admin-main { padding-top: 80px !important; }
          }
        `}</style>
        {children}
      </main>
    </div>
  );
}
