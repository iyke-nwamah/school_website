import React from "react";
import Back from "../common/back/Back";
import "./Contact.css";
import {
  AiOutlineTwitter,
  AiOutlineYoutube,
  AiOutlineFacebook,
  AiOutlineLinkedin,
} from "react-icons/ai";

const Contact = () => {
  const map =
    "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d904726.6131739549!2d85.24565535!3d27.65273865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1652535615693!5m2!1sen!2snp";

  return (
    <>
      <Back title="Contact us" />
      <section className="contacts padding">
        <div className="container shadow flexSB">
          <div className="left row">
            <iframe
              title="Google Maps"
              src={map}
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="right row">
            <h1>Contact us</h1>
            <p>We're open for any suggestion or just to have a chat</p>

            <div className="items grid2">
              <div className="box">
                <h4>ADDRESS:</h4>
                <p>Okota/Isolo Expressway Lagos Nigeria</p>
              </div>
              <div className="box">
                <h4>EMAIL:</h4>
                <p>ikechukwuarinze614@gmail.com</p>
              </div>
              <div className="box">
                <h4>PHONE:</h4>
                <p>+2347039882319</p>
              </div>
            </div>

            <form action="">
              <div className="flexSB">
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
              </div>
              <input type="text" placeholder="Subject" />
              <textarea cols="30" rows="10" placeholder="Create a message here..."></textarea>
              <button className="primary-btn">SEND MESSAGE</button>
            </form>

            <h3>Follow us here</h3>
            <div className="icons">
            <a
              href="https://www.facebook.com/iknwamah/"
              className="pr-4 inline-block text-accent hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineFacebook size={40} />
            </a>
              <a
                href="https://twitter.com/jamesnwamah"
                className="pr-4 inline-block text-accent hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter size={40} />
              </a>
              <a
                href="https://www.youtube.com/@IkechukwuArinze"
                className="pr-4 inline-block text-accent hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineYoutube size={40} />
              </a>
              <a
                href="https://www.linkedin.com/in/ikechukwu-nwamah/"
                className="pr-4 inline-block text-accent hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineLinkedin size={40} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
