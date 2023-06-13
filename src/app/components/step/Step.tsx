import React, { useRef, useContext } from "react";
import { SessionContext } from "@/app/utils/SessionProvider";
import Image, { StaticImageData } from "next/image";
import { motion, useInView } from "framer-motion";
import { Glider } from "./Glider/Glider";
import Title from "./Title/Title";

import styles from "../../styles/home.module.css";
import Description from "./Description/Description";
import TaskCard from "./TaskCard/TaskCard";

type Props = {
  id: string;
  gradientLineStart: string;
  gradientLineEnd: string;
  gradientCircle: string;
  gradientTextOne: string;
  gradientTextTwo: string;
  stepNumber: string;
  stepName: string;
  linePath: string;
  lineDimensions: string;
  titleText: string;
  titleEmphasis: string;
  descriptionText: string;
  imageLight: StaticImageData;
  imageDark: StaticImageData;
  imageAlt: string;
  cardOneIcon: JSX.Element;
  cardOneTitle: string;
  cardOneText: string;
  cardTwoIcon: JSX.Element;
  cardTwoTitle: string;
  cardTwoText: string;
  cardThreeIcon: JSX.Element;
  cardThreeTitle: string;
  cardThreeText: string;
};

export const Step = ({
  id,
  gradientLineStart,
  gradientLineEnd,
  gradientCircle,
  gradientTextOne,
  gradientTextTwo,
  stepNumber,
  stepName,
  linePath,
  lineDimensions,
  titleText,
  titleEmphasis,
  descriptionText,
  imageLight,
  imageDark,
  imageAlt,
  cardOneIcon,
  cardOneTitle,
  cardOneText,
  cardTwoIcon,
  cardTwoTitle,
  cardTwoText,
  cardThreeIcon,
  cardThreeTitle,
  cardThreeText,
}: Props) => {
  const isLightTheme = useContext(SessionContext);

  const connectorVariants = {
    initial: { pathLength: 0.1, pathSpacing: 0.1, pathOffset: 0.025 },
    animate: { pathOffset: 0.45 },
  };
  const tasksRef = useRef(null);
  const tasksInView = useInView(tasksRef, { once: true });

  return (
    <div className={styles.step} id={id}>
      <Glider
        id={id}
        gradientLineStart={gradientLineStart}
        gradientLineEnd={gradientLineEnd}
        gradientCircle={gradientCircle}
        gradientTextOne={gradientTextOne}
        gradientTextTwo={gradientTextTwo}
        stepNumber={stepNumber}
        stepName={stepName}
      />
      <motion.div
        className={styles.imagecontainer}
        initial={{
          opacity: 0,
          scale: 0.5,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        viewport={{ once: true }}
        transition={{
          type: "spring",
          duration: 1.5,
          delay: 1,
        }}
      >
        <Image
          src={isLightTheme.isLightTheme ? imageLight : imageDark}
          alt={imageAlt}
          placeholder="blur"
          className={styles.stepimage}
          fill={true}
        />
      </motion.div>
      <Title
        id={id}
        titleText={titleText}
        titleEmphasis={titleEmphasis}
        linePath={linePath}
        lineDimensions={lineDimensions}
        gradientLineStart={gradientLineStart}
        gradientLineEnd={gradientLineEnd}
        gradientTextOne={gradientTextOne}
        gradientTextTwo={gradientTextTwo}
      />
      <Description descriptionText={descriptionText} />
      <div className={styles.taskswrapper} ref={tasksRef}>
        <motion.div
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
            duration: 1.5,
            delay: 1.5,
          }}
          viewport={{ once: true }}
        >
          <TaskCard
            icon={cardOneIcon}
            title={cardOneTitle}
            text={cardOneText}
          />
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          transition={{
            duration: 1.5,
            delay: 2,
          }}
          viewport={{ once: true }}
        >
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 127 2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={styles.taskconnector}
          >
            <motion.path
              d="M1 1H126"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              variants={connectorVariants}
              initial="initial"
              animate={tasksInView ? "animate" : "initial"}
              whileInView={{
                opacity: 1,
              }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                duration: 1,
                repeat: Infinity,
                repeatType: "loop",
                repeatDelay: 0,
              }}
            />
          </svg>
        </motion.div>
        <motion.div
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
            duration: 1.5,
            delay: 1.75,
          }}
          viewport={{ once: true }}
        >
          <TaskCard
            icon={cardTwoIcon}
            title={cardTwoTitle}
            text={cardTwoText}
          />
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          transition={{
            duration: 1.5,
            delay: 2.5,
          }}
          viewport={{ once: true }}
        >
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 127 2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={styles.taskconnector}
          >
            <motion.path
              d="M1 1H126"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              variants={connectorVariants}
              initial="initial"
              animate={tasksInView ? "animate" : "initial"}
              transition={{
                type: "spring",
                duration: 1,
                repeat: Infinity,
                repeatType: "loop",
                repeatDelay: 1.75,
              }}
            />
          </svg>
        </motion.div>
        <motion.div
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
            duration: 1.5,
            delay: 2,
          }}
          viewport={{ once: true }}
        >
          <TaskCard
            icon={cardThreeIcon}
            title={cardThreeTitle}
            text={cardThreeText}
          />
        </motion.div>
      </div>
    </div>
  );
};
