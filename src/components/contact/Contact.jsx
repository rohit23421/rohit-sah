import React, { useState, useRef, useContext } from "react";
import "./contact.css";
import emailjs from "emailjs-com";
import { ThemeContext } from "../../context";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_aq4vpwo",
        "template_l8cqeba",
        formRef.current,
        "user_hpFvXOdxyUNHfgjusONBk"
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
    <div classname="c" id="contact">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's build together, Contact me</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img
                src="https://icons-for-free.com/iconfiles/png/512/contact+mobile+phone+telephone+icon-1320186209312314268.png"
                alt=""
                className="c-icon"
              />
              <a href="tel:+919678875635">+91 9678875635</a>
            </div>
            <div className="c-info-item">
              <img
                src="https://thumbs.dreamstime.com/z/email-message-envelope-icon-vector-mail-message-inbox-e-mail-web-inbox-email-line-icon-envelope-website-button-vector-graphics-158449848.jpg"
                alt=""
                className="c-icon"
              />
              <a href="mailto: rohitsah0728@gmail.com?subject=Mail from xyz.com">
                rohitsah0728@gmail.com
              </a>
            </div>
            <div className="c-info-item">
              <img
                src="https://icons.veryicon.com/png/o/miscellaneous/basic-linear-icon/address-101.png"
                alt=""
                className="c-icon"
              />
              <a href="https://www.google.com/maps/place/Tinsukia,+Assam/@27.48505,95.3464791,14.69z/data=!4m5!3m4!1s0x373f6ae252c296c3:0xf6c09ed155cd811d!8m2!3d27.4885539!4d95.355758">
                Tinsukia, Assam, 786125
              </a>
            </div>
            <div className="c-info-item">
              <img
                src="https://www.iconpacks.net/icons/1/free-linkedin-icon-112-thumb.png"
                alt=""
                className="c-icon"
              />
              <a href="https://www.linkedin.com/in/rohit-sah-74989a19a">
                Rohit Sah
              </a>
            </div>
            <div className="c-info-item">
              <img
                src="https://icon-library.com/images/instagram-icon-download/instagram-icon-download-7.jpg"
                alt=""
                className="c-icon"
              />
              <a href="https://www.instagram.com/rohit23421/">rohit23421</a>
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What’s your story?</b> Get in touch. Always available for
            freelancing if the right project comes along. me.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Name"
              name="user_name"
            />
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Subject"
              name="user_subject"
            />
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Email"
              name="user_email"
            />
            <textarea
              style={{ backgroundColor: darkMode && "#333" }}
              row="5"
              placeholder="Message"
              name="message"
            />
            <button>Send</button>
            {done && (
              <h4 className="ty">
                Message sent <em>Thank you!</em>
              </h4>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
