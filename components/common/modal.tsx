import React, { ReactNode, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { FaXmark, FaDownload } from "react-icons/fa6";

const Modal = ({
  active,
  children,
  closeModal,
}: {
  active: boolean;
  children: ReactNode 
  closeModal: () => void;
}) => {
  const ref = useRef<Element | null>(null);
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    ref.current = document.getElementById("modal");
    setMounted(true);
  }, []); 

  useEffect(() => {
    if (active) {
      setVisible(true);
    } else {
      
      const timeout = setTimeout(() => setVisible(false), 300); 
      return () => clearTimeout(timeout);
    }
  }, [active]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  if (!mounted || !ref.current) return null;

  return createPortal(
    <div
      onClick={handleBackdropClick}
      className={`fixed left-0 top-0 flex-center h-screen w-screen transition-all duration-300 bg-main-bg bg-opacity-60 z-[12] ${
        active ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <div
        className={`relative w-[90%] sm:w-[78%] sm:h-[70%] lg:w-[520px] lg:h-[75%] flex-col-center rounded-[10px] border border-[#484848] bg-main-bg p-[10px] transition-transform duration-300 ${
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

        {children}
        
      </div>
    </div>,
    ref.current
  );
};

export default Modal;