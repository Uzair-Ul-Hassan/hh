import React from "react";

import { AiFillFacebook } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsPinterest } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";

import "./footer.scss";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  const style = { color: "#fff", fontSize: "3rem" };

  return (
    <footer className="footer">
      <div className="footer__social">
        <div className="footer__logo-container">
          <img src={Logo} alt="logo" />
        </div>
        <div className="footer__social-links">
          <ul className="footer__social-links__list">
            <li className="footer__social-links__list-item">
              <AiFillFacebook style={style} />
            </li>
            <li className="footer__social-links__list-item">
              <AiFillTwitterCircle style={style} />
            </li>
            <li className="footer__social-links__list-item">
              <BsPinterest style={style} />
            </li>
            <li className="footer__social-links__list-item">
              <AiFillLinkedin style={style} />
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
