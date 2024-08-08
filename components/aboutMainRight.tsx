"use client";
import React, { useState } from "react";
import Buttons from "./buttons";
import { FaDownload, FaExpand } from "react-icons/fa";
import Modal from "./modal";

const AboutMainRight = () => {
  const [isActive, setIsActive] = useState(false);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = './cvnew.pdf'; // Update the path to your PDF file
    link.download = 'cvnew.pdf'; // The name of the file to be downloaded
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  
  const openModal = () => {
    setIsActive(true);
  };

  const closeModal = () => {
    setIsActive(false);
  };
  return (
    <>
      <h5 className="text-[20px] lg:text-2xl xl:text-3xl font-[500] leading-[140%]">
        I am a front-end developer based in Istanbul, Currently 4th-year
        Software Engineering student
      </h5>
      <p className="text-[16px] lg:text-[17px] xl:text-lg text-off-white leading-[150%] font-light">
        I&apos;m currently a fourth-year Software Enginering student at Maltepe
        University in Istanbul, where I&apos;m diving into the world of
        Fullstack Development. When I was a child, I used to lose track of time
        while playing computer games; now, I find myself losing track of time
        while coding. I&apos;m constantly driven by the pursuit of
        self-improvement and the quest to tackle the most exciting challenges in
        the field.{" "}
      </p>
      <div>
        <Buttons
          text="SEE RESUME"
          onClick={() => {
            setIsActive(true);
          }}
          Icon={FaExpand}
        />
      </div>
      <Modal active={isActive} closeModal={closeModal}>
        <div className="w-full h-full hidden sm:block">
          <iframe
            style={{ overflow: "hidden" }}
            className="w-full h-full"
            src="./cvnew.pdf"
          />
        </div>
        <div className="flex flex-col items-center justify-center text-off-white sm:hidden">
          <p>
            Ooops! It seems your browser does not support pdf viewer. Please
            download it with the button below.
          </p>
          <button
            onClick={handleDownload}
            className="flex items-center justify-center gap-3 bg-primary rounded-[30px] py-2 mt-3 px-3 text-black font-semibold cursor-pointer"
          >
            <FaDownload /> Download
          </button>
        </div>
      </Modal>
    </>
  );
};

export default AboutMainRight;
