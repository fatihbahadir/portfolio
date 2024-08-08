"use client";
import { bebas_neue } from "@/lib/fonts";
import React, { ReactNode, useRef } from "react";
import Buttons from "./buttons";
import { FaDownload, FaExpand } from "react-icons/fa";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const AboutMain = ({
  title,
  rightSection,
  gap,
  first,
}: {
  title: string;
  rightSection: ReactNode;
  gap: string;
  first?: boolean;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.1 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.3, 1]);

  return (
    <motion.div
    style={{
      scale: !first ? scaleProgress : 1,
      opacity: !first ? opacityProgress : 1,
    }}
    ref={ref}
    >
      <section
        className={`h-screen max-w-screen flex items-center justify-center ${
          first && "-mt-[105px]"
        } relative`}
      >
        <div className="flex lg:flex-row flex-col items-start w-full justify-between lg:justify-between gap-5 lg:gap-0">
          <h2
            className={`${bebas_neue.className} uppercase ${
              first
                ? " lg:text-[90px] xl:text-[101px]"
                : "lg:text-[55px] xl:text-[76px]"
            } text-6xl leading-[90%] `}
          >
            {title}
          </h2>

          <div className={`flex flex-col ${gap} max-w-[700px]`}>
            {rightSection}
          </div>
        </div>
        <div className="absolute w-screen bottom-0 h-[1px] bg-gradient-to-r from-[rgba(211,233,122,0.1)] via-primary to-[rgba(211,233,122,0.1)]"></div>
      </section>
    </motion.div>
  );
};

export default AboutMain;
