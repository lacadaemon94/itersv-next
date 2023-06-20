"use client";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { motion } from "framer-motion";

import "react-toastify/dist/ReactToastify.css";
import styles from "../../styles/contact.module.css";

// Icons
import Sent from "@/assets/icons/Sent";
import Send from "@/assets/icons/Send";
import Sending from "../../../assets/images/sending.gif";

type Props = {};

export const Form = (props: Props) => {
  const [formValues, setFormValues] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState("enviar");
  const [messageLength, setMessageLength] = useState(0);

  const handleChange = (e: any) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });

    // Message Length Setter
    if (e.target.name === 'message') {
      setMessageLength(e.target.value.length)
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    // Validate First Name & Last Name
    if (formValues.fname.length < 2 || formValues.lname.length < 2) {
      toast.error("Nombre y Apellido deben tener más de 1 letra");
      return;
    }
    // Validate Email
    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    if (!emailRegex.test(formValues.email)) {
      toast.error("Por favor ingresa un correo valido");
      return;
    }
    // Validate Service
    // Validate message
    if (formValues.message.length < 10) {
      toast.error("El mensaje debe de tener más de 10 letras");
      return;
    }

    setFormStatus("enviando...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formValues),
      });

      if (!response.ok) {
        console.error('Error:', response.status, response.statusText);
        return;
      }

      const data = await response.json();
      if (response.ok) {
        toast.success("Mensaje Enviado!", data);
        setFormStatus("enviado");
      } else {
        toast.error("Error al enviar", data);
        setFormStatus("enviar");
      }
    } catch (error) {
      console.error("Error while sending form", error);
    }
  };

  return (
    <motion.div 
      className={styles.formcontainer}
      initial={{ 
        opacity: 0,
        x: 40,
       }}
       whileInView={{
        opacity: 1,
        x: 0,
       }}
       viewport={{ once: true }}
       transition={{
        type: 'spring',
        duration: 1.5,
       }}
    >
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.row}>
          <div className={styles.inputwrapper}>
            <input
              required={true}
              type="text"
              name="fname"
              autoComplete="no-autocomplete-fname"
              className={styles.formfield}
              onChange={handleChange}
            />
            <label className={styles.inputlabel}>Nombre</label>
          </div>
          <div className={styles.inputwrapper}>
            <input
              required={true}
              type="text"
              name="lname"
              autoComplete="no-autocomplete-lname"
              className={styles.formfield}
              onChange={handleChange}
            />
            <label className={styles.inputlabel}>Apellido</label>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.inputwrapper}>
            <input
              required={true}
              type="text"
              name="email"
              autoComplete="no-autocomplete-email"
              className={styles.formfield}
              onChange={handleChange}
              style={{ textTransform: "none" }}
            />
            <label className={styles.inputlabel}>Correo</label>
          </div>
          <div className={styles.inputwrapper}>
            <input
              required={true}
              type="text"
              name="phone"
              autoComplete="no-autocomplete-phone"
              className={styles.formfield}
              onChange={handleChange}
              style={{ textTransform: "none" }}
            />
            <label className={styles.inputlabel}>Teléfono</label>
          </div>
        </div>
        <fieldset name="service" className={styles.fieldset} onChange={handleChange}>
          <legend>¿Que tipo de servicio necesitas?</legend>
          <input
            type="radio"
            id="web-design"
            name="service"
            value={"web design"}
          />
          <label htmlFor="web-design">
            <button type="button"><div></div></button>
            <p>Diseño Web</p>
          </label>
          <input type="radio" id="app-dev" name="service" value={"app dev"} />
          <label htmlFor="app-dev">
            <button type="button"><div></div></button>
            <p>Desarrollo de App</p>
          </label>
          <input
            type="radio"
            id="d-marketing"
            name="service"
            value={"digital marketing"}
          />
          <label htmlFor="d-marketing">
            <button type="button"><div></div></button>
            <p>Marketing Digital</p>
          </label>
          <input type="radio" id="other" name="service" value={"other"} />
          <label htmlFor="other">
            <button type="button"><div></div></button>
            <p>Otros</p>
          </label>
        </fieldset>
        <div className={styles.messagewrapper}>
          <textarea
            name="message"
            id="message"
            minLength={20}
            maxLength={250}
            placeholder="Escribe tu mensaje"
            autoComplete="off"
            onChange={handleChange}
          ></textarea>
          <div className={styles.textareacounter} style={{ color: messageLength >= 250 ? '#cc3300' : 'var(--color-neutral-light-2)' }}>{messageLength}/250</div>
        </div>
        <div className={styles.buttonwrapper}>
          <button
            className={styles.sendbutton}
            type="submit"
            data-form-status={formStatus}
            disabled={formStatus === "enviado"}
          >
            <p>{formStatus}</p>
            <Send className={styles.send} />
            <div className={styles.sending}>
              <div className={styles.loader}></div>
            </div>
            <Sent className={styles.sent} />
          </button>
        </div>
      </form>
      <ToastContainer />
    </motion.div>
  );
};
