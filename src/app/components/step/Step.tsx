import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Glider } from "./Glider/Glider";
import Title from "./Title/Title";

import styles from "../../styles/home.module.css";
import Description from "./Description/Description";
import TaskCard from "./TaskCard/TaskCard";

// Icons
import Puzzle from "@/assets/icons/Puzzle";
import ColorSwatch from "@/assets/icons/ColorSwatch";
import SpeakerPhone from "@/assets/icons/SpeakerPhone";
import CollectionOutline from "@/assets/icons/CollectionOutline";
import Collection from "@/assets/icons/Collection";
import CursorClick from "@/assets/icons/CursorClick";
import ShoppingCart from "@/assets/icons/ShoppingCart";
import Globe from "@/assets/icons/Globe";
import AtSymbol from "@/assets/icons/AtSymbol";

type Props = {
  id: string;
  gradientLineStart: string;
  gradientLineEnd: string;
  gradientCircle: string;
  gradientTextOne: string;
  gradientTextTwo: string;
  stepNumber: string;
  stepName: string;
  titleText: string;
  titleEmphasis: string;
  descriptionText: string;
};

export const Step = ({
  gradientLineStart,
  gradientLineEnd,
  gradientCircle,
  gradientTextOne,
  gradientTextTwo,
  stepNumber,
  stepName,
  titleText,
  titleEmphasis,
  descriptionText,
}: Props) => {
  const connectorVariants = {
    initial: { pathLength: 0.1, pathSpacing: 0.1, pathOffset: 0.025 },
    animate: { pathOffset: 0.45 },
  };
  const tasksRef = useRef(null);
  const tasksInView = useInView(tasksRef, { once: true })

  return (
    <div className={styles.step}>
      <Glider
        gradientLineStart={gradientLineStart}
        gradientLineEnd={gradientLineEnd}
        gradientCircle={gradientCircle}
        gradientTextOne={gradientTextOne}
        gradientTextTwo={gradientTextTwo}
        stepNumber={stepNumber}
        stepName={stepName}
      />
      <Title
        titleText={titleText}
        titleEmphasis={titleEmphasis}
        gradientLineStart={gradientLineStart}
        gradientLineEnd={gradientLineEnd}
        gradientTextOne={gradientTextOne}
        gradientTextTwo={gradientTextTwo}
      />
      <Description descriptionText={descriptionText} />
      <div className={styles.taskswrapper} ref={tasksRef}>
        <TaskCard
          icon={<Puzzle />}
          title="Concepto"
          text="Te ayudamos a transformar tus sueños en ideas."
        />
        <svg
          width="1em"
          height="2"
          viewBox="0 0 127 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M1 1H126"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            variants={connectorVariants}
            initial="initial"
            animate={ tasksInView ? 'animate' : 'initial' }
            whileInView={{
              opacity: 1,
            }}
            viewport={{ once: true }}
            transition={{
              type: 'spring',
              duration: 1,
              repeat: Infinity,
              repeatType: 'loop',
              repeatDelay: 0
            }}
          />
        </svg>
        <TaskCard
          icon={<ColorSwatch />}
          title="Visualización"
          text="Llevamos tus ideas a propuestas concretas."
        />
        <svg
          width="1em"
          height="2"
          viewBox="0 0 127 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M1 1H126"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            variants={connectorVariants}
            initial="initial"
            animate={ tasksInView ? 'animate' : 'initial' }
            transition={{
              type: 'spring',
              duration: 1,
              repeat: Infinity,
              repeatType: 'loop',
              repeatDelay: 1.5
            }}
          />
        </svg>
        <TaskCard
          icon={<SpeakerPhone />}
          title="Branding"
          text="El viaje tiene un destino; el máximo potencial."
        />
      </div>
    </div>
  );
};
