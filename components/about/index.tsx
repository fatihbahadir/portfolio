"use client";
import { bebas_neue } from "@/lib/fonts";
import React, { ReactNode, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const AboutMain = ({
  title,
  rightSection,
  gap,
  first,
  last
}: {
  title: string;
  rightSection: ReactNode;
  gap: string;
  first?: boolean;
  last?: boolean;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.15 1"],
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
        className={`screen-container flex-center ${
          !first && "mt-[0]"
        } relative`}
      >
        <div className="flex-mobile items-start w-full justify-between lg:justify-between gap-5 lg:gap-0">
          <h2
            className={`${bebas_neue.className} uppercase ${
              first
                ? " text-[57px] lg:text-[90px] xl:text-[101px]"
                : "text-[43px] lg:text-[55px] xl:text-[76px]"
            }  leading-[90%] `}
          >
            {title}
          </h2>

          <div className={`flex-column ${gap} max-w-[600px] sm:max-w-full lg:max-w-[600px] xl:max-w-[700px] `}>
            {rightSection}
          </div>

          {last && <div className="absolute left-0 bottom-5 text-off-white text-[16px]">© {new Date().getFullYear()} Muhammet Fatih Bahadır</div>}
        </div>
        {
          !last &&
          <div className="absolute w-screen -bottom-[1px] h-[1px] bg-gradient-to-r from-[rgba(211,233,122,0.1)] via-primary to-[rgba(211,233,122,0.1)]"></div>

        }
      </section>
    </motion.div>
  );
};

export default AboutMain;
