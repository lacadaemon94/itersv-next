import React from "react";
import { motion } from "framer-motion";

import styles from "../../../styles/home.module.css";

type Props = {
  descriptionText: string;
};

const Description = ({ descriptionText }: Props) => {
  return (
    <motion.p
      className={styles.description}
      initial={{
        opacity: 0,
        y: 20,
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
        delay: 1.5,
      }}
      viewport={{ once: true, margin: "20px 0px 0px 0px" }}
    >
      {descriptionText}
    </motion.p>
  );
};

export default Description;
