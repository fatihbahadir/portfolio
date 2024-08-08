"use client";

import { bebas_neue } from "@/lib/fonts";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { NAV_ITEMS } from "@/data/data";
import { IoMdClose } from "react-icons/io";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    
    if (window.scrollY > 20) {
      setScrolling(true);
    }

  
    window.addEventListener("scroll", handleScroll);

   
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    isOpen ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto";
  }, [isOpen]);

  useEffect(() => {

    setIsOpen(false);
    window.scrollTo(0, 0);
  }, [pathname]);

  const isActiveLink = (href: string) => {
    return pathname === href;
  };

  return (
    <nav
      className={`${bebas_neue.className} sticky top-0 z-10 text-off-white`}
    >
      <div className={`${scrolling && 'absolute inset-0 bg-main-bg bg-opacity-50 backdrop-blur-lg z-[-1]' }`}></div>
      <div className="max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem] mx-auto px-4">
        <div className="flex items-center justify-between py-6">
          <Link href={"/"}>
            <h2 className="text-3xl xl:text-4xl leading-[150%] hover:text-white transition-all">
              Fatih Bahadır
            </h2>
          </Link>

          <div className="flex items-center lg:hidden">
            <button
              aria-label={isOpen ? "Close Menu" : "Open Menu"}
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center text-off-white hover:text-white transition-all"
            >
              {isOpen ? (
                <IoMdClose className="h-6 w-6" />
              ) : (
                <HiOutlineMenuAlt3 className="h-6 w-6" />
              )}
            </button>
          </div>

          <div
            className={`hidden items-center justify-center space-x-8 text-lg xl:text-xl lg:flex`}
          >
            {NAV_ITEMS.map((item, index) => (
              <Link
                key={index}
                className={`${
                  isActiveLink(item.href) && "text-white underline decoration-primary underline-offset-4"
                } hover:text-white hover:underline underline-offset-4 transition-all`}
                href={item.href}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        <div
   className={`text-off-white z-20 bg-main-bg bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-80 space-y-3 text-lg lg:hidden fixed top-0 right-0 h-screen w-full transition-transform duration-300 transform ${
     isOpen ? "translate-x-0" : "translate-x-full"
   }`}
>
          <div className="flex justify-end p-4">
            <button
              aria-label="Close Menu"
              onClick={() => setIsOpen(false)}
              className="text-off-white hover:text-white transition-all"
            >
              <IoMdClose className="h-6 w-6" />
            </button>
          </div>

          <div className="flex flex-col items-center justify-center space-y-8">
            {NAV_ITEMS.map((item, index) => (
              <Link
                key={index}
                className={`${
                  isActiveLink(item.href) && "text-white underline decoration-primary underline-offset-4"
                } hover:text-white hover:underline underline-offset-4 transition-all text-2xl`}
                href={item.href}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {scrolling && (
        <div className="bg-gradient-to-r from-[rgba(211,233,122,0.1)] via-primary to-[rgba(211,233,122,0.1)] h-[1px]" />
      )}
    </nav>
  );
};

export default Navbar;