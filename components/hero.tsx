import { bebas_neue } from "@/lib/fonts";
import Image from "next/image";
import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { FaGithub, FaLinkedin, FaLinkedinIn } from "react-icons/fa";
import { FaArrowUpRightDots } from "react-icons/fa6";

const Hero = () => {
  const text = "FATIH BAHADIR";
  
  return (
    <section className="w-full h-screen flex lg:flex-row flex-col items-center lg:justify-between lg:-mt-[110px]  gap-6 lg:gap-0">
      <div className="flex flex-col text-start justify-center">
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
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </div>
        </h1>
        <span className="mt-3 lg:mt-5 xl:w-[40rem] text-base lg:text-lg leading-[150%] text-[#C7C7C7]">
          An Istanbul-based software engineering student and front-end developer
          passionate about solving problems.
        </span>

        <div className="flex items-center justify-start mt-3 lg:mt-8 gap-5">
          <button className="bg-primary h-[40px] lg:h-[54px] px-6 pr-16 rounded-[100px] group uppercase text-main-bg relative font-bold">
            Contact Me
            <div className="w-3 h-3 rounded-full absolute top-[50%] -translate-y-1/2 group-hover:w-[40px] group-hover:h-[40px] transition-all bg-main-bg right-3 items-center justify-center flex">
              <BsArrowUpRight className="hidden group-hover:block transition-all opacity-0 group-hover:opacity-100 text-white w-[20px] h-[20px]" />
            </div>
          </button>
          <span className="w-[40px] h-[40px] lg:w-[54px] lg:h-[54px] rounded-full flex items-center justify-center bg-[#222222] cursor-pointer hover:scale-105 transition-all">
            <FaLinkedinIn className="w-[24px] h-[24px] text-primary" />
          </span>
          <span className="w-[40px] h-[40px] lg:w-[54px] lg:h-[54px] rounded-full flex items-center justify-center bg-[#222222] cursor-pointer hover:scale-105 transition-all">
            <FaGithub className="w-[24px] h-[24px] text-primary" />
          </span>
        </div>
      </div>

      <div className="w-full h-[280px] sm:h-[500px] lg:w-[550px] lg:h-[530px] 2xl:w-[600px] 2xl:h-[700px]">
        <Image
          src="/home.JPG"
          width={500}
          height={600}
          alt="profile image"
          className="rounded-2xl brightness-125 hover:grayscale transition duration-300 ease-in-out hover:rotate-6 rotate-0 object-cover w-full h-full"
        />
      </div>
    </section>
  );
};

export default Hero;
