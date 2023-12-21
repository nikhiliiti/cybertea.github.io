import  { useState } from "react";
import logo from "../../src/assets/cyberTea_Circular.png";
import { Squash as Hamburger } from "hamburger-react";
import "./Navbar.css";

export default function Navbar() {
  const [expand, setExpand] = useState(false);

  const NavToggle = () => {
    setExpand(!expand);
  };

  const scrollToSection = (e) => {
    e.preventDefault();
    const targetId = e.target.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const offset = 70;
      const targetPosition = targetElement.offsetTop - offset;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  window.addEventListener("scroll", () => {
    const y = window.scrollY;
    if (y > 10) {
      document.getElementById("navbar").classList.add("navbar_on_move");
    }
    if (y < 10) {
      document.getElementById("navbar").classList.remove("navbar_on_move");
    }
  });

  return (
    <>
      <nav id="navbar">
        <div className="mobview">
          <h1>
            <a href={logo} target="_blank" rel="noopener noreferrer">
              <img src={logo} alt="iiits" id="logo_cyber" />
            </a>
            CyberTEA
          </h1>
          <span id="hamburger" onClick={NavToggle}>
            <Hamburger toggled={expand} />
          </span>
        </div>
        <ul id="nav-right" className={expand ? `expand` : ``}>
          <li
            onClick={() => {
              expand ? NavToggle() : ``;
            }}
          >
            <a href="#about" onClick={scrollToSection}>
              About
            </a>
          </li>
          <li
            onClick={() => {
              expand ? NavToggle() : ``;
            }}
          >
            <a href="#speakers" onClick={scrollToSection}>
              Speakers
            </a>
          </li>
          <li
            onClick={() => {
              expand ? NavToggle() : ``;
            }}
          >
            <a
              href="/img/CyberTEA_Brochure.pdf"
              download="CyberTEA_Brochure.pdf"
            >
              Brochure
            </a>
          </li>
          <li
            onClick={() => {
              expand ? NavToggle() : ``;
            }}
          >
            {" "}
            <a href="#schedule" onClick={scrollToSection}>
              Schedule
            </a>
          </li>
          <li
            onClick={() => {
              expand ? NavToggle() : ``;
            }}
          >
            <a href="#registration" onClick={scrollToSection}>
              Register
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
