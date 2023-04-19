import React from "react";
import { motion } from "framer-motion";

import mepImage from "../../assets/mep-service.png";
import videoMP4 from "../../assets/smarthomeVideo.mp4";
import "./mep.scss";

const Mep = () => {
  return (
    <section className="media">
      <motion.div
        initial={{ opacity: 0, transform: "translateX(-100%)" }}
        whileInView={{ opacity: 1, transform: "translateX(0)" }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "0px 0px -200px 0px" }}
      >
        <img src={mepImage} alt="mep" className="media__image" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, transform: "translateX(100%)" }}
        whileInView={{ opacity: 1, transform: "translateX(0)" }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "0px 0px -200px 0px" }}
      >
        <video className="media__video" autoPlay muted loop>
          <source src={videoMP4} type="video/mp4"></source>
          Your browser is not supported!
        </video>
      </motion.div>
    </section>
  );
};

export default Mep;
