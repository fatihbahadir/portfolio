import ImgCard from "./imgCard";
import Information from "./info";
import MotionWrapper from "../common/motionWrapper";
import Divider from "../common/divider";

const ProjectsMain = ({
  Img,
  title,
  description,
  liveLink,
  githubLink,
  frontendGithubLink,
  backendGithubLink,
  year,
  role,
  first,
  last
}: {
  Img: string;
  title: string;
  description: string;
  liveLink?: string;
  githubLink?: string;
  frontendGithubLink?: string;
  backendGithubLink?: string;
  year: string;
  role: string;
  first: boolean;
  last: boolean
}) => {
  return (
    <MotionWrapper first={first}>
      <section
        className={`screen-container relative flex items-center justify-center ${
          !first ? "mt-[0]" : "pt-[65px] lg:pt-[0px]"
        } `}
      >
        <div className="h-full w-full flex-mobile items-center justify-center lg:items-center lg:justify-between gap-6 lg:gap-0">
          <ImgCard Img={Img} />
          <Information
            title={title}
            description={description}
            liveLink={liveLink}
            githubLink={githubLink}
            frontendGithubLink={frontendGithubLink}
            backendGithubLink={backendGithubLink}
            year={year}
            role={role}
          />
        </div>
        {
          !last &&  <Divider/>

        }
      </section>
    </MotionWrapper>
  );
};

export default ProjectsMain;
