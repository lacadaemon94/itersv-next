import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { RadialTextGradient } from "react-text-gradients-and-animations";

import styles from "../../../styles/home.module.css";

type Props = {
  id: string;
  titleText: string;
  titleEmphasis: string;
  linePath: string;
  lineDimensions: string;
  gradientLineStart: string;
  gradientLineEnd: string;
  gradientTextOne: string;
  gradientTextTwo: string;
};

const Title = ({
  id,
  titleText,
  titleEmphasis,
  linePath,
  lineDimensions,
  gradientLineStart,
  gradientLineEnd,
  gradientTextOne,
  gradientTextTwo,
}: Props) => {
  const underStrike = useRef(null);
  const isUStrikeInView = useInView(underStrike, { once: true });

  const underStrikeVariants = {
    initial: { pathLength: 0 },
    inView: { pathLength: 1 },
  };

  return (
    <motion.div
      className={styles.title}
      initial={{
        opacity: 0,
        x: -20,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        type: "spring",
        stiffness: 140,
        damping: 50,
        mass: 1,
        delay: 1.25,
      }}
      viewport={{ once: true }}
    >
      <p>
        {titleText}
        <span>
          <RadialTextGradient
            shape={"circle"}
            position={"center"}
            colors={[gradientTextOne, gradientTextTwo]}
            animate={true}
            animateDirection={"horizontal"}
            animateDuration={6}
            className={styles.text}
          >
            {titleEmphasis}
          </RadialTextGradient>
          <svg
            width="100"
            height="100%"
            viewBox={lineDimensions}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            ref={underStrike}
          >
            <motion.path
              d={linePath}
              stroke={`url(#step_title_${id})`}
              strokeWidth="5"
              strokeLinecap="round"
              variants={underStrikeVariants}
              initial="initial"
              animate={isUStrikeInView ? "inView" : "initial"}
              transition={{
                type: "spring",
                duration: 1.5,
                delay: 1.5,
              }}
            />
            <defs>
              <linearGradient
                id={`step_title_${id}`}
                x1="2"
                y1="27.8157"
                x2="295.5"
                y2="27.8157"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor={gradientLineStart} />
                <stop offset="1" stopColor={gradientLineEnd} />
              </linearGradient>
            </defs>
          </svg>
        </span>
      </p>
    </motion.div>
  );
};

export default Title;



