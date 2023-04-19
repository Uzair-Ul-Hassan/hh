import React from "react";
import { GoLocation } from "react-icons/go";
import { BsFillTelephoneFill } from "react-icons/bs";

import videoMP4 from "../../assets/video.mp4";
import "./heroSection.scss";

const Header = () => {
  const style = { color: "#000", fontSize: "3rem" };

  return (
    <section className="hero-section">
      <div className="hero-section__bg-video-container">
        <video className="hero-section__bg-video" autoPlay muted loop>
          <source src={videoMP4} type="video/mp4"></source>
          Your browser is not supported!
        </video>
      </div>

      <div className="hero-section__content">
        <h1 className="primary-heading hero-section__heading">
          H&H Power Engineering Associates
        </h1>
        <address className="hero-section__info">
          <p className="hero-section__location">
            <GoLocation className="hero-section__location-icon" style={style} />
            <span className="hero-section__location-text">
              201 Second Floor Near St.Pauls School Basheer Bagh Hyderabad-01
            </span>
          </p>
          <p className="hero-section__contact">
            <BsFillTelephoneFill
              className="hero-section__contact-icon"
              style={style}
            />
            <span className="hero-section__contact-text">+91 90323 72607</span>
          </p>
        </address>
      </div>
    </section>
  );
};

export default Header;
