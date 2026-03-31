import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { VisualEditing } from 'next-sanity/visual-editing';
import { draftMode } from 'next/headers';

export const metadata = {
  title: 'Brightbase — Your Fractional Creative Team',
  description: 'Full-service creative for B2B SaaS. Design, development, video, and copy — one subscription, one team.',
};

export default async function RootLayout({ children }) {
  const { isEnabled } = await draftMode();
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fragment+Mono:wght@400&family=Geist:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {!isEnabled && <Navbar />}
        <main>{children}</main>
        {!isEnabled && <Footer />}
        <VisualEditing />
      </body>
    </html>
  );
}
