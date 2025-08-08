import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { Analytics } from '@vercel/analytics/next';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ixax Tavarez - Software Engineer",
  description: "Ixax Tavarez is a software engineer based in Miami.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-8PNKLTLXRR"></script>
      <Script
        id="gtm"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-8PNKLTLXRR');`
        }}
      ></Script>
      </head>
      
      <body className={inter.className}>{children}<Analytics/></body>
    </html>
  );
}
