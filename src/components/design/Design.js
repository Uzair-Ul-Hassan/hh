import React from "react";
import { motion } from "framer-motion";

import "./design.scss";
import ElectricalImage from "../../assets/electrical.jpeg";
import HVACImage from "../../assets/hvac.png";
import FirefightingImage from "../../assets/firefighting.jpeg";

const Design = () => {
  return (
    <section className="container design">
      <motion.h2
        className="secondary-heading design__heading med:text-[4.6rem] text-[3rem]"
        initial={{ transform: "translateX(-100%)", opacity: 0 }}
        whileInView={{ transform: "translateX(0)", opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      >
        Design Services
      </motion.h2>
      <p className="design__text">
        2D and 3D Services MEP Design Services with PMC and Estimation
      </p>

      <div className="design__cards">
        <motion.figure
          className="design__card"
          initial={{ transform: "translateY(20%)", opacity: 0 }}
          whileInView={{ transform: "translateY(0)", opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "0px 0px -20px 0px" }}
        >
          <div className="design__card__img">
            <img src={ElectricalImage} alt="High rise building design" />
          </div>
          <div className="design__card__content">
            <figcaption className="design__card__caption">
              Electrical
            </figcaption>
            <p className="design__card__text">
              We are one of the leading electrical services providers in south
              India, we believe in assisting our clients in designing,
              coordinating, and executing projects varying in size and scope.
            </p>
            <button className="design__card__btn">Learn More</button>
          </div>
        </motion.figure>
        <motion.figure
          className="design__card"
          initial={{ transform: "translateY(40%)", opacity: 0 }}
          whileInView={{ transform: "translateY(0)", opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "0px 0px -20px 0px" }}
        >
          <div className="design__card__img">
            <img src={HVACImage} alt="Coporate design" />
          </div>
          <div className="design__card__content">
            <figcaption className="design__card__caption">HVAC</figcaption>
            <p className="design__card__text">
              Our Air-Conditioning Team works for multiple applications viz.
              comfort cooling systems, process cooling, clean rooms, Labs, Data
              Centre’s, General & basement ventilation, etc.
            </p>
            <button className="design__card__btn">Learn More</button>
          </div>
        </motion.figure>
        <motion.figure
          className="design__card"
          initial={{ transform: "translateY(60%)", opacity: 0 }}
          whileInView={{ transform: "translateY(0)", opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "0px 0px -20px 0px" }}
        >
          <div className="design__card__img">
            <img src={FirefightingImage} alt="BIM design" />
          </div>
          <div className="design__card__content">
            <figcaption className="design__card__caption">
              Fire Fighting
            </figcaption>
            <p className="design__card__text">
              The Fire Fighting team covers Fire hydrant and sprinkler systems,
              Wet & Dry Riser systems, Gas Suppression Systems, Fire
              extinguishers, Fire alarm and Voice Evacuation Systems.
            </p>
            <button className="design__card__btn">Learn More</button>
          </div>
        </motion.figure>
      </div>
    </section>
  );
};

export default Design;
