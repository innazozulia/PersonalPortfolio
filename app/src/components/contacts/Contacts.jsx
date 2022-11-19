import React from "react";
import "./contacts.scss";
import { FaPhoneAlt, FaTelegram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contacts = () => {
  return (
    <div
      className="contacts"
      id="contact">
      <h2>Contact me</h2>
      <div className="contact">
        <div className="contact-item">
          <FaPhoneAlt />
          <h3>phone</h3>
          <p>
            <a href="tel:+380990468488"> +(38)099 0 468 488</a>
          </p>
        </div>
        <div className="contact-item">
          <MdEmail />
          <h3>email</h3>
          <p>
            <a href="mailto:innazozulia@outlook.com">innazozulia@outlook.com</a>
          </p>
        </div>
        <div className="contact-item">
          <FaTelegram />
          <h3>telegram</h3>
          <p>
            <a href="https://telegram.me/innazozulia"> write a message</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
