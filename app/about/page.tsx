import ExperienceContainer from "@/components/about/experienceContainer";
import AboutMain from "@/components/about/index";
import Skill from "@/components/about/skill";
import Information from "@/components/about/info";
import { EDUCATION, EXPERIENCE_ITEMS, EXPERINCE } from "@/data/data";
import React from "react";


const About = () => {
  return (
    <>
      <AboutMain title="about me" rightSection={<Information />} gap="gap-5" first/>
      <AboutMain title="my education"  rightSection={<ExperienceContainer data={EDUCATION}/>}  gap="gap-8 lg:gap-20"/>
      <AboutMain title="my experience" rightSection={<ExperienceContainer data={EXPERINCE} />} gap="gap-8 lg:gap-20" />
      {
        EXPERIENCE_ITEMS.map((item, index)=>(
          <AboutMain key={index} last={index === EXPERIENCE_ITEMS.length - 1} title={item.title} rightSection={<Skill data={item.items} description={item.description}/>} gap="gap-8 lg:gap-20" />
        ))
      }
    </>
  );
};

export default About;
