import React from "react";
import { BsChevronCompactDown } from "react-icons/bs";
import { init } from "ityped";
import "./intro.scss";

const Intro = () => {
  const textRef = React.useRef();

  React.useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Web Developer", "I’m currently learning NodeJs, Express"],
    });
  }, []);
  return (
    <div
      className="intro"
      id="intro">
      <div className="right">
        <div className="img-container">
          <img
            src="assets/ii.png"
            alt=""
          />
        </div>
      </div>
      <div className="left">
        <div className="wrapper">
          <h2>Hi there, I'm</h2>
          <h1>Inna Zozulia</h1>
          <h3>
            <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <BsChevronCompactDown className="anchor" />
        </a>
      </div>
    </div>
  );
};

export default Intro;
