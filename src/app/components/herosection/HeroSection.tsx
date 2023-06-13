"use client";
import React, { useContext } from "react";
import { SessionContext } from "@/app/utils/SessionProvider";
import Image from "next/image";
import { motion } from "framer-motion";
import HeroText from "./HeroText/HeroText";
import Button from "../button/Button";

import styles from "../../styles/herosection.module.css";

import HeroImageDark from '../../../assets/images/Discovery_Dark.png'
import HeroImageLight from '../../../assets/images/Discovery_Light.png'

type Props = {};

export const HeroSection = (props: Props) => {
  const isLightTheme = useContext(SessionContext);

  return (
    <div className={styles.herosection}>
      <Image 
        src={isLightTheme.isLightTheme ? HeroImageLight : HeroImageDark}
        alt="Hero Image"
        placeholder="blur"
        sizes="100vw"
        className={styles.heroimage}
      />
      <HeroText />
      <motion.div
        className={styles.ctas}
        initial={{ opacity: 0, y: 64, scale: 0.75 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{
          delay: 0.9,
        }}
      >
        <Button
          type="button"
          text="saber más"
          className={styles.cta}
          link="https://www.facebook.com/Itersv503"
          ariaLabel="Facebook"
          cssSecondary="true"
        />
        <Button
          type="button"
          text="llámanos"
          className={styles.cta}
          link="https://wa.me/50370533409?text=Hola%2C%20tengo%20una%20super%20mega%20idea"
          ariaLabel="WhatsApp"
        />
      </motion.div>
    </div>
  );
};
