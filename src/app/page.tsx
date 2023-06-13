// Home Page
"use client"
import React from 'react'
import { HeroSection } from './components/herosection/HeroSection'
import { Step } from './components/step/Step'

import styles from '../app/styles/home.module.css'


export default function page() {
  return (
    <div className={styles.home}>
      <HeroSection />
      <div className={styles.steps}>
        <Step
          id='1'
          gradientLineStart='#4FACFE'
          gradientLineEnd='#00F2FE'
          gradientCircle='linear-gradient(21.1deg, #4FACFE 17.28%, #00F2FE 82.91%)'
          gradientTextOne='#4FACFE'
          gradientTextTwo='#00F2FE'
          stepNumber='1'
          stepName='sueña'
          titleText='Todo empieza con un'
          titleEmphasis='sueño.'
          descriptionText="En Iter queremos hacer de tus sueños, nuestros sueños, queremos elevarlos a nuevas realidades digitales y verlos alcanzar su máximo potencial."
        />
      </div>
    </div>
  )
}