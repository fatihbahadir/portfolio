"use client";
import React, { useState } from "react";
import Buttons from "@/components/common/buttons";
import { FaDownload, FaExpand } from "react-icons/fa";
import Modal from "@/components/common/modal";
import { handleCvDownload } from "@/lib/utils";

const Information = () => {
  const [isActive, setIsActive] = useState(false);

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
        <div className="flex-col-center text-off-white sm:hidden">
          <p>
            Ooops! It seems your browser does not support pdf viewer. Please
            download it with the button below.
          </p>
          <button
            onClick={handleCvDownload}
            className="btn group"
          >
            Download
            <div className="w-3 h-3 rounded-full absolute top-[50%] -translate-y-1/2 group-hover:scale-[300%] transition-all bg-main-bg right-5 flex-center">
          <FaDownload className="hidden group-hover:block transition-all text-white group-hover:scale-50" />
          </div>
          </button>
        </div>
      </Modal>
    </>
  );
};

export default Information;
