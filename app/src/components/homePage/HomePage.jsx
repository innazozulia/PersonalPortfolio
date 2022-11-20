import React from "react";
import Top from "../top/Top";
import Intro from "../intro/Intro";
import Portfolio from "../portfolio/Portfolio";
import Works from "../works/Works";
import Contacts from "../contacts/Contacts";
import Menu from "../menu/Menu";

import "./homePage.scss";

function HomePage() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  return (
    <div className="app">
      <Top
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />
      <Menu
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Works />
        <Contacts />
      </div>
    </div>
  );
}

export default HomePage;
