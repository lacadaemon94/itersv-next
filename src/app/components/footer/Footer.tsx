"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import EmailCopy from "./EmailCopy/EmailCopy";
import ExternalLink from "./ExternalLink/ExternalLink";

import styles from "../../styles/footer.module.css";

type Props = {};

export const Footer = (props: Props) => {
  const dividerRef = useRef(null);
  const dividerInView = useInView(dividerRef, { once: true })

  const dividerVariants = {
    initial: {
      pathLength: 0,
    },
    inView: {
      pathLength: 1,
    }
  }

  return (
    <div className={styles.footer}>
      <motion.div
        className={styles.divider}
      >
        <svg
          width="1024"
          height="2"
          viewBox="0 0 1024 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          ref={dividerRef}
        >
          <motion.line
            y1="1"
            x2="1024"
            y2="1"
            stroke="url(#paint0_linear_2492_5255)"
            strokeWidth="3"
            variants={dividerVariants}
            initial="initial"
            animate={ dividerInView ? "inView" : 'intial' }
            transition={{
              type: 'spring',
              duration: 2,
            }}
          />
          <defs>
            <linearGradient
              id="paint0_linear_2492_5255"
              x1="0"
              y1="2.99495"
              x2="1030.4"
              y2="2.99495"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#040415" stopOpacity="0" />
              <stop offset="0.5" stopColor="#5353BC" />
              <stop offset="1" stopColor="#040415" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>
      <div className={styles.footercontent}>
        <motion.div 
          className={styles.disclosure}
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1
          }}
          viewport={{ once: true }}
          transition={{
            duration: 1
          }}
        >
          <EmailCopy 
            email="hola@itersv.com"
          />
          <p className={styles.text}>
            Todos los derechos reservados © 2022 Itersv.com
          </p>
        </motion.div>
        <motion.div className={styles.socialnetworks}>
          <ExternalLink 
            linkText="instagram"
            linkUrl="https://www.instagram.com/iter_sv/"
            ariaLabel="Instagram"
          />
          <ExternalLink 
            linkText="dribbble"
            linkUrl="https://dribbble.com/Itersv"
            ariaLabel="Dribbble"
          />
          <ExternalLink 
            linkText="facebook"
            linkUrl="https://www.facebook.com/Itersv503/"
            ariaLabel="Facebook"
          />
          <ExternalLink 
            linkText="twitter"
            linkUrl="https://twitter.com/Iter_sv"
            ariaLabel="Twitter"
          />
          <ExternalLink 
            linkText="BeHance"
            linkUrl="https://www.behance.net/itersv"
            ariaLabel="BeHance"
          />
          <ExternalLink 
            linkText="WhatsApp"
            linkUrl="https://wa.me/50370533409?text=Hola%2C%20tengo%20una%20super%20idea!"
            ariaLabel="WhatsApp"
          />
        </motion.div>
      </div>
    </div>
  );
};
