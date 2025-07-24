import type { Metadata, Viewport } from 'next';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'Blog - Coming Soon | Leadzoro - Digital Marketing Insights',
  description: 'Stay tuned for expert digital marketing insights, SEO tips, and growth strategies from Leadzoro. Our blog is launching soon with valuable content for businesses.',
  keywords: 'Digital marketing blog, SEO tips, Marketing insights, Business growth strategies, Leadzoro blog, Coming soon',
  authors: [{ name: 'Ashutosh Pandey - Founder of Leadzoro' }],
  robots: 'index, follow',
  icons: {
    icon: '/LeadZoroLogo.ico',
  },
  openGraph: {
    title: 'Blog Coming Soon | Leadzoro Digital Marketing Insights',
    description: 'Get ready for expert digital marketing insights and growth strategies. Leadzoro blog launching soon with valuable content for Indian businesses.',
    url: 'https://www.leadzoro.com/blog',
    type: 'website',
    images: [
      {
        url: 'https://www.leadzoro.com/assets/blog-coming-soon-og.png',
        width: 1200,
        height: 630,
        alt: 'Leadzoro Blog Coming Soon - Digital Marketing Insights',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog Coming Soon | Leadzoro Marketing Insights',
    description: 'Expert digital marketing tips and strategies coming soon. Stay tuned for valuable insights from Leadzoro.',
    images: ['https://www.leadzoro.com/assets/blog-coming-soon-og.png'],
  },
  alternates: {
    canonical: 'https://www.leadzoro.com/blog',
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children;
}
