"use client";
import React from "react";
import { motion } from "framer-motion";

import styles from '../../../styles/herosection.module.css'
import { RadialTextGradient } from "react-text-gradients-and-animations";

type Props = {};

const HeroText = (props: Props) => {

  return (
    <div
      className={styles.herotext}
    >
      <motion.div
        initial={{ opacity: 0, y: 64, scale: 0.75 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
      >
        <RadialTextGradient
        shape={'circle'}
        position={'center'}
        colors={['#4FACFE', '#00F2FE']}
        animate={true}
        animateDirection={'horizontal'}
        animateDuration={6}
        className={styles.htext}
      >
        Sueña.
      </RadialTextGradient>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 64, scale: 0.75 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{
          delay: 0.3
        }}
      >
        <RadialTextGradient
        shape={'circle'}
        position={'center'}
        colors={['#F83600', '#F9D423']}
        animate={true}
        animateDirection={'diagonal'}
        animateDuration={6}
        className={styles.htext}
      >
        Imagina.
      </RadialTextGradient>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 64, scale: 0.75 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{
          delay: 0.6
        }}
      >
        <RadialTextGradient
        shape={'circle'}
        position={'center'}
        colors={['#6A11CB', '#2575FC']}
        animate={true}
        animateDirection={'diagonal'}
        animateDuration={6}
        className={styles.htext}
      >
        Desarrolla.
      </RadialTextGradient>
      </motion.div>
    </div>
  );
};

export default HeroText;
