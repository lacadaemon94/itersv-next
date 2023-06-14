import React from 'react'
import { motion } from 'framer-motion'

import styles from '../../styles/contact.module.css'


type Props = {
  title: string;
  description: string;
}

export const PageTitle = ({ title, description }: Props) => {
  return (
    <div className={styles.pagetitle}>
      <motion.h2
        initial={{
          opacity: 0,
          x: -40
        }}
        whileInView={{
          opacity: 1,
          x: 0
        }}
        viewport={{ once: true }}
        transition={{
          type: 'spring',
          duration: 1.5
        }}
      >
        {title}
      </motion.h2>
      <motion.p
        initial={{
          opacity: 0,
          y: -20
        }}
        whileInView={{
          opacity: 1,
          y: 0
        }}
        viewport={{ once: true }}
        transition={{
          type: 'spring',
          duration: 1.5,
          delay: 0.25
        }}
      >
        {description}
      </motion.p>
    </div>
  )
}