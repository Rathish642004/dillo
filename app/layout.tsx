import type { Metadata } from 'next';
import { Archivo_Black, Archivo, Source_Serif_4, Public_Sans } from 'next/font/google';
import '@/styles/globals.css';

const archivoBlack = Archivo_Black({
  weight: '400',
  variable: '--font-archivo-black',
  subsets: ['latin'],
  display: 'swap',
});

const archivo = Archivo({
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-archivo',
  subsets: ['latin'],
  display: 'swap',
});

const sourceSerif = Source_Serif_4({
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-source-serif',
  subsets: ['latin'],
  display: 'swap',
});

const publicSans = Public_Sans({
  weight: ['400', '500', '600', '700'],
  variable: '--font-public-sans',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    template: '%s | Dillo Uniforms',
    default: 'Dillo Uniforms — The Perfect Uniform Makers',
  },
  description:
    'B2B uniform manufacturer supplying healthcare, hospitality, educational, industrial and corporate uniforms across India. Get a quote within 24 hours.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${archivoBlack.variable} ${archivo.variable} ${sourceSerif.variable} ${publicSans.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
