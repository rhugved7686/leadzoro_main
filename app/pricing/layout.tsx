import type { Metadata, Viewport } from 'next';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'Pricing Plans | Leadzoro - Best Digital Marketing Agency in India',
  description: 'Check Leadzoro\'s pricing for SEO, Google Ads, Meta Ads, GMB, Branding & Business Consulting. Transparent monthly plans with a 7-day moneyback guarantee.',
  authors: [{ name: 'Ashutosh Pandey - Founder of Leadzoro' }],
  keywords: 'Digital marketing pricing India, SEO plans Pune, Google Ads cost, Meta Ads packages, Leadzoro pricing page, GMB optimization pricing, Branding package cost, Business consulting plans India, Affordable marketing agency India, 7-day refund digital services',
  robots: 'index, follow',
  icons: {
    icon: '/LeadZoroLogo.ico',
  },
  alternates: {
    canonical: 'https://www.leadzoro.com/pricing',
  },
  openGraph: {
    title: 'Leadzoro Pricing – Transparent Digital Marketing Plans in India',
    description: 'Explore monthly pricing for SEO, Ads, GMB, Branding & Consulting. Scalable plans for startups & brands with risk-free 7-day moneyback guarantee.',
    url: 'https://www.leadzoro.com/pricing',
    type: 'website',
    images: [
      {
        url: 'https://www.leadzoro.com/assets/pricing-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Leadzoro Pricing Page - Digital Marketing Packages in India',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Leadzoro Pricing – Digital Marketing Plans in India',
    description: 'Transparent pricing for SEO, Google Ads, Meta Ads, GMB & more. Affordable plans with 7-day moneyback guarantee.',
    images: ['https://www.leadzoro.com/assets/pricing-og.jpg'],
  },
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children;
}
