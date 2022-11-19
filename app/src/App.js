import React from "react";
import Top from "./components/top/Top";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Works from "./components/works/Works";
import Contacts from "./components/contacts/Contacts";

import "./app.scss";
import Menu from "./components/menu/Menu";

function App() {
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

export default App;
