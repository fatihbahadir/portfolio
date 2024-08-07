"use client";

import { bebas_neue } from "@/lib/fonts";
import React from "react";
import Buttons from "./buttons";
import { FaDownload, FaExpand } from "react-icons/fa";
import Image from "next/image";

const AboutMain = () => {
  return (
    <section className="h-screen max-w-screen flex items-center justify-center -mt-[110px] ">
        <div className="flex lg:flex-row flex-col items-start w-full justify-between lg:justify-between gap-6 lg:gap-0" >
        <h2
          className={`${bebas_neue.className} lg:text-[90px] xl:text-[101px] text-6xl leading-[90%] `}
        >
          ABOUT ME
        </h2>

      <div className="flex flex-col gap-5 max-w-[700px]">
        <h5 className="text-3xl font-[500] leading-[140%]">
          I am a front-end developer based in Istanbul, Currently 4th-year
          Software Engineering student
        </h5>
        <p className="text-lg text-off-white leading-[150%] font-light">
          I&apos;m currently a fourth-year Software Enginering student at Maltepe
          University in Istanbul, where I&apos;m diving into the world of Fullstack
          Development. When I was a child, I used to lose track of time while
          playing computer games; now, I find myself losing track of time while
          coding. I&apos;m constantly driven by the pursuit of self-improvement and
          the quest to tackle the most exciting challenges in the field.{" "}
        </p>
        <div>
          <Buttons
            text="SEE RESUME"
            onClick={() => {
              console.log("hello world");
            }}
            Icon={FaExpand}
          />
        </div>
      </div>
        </div>
    </section>
  );
};

export default AboutMain;
