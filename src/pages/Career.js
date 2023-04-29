import React from "react";
import { motion } from "framer-motion";

import CareerImage from "../assets/career.png";

const Career = () => {
  return (
    <motion.section
      className="container mb-48 px-12 mt-20"
      initial={{ transform: "translateY(30%)", opacity: 0 }}
      whileInView={{ transform: "translateY(0)", opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
    >
      <div>
        <img src={CareerImage} alt="career" className="w-full object-cover" />
      </div>

      <p className="text-center my-12 font-bold">Our Culture: Why H&H Power?</p>
      <p className="mb-8">
        At H&H Power we believe that our most important resource is our
        employees and we aim to build a challenging and rewarding work
        environment where competent people can develop and utilize their full
        potential to achieve the Company’s as well as their own goals.{" "}
      </p>
      <p>
        We are always looking for highly skilled, committed and enthusiastic
        people to join our workforce and in return, we offer an opportunity to
        develop your skills by working on some of the most prestigious
        construction and infrastructure projects underway in the Telangana.{" "}
      </p>
    </motion.section>
  );
};

export default Career;
