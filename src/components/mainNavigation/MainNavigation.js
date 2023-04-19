import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { RiMenu3Line } from "react-icons/ri";

import "./mainNavigation.scss";
import Logo from "../../assets/logo.png";

const NavBar = () => {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <li className="navigation__list__item">
          <NavLink to="/" className="navigation__link">
            Home
          </NavLink>
        </li>
        <li className="navigation__list__item">
          <NavLink to="/about" className="navigation__link">
            About
          </NavLink>
        </li>
        <li className="navigation__list__item">
          <NavLink to="/projects" className="navigation__link">
            Projects
          </NavLink>
        </li>
        <li className="navigation__list__item">
          <NavLink to="/services" className="navigation__link">
            Services
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

const MainNavigation = () => {
  const [showMenu, setShowMenu] = useState(false);
  const style = { height: "3rem", width: "3rem" };

  return (
    <header className="header container">
      <div className="header__logo-container">
        <img src={Logo} alt="logo" />
      </div>
      <div className="navbar-container">
        <NavBar />
      </div>
      <button className="btn">Contact Us</button>
      <RiMenu3Line
        style={style}
        className="mobile-menu-icon"
        onClick={() => setShowMenu(!showMenu)}
      />

      {showMenu && (
        <div className="mobile-menu-navbar">
          <NavBar />
        </div>
      )}
    </header>
  );
};

export default MainNavigation;
