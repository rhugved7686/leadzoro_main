import type { Metadata, Viewport } from 'next';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'SEO Services in India & Pune | Best SEO Company - Leadzoro',
  description: 'Rank higher with Leadzoro – India\'s trusted SEO agency. Get affordable SEO services for startups, clinics, real estate & e-commerce across Pune & India.',
  keywords: 'SEO Services India, Best SEO Company India, SEO Expert India, Affordable SEO Services India, SEO Agency India, SEO Services for Small Business India, E-commerce SEO Services India, Local SEO Services India, On-Page SEO Services India, Off-Page SEO Services India, SEO Services in Pune, Best SEO Company in Pune, SEO Expert Pune, Affordable SEO Services Pune, Local SEO Services Pune, On-Page SEO Services Pune, Off-Page SEO Services Pune, SEO Consultant Pune, SEO Agency Pune, SEO Services for Small Business Pune, Affordable SEO Services for Small Businesses India, E-commerce SEO Services in Pune, Local SEO Services for Clinics in Pune, On-Page and Off-Page SEO Services India, SEO Services for Real Estate Companies in Pune',
  authors: [{ name: 'Ashutosh Pandey - Founder of Leadzoro' }],
  robots: 'index, follow',
  icons: {
    icon: '/LeadZoroLogo.ico',
  },
  openGraph: {
    title: 'SEO Services in India & Pune | Best SEO Company - Leadzoro',
    description: 'From startups to real estate – Leadzoro offers local & national SEO services that get results. On-page, off-page & local SEO strategies in Pune & India.',
    url: 'https://www.leadzoro.com/seo-services',
    type: 'website',
    images: [
      {
        url: 'https://www.leadzoro.com/assets/seo-services-og.png',
        width: 1200,
        height: 630,
        alt: 'SEO Services by Leadzoro - India\'s Top SEO Company for Pune Businesses',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Services India & Pune | Affordable SEO for Business - Leadzoro',
    description: 'Leadzoro offers powerful SEO solutions for businesses in Pune & India. E-commerce SEO, local SEO & content optimization by experts.',
    images: ['https://www.leadzoro.com/assets/seo-services-og.png'],
  },
  alternates: {
    canonical: 'https://www.leadzoro.com/seo-services',
  },
};

export default function SEOServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children;
}
