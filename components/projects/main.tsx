"use client";
import Image from "next/image";
import { BsArrowUpRight } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const ProjectsMain = ({Img, title, description, liveLink, githubLink,frontendGithubLink, backendGithubLink, year, role, first} : {
  Img: string,
  title: string,
  description: string,
  liveLink?: string,
  githubLink?: string,
  frontendGithubLink?: string,
  backendGithubLink?: string,
  year: string,
  role: string,
  first: boolean
}) => {

  return (
  <section
  className={`screen-container flex-mobile items-start justify-center lg:items-center lg:justify-between gap-6 lg:gap-0 ${!first ? "mt-[0]" : "pt-[65px] lg:pt-[0px"} `}>
      <div className="bg-[#1A1A1A] rounded-[12px] w-full h-[343px] lg:w-[450px] lg:h-[450px]  xl:w-[520px] xl:h-[520px] hidden sm:block relative">
        <Image
          className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] sm:w-[430px] sm:h-[223px] md:w-[500px] md:h-[260px] lg:w-[430px] lg:h-[223px]  xl:w-[500px] xl:h-[260px] rounded-[12px]"
          src={Img}
          alt="live chat"
          width={500}
          height={260}
        />
      </div>
      <Image
          className="sm:hidden w-full h-[178px] rounded-[12px]"
          src={Img}
          alt="live chat"
          width={500}
          height={260}
        />
      <div className="flex-colum items-start justify-start w-full lg:max-w-[400px] xl:max-w-[580px] gap-5">
        <h5 className="text-[20px] lg:text-2xl xl:text-3xl leading-[140%]">
        {title}
        </h5>
        <p className="text-[16px] lg:text-[17px] xl:text-lg text-off-white leading-[150%] font-light">
        {description}

        </p>
        <div className="w-full flex-column">
          <h6 className="border-b border-b-[#484848] py-3 font-semibold leading-[150%] text-[16px]">
            PROJECT INFO
          </h6>
          <div className="border-b border-b-[#484848] py-3 flex items-center justify-between">
            <p className="leading-[160%]">Year</p>
            <p className="text-off-white leading-[160%]">{year}</p>
          </div>
          <div className="border-b border-b-[#484848] py-3 flex items-center justify-between">
            <p className="leading-[160%]">Role</p>
            <p className="text-off-white leading-[160%]">{role}</p>
          </div>
        </div>

        <div className="flex items-center justify-start gap-5 mt-3">
          {
            liveLink &&
            <a target="_blank" href={liveLink} className="flex text-[14px] lg:text-[16px] font-semibold items-center gap-2 text-primary relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[2px] after:bg-primary">
            LIVE <BsArrowUpRight />
            </a>
          }
          {
            frontendGithubLink &&
            <a target="_blank" href={frontendGithubLink} className="flex text-[14px] lg:text-[16px]  font-semibold items-center gap-2 text-primary relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[2px] after:bg-primary ">
            FRONTEND <FaGithub />
          </a>
          }
          {
            backendGithubLink &&
            <a target="_blank" href={backendGithubLink} className="flex text-[14px] lg:text-[16px]  font-semibold items-center gap-2 text-primary relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[2px] after:bg-primary ">
            BACKEND <FaGithub />
          </a>
          }
          {
            githubLink &&
            <a target="_blank" href={githubLink} className="flex text-[14px] lg:text-[16px]  font-semibold items-center gap-2 text-primary relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[2px] after:bg-primary ">
            SEE CODE <FaGithub />
          </a>
          }

        </div>
        
      </div>

    </section>
  );
};

export default ProjectsMain;
