import React from "react";

import { AiFillFacebook } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsPinterest } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { GoLocation } from "react-icons/go";

import "./footer.scss";
import Logo from "../../assets/logo.jpg";
import { Link } from "react-router-dom";

const Footer = () => {
  const style1 = { color: "#fff", fontSize: "3rem" };
  const style2 = { color: "#fff", fontSize: "1.8rem" };

  return (
    <footer className="footer">
      <div className="footer__social">
        <div className="footer__logo-container">
          <div className="footer__logo">
            <img src={Logo} alt="logo" />
            <div>
              <span className="location-name">H&H Power </span>
              <span className="location-name-engg">Engineering Associates</span>
            </div>
          </div>
          <p className="location">
            <GoLocation className="location-icon" style={style2} />
            <span className="location-text">
              201 Second Floor Near
              <br /> St.Pauls School Basheer
              <br /> Bagh Hyderabad-01
            </span>
          </p>
        </div>
        <div className="footer__social-links">
          <ul className="footer__social-links__list">
            <li className="footer__social-links__list-item">
              <AiFillFacebook style={style1} />
            </li>
            <li className="footer__social-links__list-item">
              <AiFillTwitterCircle style={style1} />
            </li>
            <li className="footer__social-links__list-item">
              <BsPinterest style={style1} />
            </li>
            <li className="footer__social-links__list-item">
              <AiFillLinkedin style={style1} />
            </li>
          </ul>
        </div>
      </div>

      <nav className="footer__navigation">
        <ul className="footer__navigation__list">
          <li className="footer__navigation__list-item">
            <Link href="#" className="footer__navigation__link">
              Home
            </Link>
          </li>
          <li className="footer__navigation__list-item">
            <Link href="#" className="footer__navigation__link">
              About
            </Link>
          </li>
          <li className="footer__navigation__list-item">
            <Link href="#" className="footer__navigation__link">
              Projects
            </Link>
          </li>
          <li className="footer__navigation__list-item">
            <Link href="#" className="footer__navigation__link">
              Services
            </Link>
          </li>
          <li className="footer__navigation__list-item">
            <Link href="#" className="footer__navigation__link">
              Privacy Policy
            </Link>
          </li>
          <li className="footer__navigation__list-item">
            <Link href="#" className="footer__navigation__link">
              Terms Of Service
            </Link>
          </li>
          <li className="footer__navigation__list-item">
            <Link href="#" className="footer__navigation__link">
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>

      <div className="copyright">
        <button className="btn">Contact Us</button>
        <p className="copyright__text">Copyright &copy; All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
