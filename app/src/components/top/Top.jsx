import React from "react";
import { FaTelegram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "./top.scss";

const Top = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={"top " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a
            href="#intro"
            className="logo">
            web.
          </a>
          <div className="item-container">
            <FaTelegram className="icon" />
            <span>
              <a
                className="link"
                href="https://telegram.me/innazozulia">
                contact me
              </a>
            </span>
          </div>
          <div className="item-container">
            <MdEmail className="icon" />
            <span>
              <a
                className="link"
                href="mailto:innazozulia@outlook.com">
                innazozulia@outlook.com
              </a>
            </span>
          </div>
        </div>
        <div className="right">
          <div
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top;
