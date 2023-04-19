import React from "react";
import { motion } from "framer-motion";

import "./MepServices.scss";
import Image from "../../assets/MEP.png";

const MepServices = () => {
  return (
    <section className="mep-ser container">
      <motion.h2
        className="secondary-heading mep-ser__heading"
        initial={{ transform: "translateX(-100%)", opacity: 0 }}
        whileInView={{ transform: "translateX(0)", opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      >
        MEP Services
      </motion.h2>
      <div className="mep-ser__content">
        <motion.div
          className="mep-ser__image"
          initial={{ transform: "translatey(100%)", opacity: 0 }}
          whileInView={{ transform: "translateY(0)", opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "0px 0px -50px 0px" }}
        >
          <img src={Image} alt="mep-ser" />
        </motion.div>
        <motion.div
          className="mep-ser__text"
          initial={{ transform: "translateX(100%)", opacity: 0 }}
          whileInView={{ transform: "translateX(0)", opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "0px 0px -50px 0px" }}
        >
          As a MEP Contractor, H&H Power is comprised of professionals with
          comprehensive experience specialized in MEP installation, operations
          and maintenance. H&H Power renders MEP focused services to various
          sectors like{" "}
          <span className="mep-ser__highlight">
            Education, Health care, Banks, Sports club, Real estate, shopping
            malls etc.,
          </span>{" "}
          by efficiently maintaining their facilities. We have technical experts
          who are most experienced in similar industries.
          <p>
            Our aim is to provide high standards of quality engineering services
            as the best MEP Contractors. Electrical, Low Current, Drainage,
            Water Supply, Fire Alarm, Fire Fighting, LPG, and HVAC for
            Residential & Industrial buildings.{" "}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MepServices;
