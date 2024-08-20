"use client";
import React, { ReactNode, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";


const MotionWrapper = ({
  children,
  first = false,
}: {
  children: ReactNode;
  first?: boolean;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.15 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.3, 1]);

  return (
    <motion.div
      style={{
        scale: !first ? scaleProgress : 1,
        opacity: !first ? opacityProgress : 1,
      }}
      ref={ref}
    >
        {children}
    </motion.div>
  );
};

export default MotionWrapper;