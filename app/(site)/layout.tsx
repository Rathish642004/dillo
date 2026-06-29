import NavBar from '@/components/ds/NavBar';
import Footer from '@/components/ds/Footer';
import WhatsAppFab from '@/components/ds/WhatsAppFab';
import { getCompanyInfo } from '@/lib/queries';

export default async function SiteLayout({ children }: { children: React.ReactNode }) {
  const info = await getCompanyInfo();
  return (
    <>
      <NavBar />
      <main>{children}</main>
      <Footer info={info} />
      <WhatsAppFab phone={info.whatsapp} message={info.whatsapp_message} />
    </>
  );
}
