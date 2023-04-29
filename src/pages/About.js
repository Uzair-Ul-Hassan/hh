import React from "react";
import { motion } from "framer-motion";

import VisionImage from "../assets/vision.png";
import MissionImage from "../assets/mission.png";

const AboutPage = () => {
  return (
    <>
      <section className="container mb-48 px-12">
        <motion.h1
          className="primary-heading text-center my-12 med:text-[4.6rem] text-[3.6rem]"
          initial={{ transform: "translateX(-100%)", opacity: 0 }}
          whileInView={{ transform: "translateX(0)", opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        >
          About Us
        </motion.h1>
        <p>
          H&H power is an organization which deal with mep work i.e hvac,
          electrical, cctv, fire fighting system, biometric, access control and
          public address ststem and phe. at h&h power, we are more than just
          contractor. while we have the experience and knowledge to deliver the
          projects to variety of clients, merely meeting your funtional needs is
          not enough to fulfill our mission instead we pride ourselves on
          developinglong-lasting meaningful relationships that help companies
          manage the real estate portfolios. ultimately, when you succeed we
          succeed. apart from a team of dexterous professionals and employees,
          we also have other robust facilities in our organization.{" "}
        </p>
      </section>

      <section className="container mb-60 px-12 flex gap-16 med:flex-row flex-col">
        <div className="flex-50 med:-order-1 order-2">
          <motion.h3
            className="teritiary-heading mb-12 text-center"
            initial={{ transform: "translateX(-100%)", opacity: 0 }}
            whileInView={{ transform: "translateX(0)", opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          >
            Vision
          </motion.h3>
          <p className="mb-8">
            To be the world's most definitive provider of innovative and
            reliable motion systems. Core values H&H Power relies itself on a
            set of shared core values and commitments that together form the
            foundation to everything we do. The first initial of each of these
            values together spell the word "marble" which is the acronym Johnson
            Electric Employees use internally when referring to our values
            statement. Make customers successful delivering what our customers
            need, when they need it, is the primary goal of Johnson Electric. We
            are commited to make our customers successful in their business, as
            the basis for long term success in our business.
          </p>
          <p>
            Expectations but also to exceed them through continuous cycles of
            learning.
          </p>
        </div>

        <motion.div
          className="flex-50"
          initial={{ transform: "translateX(100%)", opacity: 0 }}
          whileInView={{ transform: "translateX(0)", opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        >
          <img
            src={VisionImage}
            alt="vision"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </section>

      <section className="container mb-48 px-12 flex gap-16 med:flex-row flex-col">
        <motion.div
          className="flex-50"
          initial={{ transform: "translateX(-100%)", opacity: 0 }}
          whileInView={{ transform: "translateX(0)", opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        >
          <img
            src={MissionImage}
            alt="mission"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <div className="flex-50">
          <motion.h3
            className="teritiary-heading mb-12 text-center"
            initial={{ transform: "translateX(100%)", opacity: 0 }}
            whileInView={{ transform: "translateX(0)", opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          >
            Mission
          </motion.h3>
          <p className="mb-8">
            In a perfect world things would not break down. Until then, it is
            our mission to respond with urgency, expertise and professionalism
            to minimise the length and frequency of downtime. We're commited to
            a high quality of workmanship and provide a safework environment on
            all projects. We know that people do business with companies that
            meet their needs and provide reliable service. We attribute our
            success to building strategic partnerships and treating customers
            the way we want to be treated. We believe the quality in our work
            will represent us for years to come. Right now, that's new.
          </p>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
