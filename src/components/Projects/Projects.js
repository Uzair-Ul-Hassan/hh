import React from "react";

import { motion } from "framer-motion";

import "./Projects.scss";
import MMC from "../../assets/Capture,.PNG";
import BinjuImage from "../../assets/Capture..PNG";
import Tuda from "../../assets/Tuda.png";

const Projects = () => {
  return (
    <section className="container projects">
      <div className="projects__project">
        <div className="projects__project__content">
          <motion.h2
            className="secondary-heading"
            initial={{ opacity: 0, transform: "translateX(-50%)" }}
            whileInView={{ opacity: 1, transform: "translateX(0)" }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          >
            BINJU SIARA CONSTRUCTIONS
          </motion.h2>
          <p>
            BS-7 Mall is situated in the busy neighborhood of Hyderabad’s
            technology corridor – Resham Bagh, Banjara Hills, Hyderabad,
            Telangana 500034 part of Hyderabad. It rises 4 floors into the sky
            and each floor is a humongous 2,70,000 square feet in expanse. That
            makes the mall retail space 9,31,000 square feet. The largest in the
            nation of India!
            <br />
            <br />
            Plus, it has a parking space for 1400 cars and 4000 bikes over four
            levels of parking amounting to another 1,00000 square feet. It has a
            clear carpet space of 1,27,900 square feet for over 430 brands
            across fashion, accessories, fresh food and grocery, footwear,
            luggage, time wear, collectibles, digital fashion, electronics,
            wellness, jewelry, food and beverage and gifts. It has lots of space
            devoted to Home and Home Décor and fast turning out to be the home
            for Entertainment and Adventure.{" "}
          </p>
          <motion.span
            className="director"
            initial={{ opacity: 0, transform: "translateX(-50%)" }}
            whileInView={{ opacity: 1, transform: "translateX(0)" }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          >
            Aditya kedia, Director.
          </motion.span>
        </div>
        <motion.div
          className="projects__project__image"
          initial={{ opacity: 0, transform: "translateX(50%)" }}
          whileInView={{ opacity: 1, transform: "translateX(0)" }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        >
          <img src={BinjuImage} alt="project" />
        </motion.div>
      </div>

      <div className="projects__project">
        <div className="projects__project__content">
          <motion.h2
            className="secondary-heading"
            initial={{ opacity: 0, transform: "translateX(-50%)" }}
            whileInView={{ opacity: 1, transform: "translateX(0)" }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          >
            {" "}
            MMC HOSPITAL DESIGN
          </motion.h2>
          <p>
            150 Bedded Hospital Situated at Hyderabad Which has Total Buildup
            Areal upto 1,00,000 Sft was designed and Modeled by Expertise team
            of Genix Design Consultants.
            <br />
            <br />
            The Design was clash detected with specialized software’s so that it
            can reduce the project cost.
            <motion.span
              className="director"
              initial={{ opacity: 0, transform: "translateX(-50%)" }}
              whileInView={{ opacity: 1, transform: "translateX(0)" }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            >
              HAIDER ALI, CEO{" "}
            </motion.span>
          </p>
        </div>
        <motion.div
          className="projects__project__image"
          initial={{ opacity: 0, transform: "translateX(50%)" }}
          whileInView={{ opacity: 1, transform: "translateX(0)" }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        >
          <img src={MMC} alt="project" />
        </motion.div>
      </div>

      <div className="projects__project">
        <div className="projects__project__content">
          <motion.h2
            className="secondary-heading"
            initial={{ opacity: 0, transform: "translateX(-50%)" }}
            whileInView={{ opacity: 1, transform: "translateX(0)" }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          >
            GOVT. AUDITORIUM PROJECT TUDA DESIGN{" "}
          </motion.h2>
          <p>
            This distinctive space that can seat 1,010 is the best of both
            worlds. It effortlessly combines the intimate ambience of a small
            -scale venue with the splendour of a full scale arena. A brilliant
            acoustics and a foyer just some of the things that make the TUDA
            Auditorium the venue of choice for the both , perfomers and
            audiences Designed by D2D Architects Firm and MEP Designed services
            done by Genix Design Consultants Firm.
            <motion.span
              className="director"
              initial={{ opacity: 0, transform: "translateX(-50%)" }}
              whileInView={{ opacity: 1, transform: "translateX(0)" }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            >
              RAJU, CE{" "}
            </motion.span>
          </p>
        </div>
        <motion.div
          className="projects__project__image"
          initial={{ opacity: 0, transform: "translateX(50%)" }}
          whileInView={{ opacity: 1, transform: "translateX(0)" }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        >
          <img src={Tuda} alt="project" />
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
