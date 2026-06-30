import NavBar from '@/components/ds/NavBar';
import Footer from '@/components/ds/Footer';
import WhatsAppWidget from '@/components/site/WhatsAppWidget';
import MobileCtaBar from '@/components/ds/MobileCtaBar';
import OfferPopup from '@/components/site/OfferPopup';
import { getCompanyInfo } from '@/lib/queries';

export default async function SiteLayout({ children }: { children: React.ReactNode }) {
  const info = await getCompanyInfo();
  return (
    <>
      <NavBar />
      <main>{children}</main>
      <Footer info={info} />
      <WhatsAppWidget phone={info.whatsapp} message={info.whatsapp_message} />
      <MobileCtaBar phone={info.phone} whatsapp={info.whatsapp} />
      <OfferPopup />
    </>
  );
}
