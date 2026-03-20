import { Inter, IBM_Plex_Sans, IBM_Plex_Serif, Mate, Roboto_Serif, Roboto } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });
const ibmPlexSans = IBM_Plex_Sans({ subsets: ["latin"], weight: ["100","200","300","400","500","600","700"], style: ["normal","italic"], variable: "--font-ibm-plex-sans" });
const ibmPlexSerif = IBM_Plex_Serif({ subsets: ["latin"], weight: ["100","200","300","400","500","600","700"], style: ["normal","italic"], variable: "--font-ibm-plex-serif" });
const mate = Mate({ subsets: ["latin"], weight: ["400"], style: ["normal","italic"], variable: "--font-mate" });
const robotoSerif = Roboto_Serif({ subsets: ["latin"], weight: ["100","200","300","400","500","600","700","800","900"], style: ["normal","italic"], variable: "--font-roboto-serif" });
const roboto = Roboto({ subsets: ["latin"], weight: ["100","300","400","500","700","900"], style: ["normal","italic"], variable: "--font-roboto" });

const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "G-8PNKLTLXRR";

export const metadata = {
  metadataBase: new URL("https://ixaxtavarez.com"),
  title: "Ixax Tavarez - Software Engineer",
  description: "Ixax Tavarez is a software engineer based in Miami.",
  openGraph: {
    title: "Ixax Tavarez - Software Engineer",
    description: "Ixax Tavarez is a software engineer based in Miami.",
    url: "https://ixaxtavarez.com",
    siteName: "Ixax Tavarez",
    images: [{ url: "/avatar.png", width: 460, height: 460 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Ixax Tavarez - Software Engineer",
    description: "Ixax Tavarez is a software engineer based in Miami.",
    images: ["/avatar.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${ibmPlexSans.variable} ${ibmPlexSerif.variable} ${mate.variable} ${robotoSerif.variable} ${roboto.variable}`}>
        {children}
        <Analytics />
        <SpeedInsights />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="gtm" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
      </body>
    </html>
  );
}
