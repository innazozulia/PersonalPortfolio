import React from "react";
import "./contacts.scss";
import { FaPhoneAlt, FaTelegram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsGithub, BsLinkedin, BsInstagram } from "react-icons/bs";

const Contacts = () => {
  return (
    <div
      className="contacts"
      id="contact">
      <h2>Contact me</h2>
      <div className="contact">
        <div className="contact-item">
          <a
            href="tel:+380990468488"
            className="link">
            <FaPhoneAlt />
            <h3>phone</h3>
          </a>
        </div>
        <div className="contact-item">
          <a
            href="mailto:innazozulia@outlook.com"
            className="link">
            <MdEmail />
            <h3>email</h3>
          </a>
        </div>
        <div className="contact-item">
          <a
            href="https://telegram.me/innazozulia"
            className="link">
            <FaTelegram />
            <h3>telegram</h3>
          </a>
        </div>
      </div>
      <h3 className="more">More links</h3>
      <div className="links">
        <div className="link-more">
          <a
            href="https://github.com/innazozulia"
            className="link-icon">
            <BsGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/inna-zozulia-426367174/"
            className="link-icon">
            <BsLinkedin />
          </a>
          <a
            href="https://www.instagram.com/wayoutofhead/"
            className="link-icon">
            <BsInstagram />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
