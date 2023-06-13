import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { RadialTextGradient } from "react-text-gradients-and-animations";

import styles from "../../../styles/home.module.css";

type Props = {
  gradientLineStart: string;
  gradientLineEnd: string;
  gradientCircle: string;
  gradientTextOne: string;
  gradientTextTwo: string;
  stepNumber: string;
  stepName: string;
};

export const Glider = ({
  gradientLineStart,
  gradientLineEnd,
  gradientCircle,
  gradientTextOne,
  gradientTextTwo,
  stepNumber,
  stepName,
}: Props) => {
  const lineRef = useRef(null);
  const isLineInView = useInView(lineRef, { once: true });

  const lineVariants = {
    initial: { pathLength: 0 },
    inView: { pathLength: 1 },
  };

  return (
    <div className={styles.glider}>
      <svg
        width="4"
        height="174"
        viewBox="0 0 4 174"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.line}
        ref={lineRef}
      >
        <motion.path
          d="M2 0L2.00001 174"
          stroke="url(#paint0_linear_2463_4856)"
          strokeWidth="5"
          variants={lineVariants}
          initial="initial"
          animate={isLineInView ? "inView" : "initial"}
          transition={{
            type: "spring",
            duration: 2,
          }}
        />
        <defs>
          <linearGradient
            id="paint0_linear_2463_4856"
            x1="2.66654"
            y1="6.76667"
            x2="2.66654"
            y2="174"
            gradientUnits="userSpaceOnUse"
          >
            <stop
              offset="0.0416667"
              stopColor={gradientLineStart}
              stopOpacity="0"
            />
            <stop
              offset="0.270833"
              stopColor={gradientLineStart}
              stopOpacity="0.244792"
            />
            <stop offset="1" stopColor={gradientLineEnd} />
          </linearGradient>
        </defs>
      </svg>
      <motion.div
        className={styles.number}
        style={{ background: `${gradientCircle}` }}
        initial={{
          opacity: 0,
          scale: 0.5,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          delay: 0.75,
        }}
        viewport={{
          once: true,
        }}
      >
        <p>{stepNumber}</p>
      </motion.div>
      <motion.div
        initial={{
          opacity: 0,
          y: 40,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          type: "spring",
          stiffness: 140,
          damping: 50,
          mass: 1,
          delay: 1,
        }}
        viewport={{ once: true, margin: '41px 0px 0px 0px' }}
        className={styles.stepname}
      >
        <RadialTextGradient
          shape={"circle"}
          position={"center"}
          colors={[gradientTextOne, gradientTextTwo]}
          animate={true}
          animateDirection={"horizontal"}
          animateDuration={6}
          className={styles.text}
        >
          {stepName}
        </RadialTextGradient>
      </motion.div>
    </div>
  );
};