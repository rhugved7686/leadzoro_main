import type { Metadata, Viewport } from 'next';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'Social Media Management Services in India & Pune | Leadzoro',
  description: 'Leadzoro offers affordable social media marketing for startups, brands & real estate in Pune & across India. Instagram, Facebook, YouTube growth experts.',
  keywords: 'Social Media Management Services India, Best Social Media Marketing Agency in India, Social Media Marketing Services India, Social Media Content Creation Services India, Social Media Manager for Hire India, Affordable Social Media Marketing India, Instagram Marketing Services India, Facebook Page Management Services India, Social Media Strategy Consultants India, Freelance Social Media Manager India, Social Media Marketing Services in Pune, Best Social Media Marketing Company Pune, Social Media Management Company in Pune, Affordable Social Media Services Pune, Instagram Marketing Agency Pune, Social Media Freelancer in Pune, Facebook & Instagram Ads Manager Pune, Content Creation Services Pune, Social Media Page Manager Pune, YouTube Marketing Services in Pune, Social media marketing for small business India, Instagram growth services for Indian brands, Affordable social media marketing for startups Pune, Content calendar service for social media India, Social media content agency for real estate Pune, Facebook & Instagram marketing for coaches India, Lead generation through Instagram Pune',
  authors: [{ name: 'Ashutosh Pandey - Founder of Leadzoro' }],
  robots: 'index, follow',
  icons: {
    icon: '/LeadZoroLogo.ico',
  },
  openGraph: {
    title: 'Social Media Management Services in India & Pune | Leadzoro',
    description: 'From content to campaigns — Leadzoro delivers result-oriented social media marketing services for startups, coaches, real estate & ecommerce brands.',
    url: 'https://www.leadzoro.com/social-media-management-services',
    type: 'website',
    images: [
      {
        url: 'https://www.leadzoro.com/assets/social-media-og.png',
        width: 1200,
        height: 630,
        alt: 'Social Media Marketing Services by Leadzoro – India & Pune',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Social Media Marketing Services India & Pune | Leadzoro',
    description: 'Instagram, Facebook, YouTube & content marketing solutions for Indian startups, small businesses & service providers by Leadzoro.',
    images: ['https://www.leadzoro.com/assets/social-media-og.png'],
  },
  alternates: {
    canonical: 'https://www.leadzoro.com/social-media-management-services',
  },
};

export default function SocialMediaManagementServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children;
}
