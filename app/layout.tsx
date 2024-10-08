import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/navbar";
import { manrope } from "@/lib/fonts";
import NextTopLoader from "nextjs-toploader";
import { METADATA } from "@/data/data";


export const metadata: Metadata = METADATA

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
        <main className="flex-column mx-auto max-w-[61rem] xl:max-w-[77rem] 2xl:max-w-[82rem] justify-center px-4 text-white">
          {children}
        </main>
        <div id="modal"/>
      </body>
    </html>
  );
}
