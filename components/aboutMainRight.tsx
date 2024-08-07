"use client";
import React from 'react'
import Buttons from './buttons';
import { FaExpand } from 'react-icons/fa';

const AboutMainRight = () => {
  return (
    <>
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
   </>  )
}

export default AboutMainRight