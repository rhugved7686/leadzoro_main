import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import PageTransition from '@/components/PageTransition'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#0ea5e9',
}

export const metadata: Metadata = {
  title: 'Leadzoro - Best Marketing Agency in Pune & India',
  description: 'Leadzoro is India\'s best digital marketing agency offering SEO, Ads & Branding services for startups & businesses to grow online and generate leads.',
  keywords: 'Best marketing agency in Pune, Best marketing agency in India, Digital marketing company in India, SEO Company Pune, Google Ads Company in Pune, Social Media Management Pune, Lead generation agency India, PPC services India, Affordable marketing for startups India, ROI-focused digital marketing India, Performance marketing agency India, GMB Optimization Pune, Website Development Company India',
  authors: [{ name: 'Ashutosh Pandey - Founder of Leadzoro' }],
  robots: 'index, follow',
  icons: {
    icon: '/LeadZoroLogo.ico',
  },
  openGraph: {
    title: 'Leadzoro - India\'s Top Digital Marketing Agency',
    description: 'From SEO to Google Ads, Leadzoro helps Indian startups grow with full-funnel digital marketing solutions. Try the best marketing agency in India now!',
    url: 'https://www.leadzoro.com/',
    type: 'website',
    images: [
      {
        url: 'https://www.leadzoro.com/assets/leadzoro-og.png',
        width: 1200,
        height: 630,
        alt: 'Leadzoro Digital Marketing Agency - India\'s Top SEO & Ads Company',
        type: 'image/png',
      },
    ],
  },
  alternates: {
    canonical: 'https://www.leadzoro.com/',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id=GTM-N5FPCC2L'+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-N5FPCC2L');
            `
          }}
        />
      </head>
      <body className={inter.className}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-N5FPCC2L"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}