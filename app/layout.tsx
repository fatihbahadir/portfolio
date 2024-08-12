import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import { manrope } from "@/lib/fonts";
import NextTopLoader from "nextjs-toploader";

export const metadata: Metadata = {
  title: {
    default: "Fatih Bahadır - Portfolio",
    template: "%s | Fatih Bahadır",
  },
  description: "Personal Website of Fatih Bahadır",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png", 
    apple: "apple-touch-icon.png", 
  },
  openGraph: {
    title: "Fatih Bahadır - Portfolio",
    description: "Personal Website of Fatih Bahadır",
    url: "https://www.f-bahadir.com", 
    siteName: "Fatih Bahadır - Portfolio",
    images: [
      {
        url: "https://www.f-bahadir.com/_next/image?url=%2Fhome.JPG&w=640&q=75", 
        width: 1200,
        height: 630,
      },
    ],
    locale: "en-US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${manrope.className} bg-main-bg mx-auto relative`}>
        <div className="absolute dot inset-0 min-h-screen w-full z-[-1] bg-[radial-gradient(circle,#272727_1px,transparent_1px,transparent_16px)] [background-size:32px_32px]"></div>  
        <Navbar />
        <NextTopLoader
          color="#D3E97A"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          easing="ease"
          speed={200}
          shadow="0 0 10px #D3E97A,0 0 5px #D3E97A"
        />
        <main className="flex flex-col mx-auto max-w-[61rem] xl:max-w-[77rem] 2xl:max-w-[82rem] justify-center px-4 pt-5 text-white">
          {children}
        </main>
        <div id="modal"/>
      </body>
    </html>
  );
}
