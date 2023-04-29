import React from "react";
import { motion } from "framer-motion";

import Compatibility from "../assets/smart-home.png";
import SmartHome1 from "../assets/smart-homes-1.png";
import SmartHome2 from "../assets/smart-homes-2.png";
import SmartLiving1 from "../assets/smartliving-1.png";
import SmartLiving2 from "../assets/smartliving-2.png";
import SmartHospitality1 from "../assets/smart-hos-1.png";
import SmartHospitality2 from "../assets/smart-hos-2.png";
import SmartOffice1 from "../assets/smart-office-1.png";
import SmartOffice2 from "../assets/smart-office-2.png";
import Video from "../assets/smarthomeVideo.mp4";

const Smart = () => {
  return (
    <>
      <section className="container mb-48 px-12">
        <motion.h1
          className="primary-heading text-center mt-20 mb-28 med:text-[4.6rem] text-[3.6rem]"
          initial={{ transform: "translateX(-100%)", opacity: 0 }}
          whileInView={{ transform: "translateX(0)", opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        >
          Smart Home Automation
        </motion.h1>

        <div className="flex gap-16  med:flex-row flex-col">
          <div className="flex-50">
            <motion.h3
              className="tertiary-heading text-left text-[24px]"
              initial={{ transform: "translateX(-100%)", opacity: 0 }}
              whileInView={{ transform: "translateX(0)", opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            >
              Smart Home
            </motion.h3>
            <p>
              H&H aims to ﬁll the void of smart automation in their customer
              lives. We offer smart retroﬁt solutions which bring efﬁciency,
              security, accessibility and affordability. In combination with
              those beneﬁts, we bring comfort, convenience and luxury to every
              home, corporate ofﬁce or hospitality, be it a new or
              pre-constructed building.{" "}
            </p>
          </div>
          <div className="flex-50">
            <img
              src={Compatibility}
              alt="compatability"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="container mb-60 px-12">
        <motion.h2
          className="secondary-heading text-center mb-24 med:text-[4.6rem] text-[3.6rem]"
          initial={{ transform: "translateX(-100%)", opacity: 0 }}
          whileInView={{ transform: "translateX(0)", opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        >
          Smart Homes
        </motion.h2>
        <div className="flex gap-16 med:h-[60rem] h-min med:flex-row flex-col">
          <div className="flex-50">
            <img
              src={SmartHome1}
              alt="smart-home"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex-50">
            <img
              src={SmartHome2}
              alt="smart-home"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </section>

      <section className="container mb-60 px-12">
        <motion.h2
          className="secondary-heading text-center mb-24 med:text-[4.6rem] text-[3.6rem]"
          initial={{ transform: "translateX(-100%)", opacity: 0 }}
          whileInView={{ transform: "translateX(0)", opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        >
          Smart Living
        </motion.h2>
        <div className="flex gap-16 med:h-[60rem] h-min med:flex-row flex-col">
          <div className="flex-50">
            <img
              src={SmartLiving1}
              alt="smart-home"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex-50">
            <img
              src={SmartLiving2}
              alt="smart-home"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </section>

      <section className="container mb-60 px-12">
        <motion.h2
          className="secondary-heading text-center mb-24 med:text-[4.6rem] text-[3.6rem]"
          initial={{ transform: "translateX(-100%)", opacity: 0 }}
          whileInView={{ transform: "translateX(0)", opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        >
          Smart Hospitality
        </motion.h2>
        <div className="flex gap-16 med:h-[60rem] h-min med:flex-row flex-col">
          <div className="flex-50">
            <img
              src={SmartHospitality1}
              alt="smart-home"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex-50">
            <img
              src={SmartHospitality2}
              alt="smart-home"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </section>

      <section className="container mb-60 px-12">
        <motion.h2
          className="secondary-heading text-center mb-24 med:text-[4.6rem] text-[3.6rem]"
          initial={{ transform: "translateX(-100%)", opacity: 0 }}
          whileInView={{ transform: "translateX(0)", opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        >
          Smart Office
        </motion.h2>
        <div className="flex gap-16 med:h-[60rem] h-min med:flex-row flex-col">
          <div className="flex-50">
            <img
              src={SmartOffice1}
              alt="smart-home"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex-50">
            <img
              src={SmartOffice2}
              alt="smart-home"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </section>

      <section className="container mb-48 px-12">
        <video autoPlay muted loop className="w-full h-full object-cover">
          <source src={Video} type="video/mp4"></source>
        </video>
      </section>
    </>
  );
};

export default Smart;
