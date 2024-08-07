import { bebas_neue } from "@/lib/fonts";
import React, { ReactNode } from "react";
import Buttons from "./buttons";
import { FaDownload, FaExpand } from "react-icons/fa";
import Image from "next/image";

const AboutMain = ({ title, rightSection, gap, first } : { title:string, rightSection: ReactNode, gap:string , first?: boolean}) => {
  return (
    <section className={`h-screen max-w-screen flex items-center justify-center ${first && '-mt-[105px]'} relative`}>
        <div className="flex lg:flex-row flex-col items-start w-full justify-between lg:justify-between gap-5 lg:gap-0" >
        <h2
          className={`${bebas_neue.className} uppercase ${first ? ' lg:text-[90px] xl:text-[101px]'  : 'lg:text-[55px] xl:text-[76px]'} text-6xl leading-[90%] `}
        >
          {title}
        </h2>

      <div className={`flex flex-col ${gap} max-w-[700px]`}>
       {rightSection}
      </div>
      </div>
      <div className="absolute w-screen bottom-0 border-b border-[#484848]"></div> 
    </section>
  );
};

export default AboutMain;
