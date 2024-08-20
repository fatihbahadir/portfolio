import { BsArrowUpRight } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const Information = ({
  title,
  description,
  liveLink,
  frontendGithubLink,
  backendGithubLink,
  githubLink,
  year,
  role
}: {
  title: string;
  description: string;
  liveLink?: string;
  githubLink?: string;
  frontendGithubLink?: string;
  backendGithubLink?: string;
  year: string;
  role: string;
}) => {
  return (
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
        {liveLink && (
          <a
            target="_blank"
            href={liveLink}
            className="flex text-[14px] lg:text-[16px] font-semibold items-center gap-2 text-primary relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[2px] after:bg-primary"
          >
            LIVE <BsArrowUpRight />
          </a>
        )}
        {frontendGithubLink && (
          <a
            target="_blank"
            href={frontendGithubLink}
            className="flex text-[14px] lg:text-[16px]  font-semibold items-center gap-2 text-primary relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[2px] after:bg-primary "
          >
            FRONTEND <FaGithub />
          </a>
        )}
        {backendGithubLink && (
          <a
            target="_blank"
            href={backendGithubLink}
            className="flex text-[14px] lg:text-[16px]  font-semibold items-center gap-2 text-primary relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[2px] after:bg-primary "
          >
            BACKEND <FaGithub />
          </a>
        )}
        {githubLink && (
          <a
            target="_blank"
            href={githubLink}
            className="flex text-[14px] lg:text-[16px]  font-semibold items-center gap-2 text-primary relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[2px] after:bg-primary "
          >
            SEE CODE <FaGithub />
          </a>
        )}
      </div>
    </div>
  );
};

export default Information;
