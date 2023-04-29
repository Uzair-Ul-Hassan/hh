import React from "react";
import { motion } from "framer-motion";

import "./smartHome.scss";
import smartHome from "../../assets/smart-home.png";

const SmartHome = () => {
  return (
    <section className="smart-home container">
      <motion.h2
        className="secondary-heading smart-home__heading med:text-[4.6rem] text-[3.6rem]"
        initial={{ transform: "translateX(-100%)", opacity: 0 }}
        whileInView={{ transform: "translateX(0)", opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      >
        Smart Home
      </motion.h2>
      <div className="smart-home__content">
        <motion.div
          className="smart-home__text"
          initial={{ transform: "translatey(100%)", opacity: 0 }}
          whileInView={{ transform: "translateY(0)", opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        >
          <p>
            H&H aims to ﬁll the void of smart automation in their customer
            lives. We offer smart retroﬁt solutions which bring efﬁciency,
            security, accessibility and affordability.{" "}
          </p>
          <p>
            In combination with those beneﬁts, we bring comfort, convenience and
            luxury to every home, corporate ofﬁce or hospitality, be it a new or
            pre-constructed building.{" "}
          </p>
        </motion.div>
        <motion.div
          className="smart-home__image"
          initial={{ transform: "translateX(100%)", opacity: 0 }}
          whileInView={{ transform: "translateX(0)", opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        >
          <img src={smartHome} alt="smart-home" />
        </motion.div>
      </div>
    </section>
  );
};

export default SmartHome;
