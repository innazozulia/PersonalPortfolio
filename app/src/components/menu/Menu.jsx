import { BsGithub, BsLinkedin, BsInstagram } from "react-icons/bs";

import "./menu.scss";

const Menu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#intro">Home</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#works">More Works</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#contact">Contact me</a>
        </li>
      </ul>
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

export default Menu;
