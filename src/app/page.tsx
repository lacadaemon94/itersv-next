// Home Page
"use client";
import React from "react";
import { HeroSection } from "./components/herosection/HeroSection";
import { Step } from "./components/step/Step";

import styles from "../app/styles/home.module.css";

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

// Images
import DreamLight from "../assets/images/Dreams_Light.png";
import DreamDark from "../assets/images/Dreams_Dark.png";
import ImagineLight from "../assets/images/Imagine_Light.png";
import ImagineDark from "../assets/images/Imagine_Dark.png";
import DevelopLight from "../assets/images/Develop_Light.png";
import DevelopDark from "../assets/images/Develop_Dark.png";

export default function page() {
  return (
    <div className={styles.home}>
      <HeroSection />
      <div className={styles.steps}>
        <Step
          id="1"
          gradientLineStart="#4FACFE"
          gradientLineEnd="#00F2FE"
          gradientCircle="linear-gradient(21.1deg, #4FACFE 17.28%, #00F2FE 82.91%)"
          gradientTextOne="#4FACFE"
          gradientTextTwo="#00F2FE"
          stepNumber="1"
          stepName="sueña"
          linePath="M2 53.5003C2 53.5003 64.4136 18.931 108.5 11.5003C134.519 7.11477 155.5 4.00032 174 8.00032C187.083 10.8291 192.406 14.9652 186.5 22.5003C172 41.0003 94.9478 54.1054 104.5 35.0003C108.5 27 124 19.5993 132 16.5002C187.5 -5.00002 295.5 4.00005 295.5 4.00005"
          lineDimensions="0 0 298 56"
          titleText="Todo empieza con un"
          titleEmphasis="sueño."
          descriptionText="En Iter queremos hacer de tus sueños, nuestros sueños, queremos elevarlos a nuevas realidades digitales y verlos alcanzar su máximo potencial."
          imageLight={DreamLight}
          imageDark={DreamDark}
          imageAlt="Dreams"
          cardOneIcon={<Puzzle />}
          cardOneTitle="Concepto"
          cardOneText="Te ayudamos a transformar tus sueños en ideas."
          cardTwoIcon={<ColorSwatch />}
          cardTwoTitle="Visualización"
          cardTwoText="Llevamos tus ideas a propuestas concretas."
          cardThreeIcon={<SpeakerPhone />}
          cardThreeTitle="Branding"
          cardThreeText="El viaje tiene un destino; el máximo potencial."
        />
        <Step
          id="2"
          gradientLineStart="#F83600"
          gradientLineEnd="#F9D423"
          gradientCircle="linear-gradient(21.1deg, #F83600 17.28%, #F9D423 82.91%)"
          gradientTextOne="#F83600"
          gradientTextTwo="#F9D423"
          stepNumber="2"
          stepName="imagina"
          linePath="M3 86.4999C32 42.4994 187 -0.500587 210.5 21.4999C234 43.5003 207.488 61.6874 196 69.4994C171 86.4999 119.5 94 119.5 72.4994C119.5 50.9989 202.154 16.4354 263 8.49941C378 -6.49978 410 12.4994 410 38.5C410 62.6131 363 75.5 344.5 77C321.517 78.8635 304.165 71.0908 307 55.5C312 28 379.988 17.4762 431 12.4994C472 8.49941 499.912 4.84851 540 8.49942"
          lineDimensions="0 0 545 89.3"
          titleText="El limite es tú"
          titleEmphasis="imaginación."
          descriptionText="Tus ideas plasmadas en diseños interactivos, fluidos y dinámicos; vos tenes el control sobre la dirección de tu idea."
          imageLight={ImagineLight}
          imageDark={ImagineDark}
          imageAlt="Imagination"
          cardOneIcon={<CollectionOutline />}
          cardOneTitle="Diseño Lo-Fi"
          cardOneText="Creamos diseños Lo-Fi para depurar ideas."
          cardTwoIcon={<Collection />}
          cardTwoTitle="Diseño Hi-Fi"
          cardTwoText="Básicamente tu web app, sin interactividad."
          cardThreeIcon={<CursorClick />}
          cardThreeTitle="Prototipo"
          cardThreeText="Añadimos interactividad para darle vida a tu idea."
        />
        <Step
          id="3"
          gradientLineStart="#6715CD"
          gradientLineEnd="#2575FC"
          gradientCircle="linear-gradient(31.92deg, #6A11CB 12.49%, #2575FC 84.95%)"
          gradientTextOne="#6A11CB"
          gradientTextTwo="#2575FC"
          stepNumber="3"
          stepName="desarrolla"
          linePath="M7.59667 65.4969C6.09667 65.9969 3.32029 66.9441 3.09668 66.4969C0.596654 61.4969 47.0947 38.4969 83.0967 25.9969C134.722 8.07241 206.596 -3.00507 221.597 5.99693C238.097 15.8987 114.2 57.5189 135.595 49.9968C181.095 34 206.095 18.5 258.597 12.4969C275.281 10.5893 284.595 9.5 298.595 9.5C323.774 9.5 217.562 53.1939 244.095 45C278.095 34.5 381.595 18 424.097 19.4969"
          lineDimensions="0 0 440 70"
          titleText="Ve como tu idea cobra vida y se"
          titleEmphasis="desarrolla."
          descriptionText="Haz tu negocio, tienda, proyecto o idea crecer y desarrollarse en el espacio digital; haz que tu idea sea omnipresente, fluida, dinámica y con vibras positivas a lo largo de todo el espacio digital."
          imageLight={DevelopLight}
          imageDark={DevelopDark}
          imageAlt="Development"
          cardOneIcon={<ShoppingCart />}
          cardOneTitle="e-Commerce"
          cardOneText="Tu tienda, negocio o servicios ubicuos."
          cardTwoIcon={<Globe />}
          cardTwoTitle="Web Apps"
          cardTwoText="Tu idea o proyecto al alcanze de tod@s."
          cardThreeIcon={<AtSymbol />}
          cardThreeTitle="Content Marketing"
          cardThreeText="Tu voz sin limites ni barreras que la detengan."
        />
      </div>
    </div>
  );
}
