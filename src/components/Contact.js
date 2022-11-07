import React from "react";
import { useRef, useState } from "react";
import "../styles/contact.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMobileAlt,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

import emailjs from "@emailjs/browser";

function Contact() {
  const formRef = useRef();
  const [done, setDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_mo7ty4c",
        "template_2w351uv",
        formRef.current,
        "user_bJF06717qtfZFjw2M2tpr"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div id="contact" className="contact">
      <div className="contact__left">
        <h1 className="c">Let's discuss your project</h1>
        <div className="contact__leftInformations">
          <div className="informations">
            <FontAwesomeIcon className="icon mail phone" icon={faEnvelope} />
            <p>zivoticaleksandar00@gmail.com</p>
          </div>

          <div className="informations">
            <FontAwesomeIcon className="icon map" icon={faMapMarkerAlt} />
            <p>Požarevac, Serbia</p>
          </div>
        </div>

        <div className="contact__leftSocials"></div>
      </div>

      <div className="contact__right">
        <p>
          <b>Get in touch</b>, always available for freelancing.
        </p>

        <form ref={formRef} onSubmit={handleSubmit}>
          <input type="text" placeholder="Name" name="user_name" />
          <input type="text" placeholder="Subject" name="user_subject" />
          <input type="email" placeholder="Email" name="user_email" />
          <textarea name="message" rows="5" placeholder="Message"></textarea>
          <div className="btnAndNote">
            <button>Submit</button>
            <span>
              {done && "Thank you for contacting me. I'll get to you ASAP :)"}
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
