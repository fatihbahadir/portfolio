"use client";
import AboutExperience from "@/components/aboutExpeience";
import AboutExRight from "@/components/aboutExRight";
import AboutMain from "@/components/aboutMain";
import AboutMainRight from "@/components/aboutMainRight";
import AboutSection from "@/components/aboutSection";
import Buttons from "@/components/buttons";
import { EDUCATION, EXPERINCE } from "@/data/data";
import React from "react";
import { FaExpand } from "react-icons/fa";

const About = () => {
  return (
    <>
      <AboutMain title="about me" rightSection={<AboutMainRight />} gap="gap-5" first/>
      <AboutMain title="my education"  rightSection={<AboutExRight data={EDUCATION}/>}  gap="gap-20"/>
      <AboutMain title="my experience" rightSection={<AboutExRight data={EXPERINCE} />} gap="gap-20" />
    </>
  );
};

export default About;
