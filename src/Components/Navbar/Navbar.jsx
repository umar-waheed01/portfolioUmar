import { useState } from "react";
import "./Navbar.css";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = () => {
  const [menu, setMenu] = useState("");
  return (
    <div id="navbar" className="navbar">
      <h1>Umar</h1>
      <ul className="nav-menu">
        <li>
          <AnchorLink className="anchor-link" href="#home">
            <p onClick={() => setMenu("home")}>Home</p>
          </AnchorLink>
          {menu === "home" ? <hr style={{ border: "3px solid #da7625" }} /> : null}
        </li>
        <li>
          <AnchorLink className="anchor-link" href="#about" offset={50}>
            <p onClick={() => setMenu("about")}>About Me</p>
          </AnchorLink>
          {menu === "about" ? <hr style={{ border: "3px solid #da7625" }} /> : null}
        </li>
        <li>
          <AnchorLink className="anchor-link" href="#services" offset={50}>
            <p onClick={() => setMenu("services")}>Services</p>
          </AnchorLink>
          {menu === "services" ? <hr style={{ border: "3px solid #da7625" }} /> : null}
        </li>
        <li>
          <AnchorLink className="anchor-link" href="#work" offset={50}>
            <p onClick={() => setMenu("Portfolio")}>Portfolio</p>
          </AnchorLink>
          {menu === "Portfolio" ? <hr style={{ border: "3px solid #da7625" }} /> : null}
        </li>
        <li>
          <AnchorLink className="anchor-link" href="#contact" offset={50}>
            <p onClick={() => setMenu("contact")}>Contact</p>
          </AnchorLink>
          {menu === "contact" ? <hr style={{ border: "3px solid #da7625" }} /> : null}
        </li>
      </ul>
      <div className="nav-connect">
        <AnchorLink className="anchor-link" href="#contact" offset={50}>
          Connect With Me
        </AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;
