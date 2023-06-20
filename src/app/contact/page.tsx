// Contact Page
"use client";
import React from "react";

import styles from "../styles/contact.module.css";

// Icons
import Phone from "@/assets/icons/Phone";
import Mail from "@/assets/icons/Mail";
import FacebookMessenger from "@/assets/icons/FacebookMessenger";
import FacebookCircled from "@/assets/icons/FacebookCircled";
import Twitter from "@/assets/icons/Twitter";
import Instagram from "@/assets/icons/Instagram";
import WhatsApp from "@/assets/icons/WhatsApp";

// Images
import BubblesLight from "../../assets/images/CantactBubbles_Light.png";
import BubblesDark from "../../assets/images/CantactBubbles_Dark.png";
import { PageTitle } from "../components/pagetitle/PageTitle";
import { ContactCard } from "../components/contactcard/ContactCard";
import { Form } from "../components/form/Form";

export default function page() {
  return (
    <div className={styles.contact}>
      <PageTitle
        title="¡Hablemos!"
        description="Puedes contactarnos en cualquier momento, nosotros te responderemos entre 1-2 días hábiles."
      />
      <div className={styles.contentcontainer}>
        <ContactCard
          cardTitle="Información de Contacto"
          cardDescription="Tambien puedes contactarnos por los siguientes medios:"
          cardIconOne={<Phone />}
          cardLinkOne="https://wa.me/50370533409?text=Hola%2C%20tengo%20una%20super%20idea!"
          cardLinkContentOne="+503 7053 3409"
          cardIconTwo={<Mail />}
          cardLinkTwo="mailto:hola@itersv.com?subject=Tengo una Propuesta&body=Tengo una super mega idea..."
          cardLinkContentTwo="hola@itersv.com"
          cardIconThree={<FacebookMessenger />}
          cardLinkThree="https://m.me/Itersv503"
          cardLinkContentThree="m.me/itersv"
          cardFooterIconOne={<FacebookCircled />}
          cardFooterLinkOne="https://www.facebook.com/Itersv503"
          cardFooterIconTwo={<Instagram />}
          cardFooterLinkTwo="https://www.instagram.com/iter_sv/"
          cardFooterIconThree={<Twitter />}
          cardFooterLinkThree="https://twitter.com/Iter_sv"
          cardFooterIconFour={<WhatsApp />}
          cardFooterLinkFour="https://wa.me/8618500904963?text=Hola%2C%20tengo%20una%20super%20idea!"
          cardIllustrationLight={BubblesLight}
          cardIllustrationDark={BubblesDark}
          cardAriaLabelOne="WhatsApp"
          cardAriaLabelTwo="Email"
          cardAriaLabelThree="Messenger"
          cardFooterAriaLabelOne="Facebook"
          cardFooterAriaLabelTwo="Instagram"
          cardFooterAriaLabelThree="Twitter"
          cardFooterAriaLabelFour="WhatsApp"
        />
        <Form />
      </div>
    </div>
  );
}
