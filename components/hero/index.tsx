'use client';

import { bebas_neue } from "@/lib/fonts";
import Image from "next/image";
import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { FaGithub, FaLinkedin, FaLinkedinIn } from "react-icons/fa";
import { FaArrowUpRightDots } from "react-icons/fa6";
import Buttons from "@/components/common/buttons";
import { useRouter } from 'next/navigation'
import NProgress from "nprogress";


const Hero = () => {
  const text = "FATIH BAHADIR";
  const router = useRouter()

  return (
    <section className="screen-container flex-mobile justify-center items-center pt-[15px] sm:pt-[0] lg:justify-between gap-6 lg:gap-0">
      <div className="w-full flex-column text-start justify-center">
        <h1
          className={`${bebas_neue.className} lg:text-[90px] xl:text-[101px] text-6xl leading-[90%] `}
        >
          <span>HI, I AM</span>
          <div className="overflow-hidden">
            {text.match(/./gu)!.map((char, index) => (
              <span
                className={`animate-text-reveal inline-block [animation-fill-mode:backwards] ${
                  index > 5 && "text-primary"
                }`}
                key={`${char}-${index}`}
                style={{ animationDelay: `${index * 0.1 }s` }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </div>
        </h1>
        <span className="mt-3 lg:mt-5 xl:w-[40rem] text-base lg:text-lg leading-[150%] text-[#C7C7C7] font-[300]">
          An Istanbul-based software engineering student and front-end developer
          passionate about solving problems.
        </span>

        <Buttons text="Contact Me" onClick={()=>{
          NProgress.start();
          router.push('/contact');
          }}
          Icon={BsArrowUpRight}
          />
      </div>

      <div className="w-full h-[280px] sm:h-[400px] lg:w-[550px] lg:h-[530px] 2xl:w-[550px] 2xl:h-[570px]">
        <Image
          src="/home.JPG"
          width={400}
          height={500}
          alt="profile image"
          className="rounded-2xl brightness-125 hover:grayscale transition duration-300 ease-in-out hover:rotate-6 rotate-0 object-cover w-full h-full"
        />
      </div>
    </section>
  );
};

export default Hero;
