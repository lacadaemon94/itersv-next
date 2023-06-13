import React from 'react'
import { motion } from 'framer-motion'

import styles from '../../../styles/home.module.css'

type Props = {
  icon: JSX.Element,
  title: string,
  text: string,
}

const TaskCard = ({ icon, title, text }: Props) => {
  return (
    <div className={styles.taskcard}>
      {icon}
      <div className={styles.taskcardcontent}>
        <h5>
          {title}
        </h5>
        <p>
          {text}
        </p>
      </div>
    </div>
  )
}

export default TaskCard