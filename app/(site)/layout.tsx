import NavBar from '@/components/ds/NavBar';
import Footer from '@/components/ds/Footer';
import WhatsAppFab from '@/components/ds/WhatsAppFab';

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavBar />
      <main>{children}</main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
