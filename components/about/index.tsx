import { bebas_neue } from "@/lib/fonts";
import React, { ReactNode } from "react";
import MotionWrapper from "../common/motionWrapper";
import Divider from "../common/divider";

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

  return (
    <MotionWrapper
    first={first}
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


        </div>
        {
          !last &&
          <Divider/>

        }
      </section>
    </MotionWrapper>
  );
};

export default AboutMain;
