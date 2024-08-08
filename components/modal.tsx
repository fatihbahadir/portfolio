import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { FaXmark, FaDownload } from "react-icons/fa6";

const Modal = ({
  active,
  closeModal,
}: {
  active: boolean;
  closeModal: () => void;
}) => {
  const ref = useRef<Element | null>(null);
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    ref.current = document.getElementById("modal");
    setMounted(true);
  }, []); // Runs only on first render

  useEffect(() => {
    if (active) {
      setVisible(true);
    } else {
      // Wait for animation duration before hiding
      const timeout = setTimeout(() => setVisible(false), 300); // Adjust time to match animation duration
      return () => clearTimeout(timeout);
    }
  }, [active]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    // Close modal if the backdrop is clicked
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = './cvnew.pdf'; // Update the path to your PDF file
    link.download = 'cvnew.pdf'; // The name of the file to be downloaded
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (!mounted || !ref.current) return null;

  return createPortal(
    <div
      onClick={handleBackdropClick}
      className={`fixed left-0 top-0 flex h-screen w-screen items-center justify-center transition-all duration-300 bg-main-bg bg-opacity-50 ${
        active ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <div
        className={`relative w-[90%] sm:w-[78%] sm:h-[70%] lg:w-[520px] lg:h-[75%] flex flex-col items-center justify-center rounded-[10px] border border-[#484848] bg-main-bg p-[10px] transition-transform duration-300 ${
          active ? "scale-100" : "scale-75"
        }`}
      >
        <h2>Modal</h2>
        <button
          onClick={closeModal}
          className="close-btn bg-transparent absolute top-[12px] right-[12px] border-0 text-off-white cursor-pointer"
        >
          <FaXmark className="w-[15px] h-[15px]" />
        </button>

        <div className="w-full h-full hidden sm:block">
          <iframe
            style={{ overflow: "hidden" }}
            className="w-full h-full"
            src="./cvnew.pdf"
          />
        </div>
        <div className="flex flex-col items-center justify-center text-off-white sm:hidden">
          <p>Ooops! It seems your browser does not support pdf viewer. Please download it with the button below.</p>
          <button 
            onClick={handleDownload}
            className="flex items-center justify-center gap-3 bg-primary rounded-[30px] py-2 mt-3 px-3 text-black font-semibold cursor-pointer"
          >
            <FaDownload /> Download
          </button>
        </div>
      </div>
    </div>,
    ref.current
  );
};

export default Modal;