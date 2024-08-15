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

  className={`h-screen flex flex-col lg:flex-row items-start justify-center lg:items-center lg:justify-between gap-6 lg:gap-0 ${first && "lg:-mt-[105px]"} py-12`}>
      <div className="bg-[#1A1A1A] rounded-[12px] w-full h-[343px] lg:w-[450px] lg:h-[450px]  xl:w-[520px] xl:h-[520px] relative">
        <Image
          className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-[300px]  h-[180px] sm:w-[500px] sm:h-[300px] md:w-[400px] md:h-[200px]  xl:w-[500px] xl:h-[260px] rounded-[12px]"
          src={Img}
          alt="live chat"
          width={500}
          height={260}
        />
      </div>
      <div className="flex flex-col items-start justify-start w-full lg:max-w-[400px] xl:max-w-[580px] gap-5">
        <h5 className="text-[20px] lg:text-2xl xl:text-3xl leading-[140%]">
        {title}
        </h5>
        <p className="text-[16px] lg:text-[17px] xl:text-lg text-off-white leading-[150%] font-light">
        {description}

        </p>
        <div className="w-full flex flex-col">
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
            LIVE DEMO <BsArrowUpRight />
            </a>
          }
          {
            frontendGithubLink &&
            <a target="_blank" href={frontendGithubLink} className="flex text-[14px] lg:text-[16px]  font-semibold items-center gap-2 text-primary relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[2px] after:bg-primary ">
            GITHUB (FRONTEND) <FaGithub />
          </a>
          }
          {
            backendGithubLink &&
            <a target="_blank" href={backendGithubLink} className="flex text-[14px] lg:text-[16px]  font-semibold items-center gap-2 text-primary relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[2px] after:bg-primary ">
            GITHUB (BACKEND) <FaGithub />
          </a>
          }
          {
            githubLink &&
            <a target="_blank" href={githubLink} className="flex text-[14px] lg:text-[16px]  font-semibold items-center gap-2 text-primary relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[2px] after:bg-primary ">
            SEE ON GITHUB <FaGithub />
          </a>
          }

        </div>
        
      </div>

    </section>
  );
};

export default ProjectsMain;
