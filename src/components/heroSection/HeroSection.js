import React from "react";

import "./heroSection.scss";
import MEP from "../../assets/MEP.png";

const Header = () => {
  return (
    <section className="hero-section container med:flex-row flex-col">
      <div className="hero-section__image">
        <img src={MEP} alt="mep" />
      </div>
      <div className="hero-section__content">
        <p>
          As a MEP Contractor, H&H Power is comprised of professionals with
          comprehensive experience specialized in MEP installation, operations
          and maintenance. H&H Power renders MEP focused services to various
          sectors like{" "}
          <span className="highlight">
            Health care, Pharma Industries, Education, Banks, Sports club, Real
            estate, shopping malls etc.,
          </span>{" "}
          by efficiently maintaining their facilities. We have technical experts
          who are most experienced in similar industries.
        </p>
        <p>
          Our aim is to provide high standards of quality engineering services
          as the best MEP Contractors. Electrical, Low Current, Drainage, Water
          Supply, Fire Alarm, Fire Fighting, LPG, and HVAC for Residential &
          Industrial buildings.
        </p>
      </div>
    </section>
  );
};

export default Header;
