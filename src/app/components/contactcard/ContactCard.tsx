import React, { useContext } from "react";
import { SessionContext } from "@/app/utils/SessionProvider";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

import styles from "../../styles/contact.module.css";

type Props = {
  cardTitle: string;
  cardDescription: string;
  cardIconOne: JSX.Element;
  cardLinkOne: string;
  cardLinkContentOne: string;
  cardAriaLabelOne: string;
  cardIconTwo: JSX.Element;
  cardLinkTwo: string;
  cardLinkContentTwo: string;
  cardAriaLabelTwo: string;
  cardIconThree: JSX.Element;
  cardLinkThree: string;
  cardLinkContentThree: string;
  cardAriaLabelThree: string;
  cardFooterIconOne: JSX.Element;
  cardFooterLinkOne: string;
  cardFooterAriaLabelOne: string;
  cardFooterIconTwo: JSX.Element;
  cardFooterLinkTwo: string;
  cardFooterAriaLabelTwo: string;
  cardFooterIconThree: JSX.Element;
  cardFooterLinkThree: string;
  cardFooterAriaLabelThree: string;
  cardFooterIconFour: JSX.Element;
  cardFooterLinkFour: string;
  cardFooterAriaLabelFour: string;
  cardIllustrationLight: StaticImageData;
  cardIllustrationDark: StaticImageData;
};

export const ContactCard = ({
  cardTitle,
  cardDescription,
  cardIconOne,
  cardLinkOne,
  cardLinkContentOne,
  cardIconTwo,
  cardLinkTwo,
  cardLinkContentTwo,
  cardIconThree,
  cardLinkThree,
  cardLinkContentThree,
  cardFooterIconOne,
  cardFooterLinkOne,
  cardFooterIconTwo,
  cardFooterLinkTwo,
  cardFooterIconThree,
  cardFooterLinkThree,
  cardFooterLinkFour,
  cardFooterIconFour,
  cardAriaLabelOne,
  cardAriaLabelTwo,
  cardAriaLabelThree,
  cardFooterAriaLabelOne,
  cardFooterAriaLabelFour,
  cardFooterAriaLabelThree,
  cardFooterAriaLabelTwo,
  cardIllustrationDark,
  cardIllustrationLight,
}: Props) => {
  const isLightTheme = useContext(SessionContext);

  return (
    <div className={styles.contactcard}>
      <div className={styles.uppersection}>
        <div className={styles.cardtitle}>
          <h3>{cardTitle}</h3>
          <p>{cardDescription}</p>
        </div>
        <div className={styles.contactoptions}>
          <div className={styles.option}>
            {cardIconOne}
            <a
              href={cardLinkOne}
              aria-label={cardAriaLabelOne}
              rel="noopener noreferrer"
              target="_blank"
            >
              {cardLinkContentOne}
              <div></div>
            </a>
          </div>
          <div className={styles.option}>
            {cardIconTwo}
            <a
              href={cardLinkTwo}
              aria-label={cardAriaLabelTwo}
              rel="noopener noreferrer"
              target="_blank"
            >
              {cardLinkContentTwo}
              <div></div>
            </a>
          </div>
          <div className={styles.option}>
            {cardIconThree}
            <a
              href={cardLinkThree}
              aria-label={cardAriaLabelThree}
              rel="noopener noreferrer"
              target="_blank"
            >
              {cardLinkContentThree}
              <div></div>
            </a>
          </div>
        </div>
      </div>
      <div className={styles.cardfooter}>
        <a
          href={cardFooterLinkOne}
          aria-label={cardFooterAriaLabelOne}
          rel="noopener noreferrer"
          target="_blank"
        >
          {cardFooterIconOne}
        </a>
        <a
          href={cardFooterLinkTwo}
          aria-label={cardFooterAriaLabelTwo}
          rel="noopener noreferrer"
          target="_blank"
        >
          {cardFooterIconTwo}
        </a>
        <a
          href={cardFooterLinkThree}
          aria-label={cardFooterAriaLabelThree}
          rel="noopener noreferrer"
          target="_blank"
        >
          {cardFooterIconThree}
        </a>
        <a
          href={cardFooterLinkFour}
          aria-label={cardFooterAriaLabelFour}
          rel="noopener noreferrer"
          target="_blank"
        >
          {cardFooterIconFour}
        </a>
      </div>
      <div className={styles.cardillustration}>
        <Image
          src={
            isLightTheme.isLightTheme
              ? cardIllustrationLight
              : cardIllustrationDark
          }
          alt="Contact Bubbles"
          placeholder="blur"
          className={styles.illustration}
        />
      </div>
    </div>
  );
};
