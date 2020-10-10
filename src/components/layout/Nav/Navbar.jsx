import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../../../images/akva-dejon-logo-transparent.png";
import NavLinks from "./NavLinks";

function Navbar() {
  const burgerRef = useRef(null);
  const navLinksRef = useRef(null);

  // Make burger lines into X
  const animateBurgerLines = (lines) => {
    lines.forEach((line) => {
      line.classList.toggle("toggler");
    });
  };

  const removeBurgerMenu = () => {
    // Make nav links inactive
    navLinksRef.current.classList.remove("nav-links-active");

    // Make burger lines horizontal
    burgerRef.current.children.forEach((line) => {
      line.classList.remove("toggler");
    });
  };

  const handleBurgerClick = () => {
    // Toggle nav links between active and inactive
    navLinksRef.current.classList.toggle("nav-links-active");

    // Call animation of burger lines
    animateBurgerLines(burgerRef.current.children);
  };

  // Check resize of window to remove responsive classes
  useEffect(() => {
    window.onresize = () => {
      if (window.matchMedia("(min-width: 1100px)")) {
        removeBurgerMenu();
      }
    };
  }, []);

  return (
    <>
      <header>
        <div className="container">
          <div className="navigation">
            <div className="company-logo">
              <Link to="/akva-dejon-plus/home">
                <img src={logo} alt="company logo left side" />
              </Link>
            </div>
            <nav className="navbar">
              <NavLinks ref={navLinksRef}/>
            </nav>
            <div
              className="hamburger"
              ref={burgerRef}
              onClick={handleBurgerClick}
            >
              <div className="line line1"></div>
              <div className="line line2"></div>
              <div className="line line3"></div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
