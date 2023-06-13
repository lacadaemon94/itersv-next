import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { RadialTextGradient } from "react-text-gradients-and-animations";

import styles from "../../../styles/home.module.css";

type Props = {
  titleText: string;
  titleEmphasis: string;
  gradientLineStart: string;
  gradientLineEnd: string;
  gradientTextOne: string;
  gradientTextTwo: string;
};

const Title = ({
  titleText,
  titleEmphasis,
  gradientLineStart,
  gradientLineEnd,
  gradientTextOne,
  gradientTextTwo,
}: Props) => {
  const underStrike = useRef(null);
  const isUStrikeInView = useInView(underStrike, { once: true })

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
            width="1em"
            height="56"
            viewBox="0 0 298 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            ref={underStrike}
          >
            <motion.path
              d="M2 53.5003C2 53.5003 64.4136 18.931 108.5 11.5003C134.519 7.11477 155.5 4.00032 174 8.00032C187.083 10.8291 192.406 14.9652 186.5 22.5003C172 41.0003 94.9478 54.1054 104.5 35.0003C108.5 27 124 19.5993 132 16.5002C187.5 -5.00002 295.5 4.00005 295.5 4.00005"
              stroke="url(#paint0_linear_2465_4858)"
              strokeWidth="5"
              strokeLinecap="round"
              variants={underStrikeVariants}
              initial="initial"
              animate={isUStrikeInView ? 'inView' : 'initial'}
              transition={{
                type: 'spring',
                duration: 1.5,
                delay: 1.5
              }}
            />
            <defs>
              <linearGradient
                id="paint0_linear_2465_4858"
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
