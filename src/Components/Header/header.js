import React, { useState } from "react";
import styled from "styled-components";
import { Fade as Hamburger } from "hamburger-react";
import { Link } from "react-router-dom";

import "./header.css";

export const ResponsiveMenu = styled.nav`
  background: #1b1b1b;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  top: ${({ responsiveMenu }) => (responsiveMenu ? "0" : "-200%")};
  transition: all 0.5s;
  display: none;

  @media all and (max-width: 768px) {
    display: flex;
    z-index: 1;
  }
`;

function Header() {
  const [isOpen, setOpen] = useState(false);

  const [responsiveMenu, setResponsiveMenu] = useState(false);
  const showResponsiveMenu = () => setResponsiveMenu(!responsiveMenu);

  return (
    <div>
      <div className="header">
        <Link className="header-topic" to="/">
          <span className="header-topic-one">M | </span>
          <span className="header-topic-two">L |</span>
        </Link>

        <div className="hamburger">
          <Hamburger
            id="close-button"
            size={24}
            toggled={isOpen}
            toggle={setOpen}
            duration={0.8}
            onToggle={(toggled) => {
              if (toggled) {
                showResponsiveMenu();
              } else {
                showResponsiveMenu();
              }
            }}
          />
        </div>

        <div className="header-parts">
          <div>
            <Link to="/malcolm-lismore">M.Lismore</Link>
          </div>

          <div>
            <Link to="/services">Services</Link>
          </div>

          <div>
            <Link to="/gallery">Gallery</Link>
          </div>

          <div>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </div>

      <ResponsiveMenu
        className="responsive-menu"
        responsiveMenu={responsiveMenu}
      >
        <div className="header-parts-responsive">
          <div>
            <Link
              to="/malcolm-lismore"
              onClick={() => {
                setOpen(false);
                showResponsiveMenu();
              }}
            >
              M.Lismore
            </Link>
          </div>

          <div>
            <Link
              to="/services"
              onClick={() => {
                setOpen(false);
                showResponsiveMenu();
              }}
            >
              Services
            </Link>
          </div>

          <div>
            <Link
              to="/gallery"
              onClick={() => {
                setOpen(false);
                showResponsiveMenu();
              }}
            >
              Gallery
            </Link>
          </div>

          <div>
            <Link
              to="/contact"
              onClick={() => {
                setOpen(false);
                showResponsiveMenu();
              }}
            >
              Contact
            </Link>
          </div>
        </div>
      </ResponsiveMenu>
    </div>
  );
}

export default Header;
