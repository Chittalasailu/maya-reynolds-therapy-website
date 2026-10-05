import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Mulish, Mrs_Saint_Delafield } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
});

const mulish = Mulish({
  variable: "--font-mulish",
  subsets: ["latin"],
  weight: ["300", "400", "600"],
});

const script = Mrs_Saint_Delafield({
  variable: "--font-script",
  subsets: ["latin"],
  weight: "400",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

const title =
  "Anxiety, Trauma & Burnout Therapist in Santa Monica, CA | Dr. Maya Reynolds, PsyD";
const description =
  "Dr. Maya Reynolds, PsyD is a licensed clinical psychologist offering anxiety, trauma (EMDR) and burnout therapy for adults in Santa Monica, CA, in person or by secure telehealth across California.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Dr. Maya Reynolds, PsyD",
    images: [{ url: "/images/office-1.jpg", width: 1500, height: 1125, alt: "Dr. Reynolds' sunlit therapy office in Santa Monica" }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/images/office-1.jpg"] },
};

export const viewport: Viewport = {
  themeColor: "#f7f2ea",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["Psychologist", "LocalBusiness"],
  name: "Dr. Maya Reynolds, PsyD",
  description,
  url: siteUrl,
  image: `${siteUrl}/images/office-1.jpg`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "123th Street 45 W",
    addressLocality: "Santa Monica",
    addressRegion: "CA",
    postalCode: "90401",
    addressCountry: "US",
  },
  areaServed: [
    { "@type": "City", name: "Santa Monica" },
    { "@type": "State", name: "California" },
  ],
  knowsAbout: ["Anxiety", "Panic", "Trauma", "Burnout", "Perfectionism", "EMDR", "Cognitive-behavioral therapy"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${mulish.variable} ${script.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-sage-deep focus:px-4 focus:py-2 focus:text-cream"
        >
          Skip to content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
