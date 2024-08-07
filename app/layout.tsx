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
    icon: "/favicon/favicon.ico",
    shortcut: "/favicon/favicon.ico", // change this
    apple: "/favicon/favicon.ico", // change this
  },
  openGraph: {
    title: "Fatih Bahadır - Portfolio",
    description: "Personal Website of Fatih Bahadır",
    url: "", // change this
    siteName: "Fatih Bahadır - Portfolio",
    images: [
      {
        url: "", // change this
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
      <body className={`${manrope.className} bg-main-bg mx-auto`}>
        <div className="absolute dot inset-0 h-full w-full bg-transparent z-[-1] bg-[radial-gradient(circle,#272727_1px,transparent_1px,transparent_16px)] [background-size:32px_32px]"></div>  
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
        <main className="flex flex-col mx-auto max-w-[61rem] xl:max-w-[77rem] 2xl:max-w-[93rem] justify-center px-4 pt-5 text-white">
          {children}
        </main>
      </body>
    </html>
  );
}
