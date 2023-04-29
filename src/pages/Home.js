import React from "react";
import { motion } from "framer-motion";

import { BsCheck2 } from "react-icons/bs";
import { BsBuildings } from "react-icons/bs";
import { HiOutlineBuildingLibrary } from "react-icons/hi2";
import { FaHotel } from "react-icons/fa";
import { IoSchoolSharp } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { GiHealthNormal } from "react-icons/gi";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaEnvelope } from "react-icons/fa";
import { BsGlobe2 } from "react-icons/bs";
import { IoLocation } from "react-icons/io5";

import HeroSection from "../components/heroSection/HeroSection";
import SmartHome from "../components/smartHome/SmartHome";
import Design from "../components/design/Design";
import Overview from "../assets/overview.png";
import OfferImage from "../assets/offer.png";
import OfferCard1 from "../assets/offer-card-1.png";
import OfferCard2 from "../assets/offer-card-2.png";
import OfferCard3 from "../assets/offer-card-3.png";
import Logos from "../assets/clients.png";
import LocationImage from "../assets/location.png";

const HomePage = () => {
  const styles = { height: "5rem", width: "5rem", marginLeft: "2rem" };
  const styles2 = { height: "3rem", width: "3rem" };

  return (
    <>
      <HeroSection />
      <SmartHome />
      <section className="container px-12 mb-48">
        <h2 className="secondary-heading text-center mb-16 med:text-[4.6rem] text-[3.6rem] ">
          H&h power is simply awesome in mep work
        </h2>
        <p className="mb-32">
          H&h engineering provides quality and comprehensive consulting and
          design services for commercial and residential building mechanical,
          electrical and plumbing systems at affordable rates. whether you’re an
          architect designing a new building, or you’re a municipality looking
          to update your current facilities, h&h’s team of experienced designers
          will maximize your project cost, providing you with efficient,
          attractive systems.
        </p>

        <motion.h3
          className="tertiary-heading text-left med:text-[4.6rem] text-[3.6rem]"
          initial={{ transform: "translateX(-100%)", opacity: 0 }}
          whileInView={{ transform: "translateX(0)", opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        >
          OVERVIEW
        </motion.h3>
        <p className="mb-8">
          We are a client-oriented contracting company and following completion
          of the project. through our operations, we provide integrated design &
          build mep services, smooth functionality and efficiency from start to
          finish. from mechanical, electrical and plumbing (mep), gisco
          continues to be at the helm, driving the market forward through our
          people, passion and innovation.
        </p>
        <p className="mb-16">
          our management team is quick to adjust to the development of new
          technologies, while our software management and personnel training
          procedures ensure both our operations and engineering operatives have
          the necessary tools to cope with the demands of a modern day building.
          we undertake a full range of mechanical, electrical and plumbing
          installations inclusive of design. the company specializes in
          providing solutions which comply with the client's specific needs.{" "}
        </p>

        <div className="flex med:flex-row flex-col">
          <div className="flex-50 flex med:justify-center justify-start items-center">
            <ul className="list-none flex flex-col gap-8 justify-center">
              <li className="flex items-center gap-6">
                <BsCheck2 className="text-black" />
                Work closely with end users
              </li>
              <li className="flex items-center gap-6">
                <BsCheck2 className="text-black" />
                360 degree mep services{" "}
              </li>
              <li className="flex items-center gap-6">
                <BsCheck2 className="text-black" />
                Highly qualified mep  professionals
              </li>
              <li className="flex items-center gap-6">
                <BsCheck2 className="text-black" />
                effective project management{" "}
              </li>
            </ul>
          </div>
          <div className="flex-50">
            <img
              src={Overview}
              alt="overview"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="container mb-48 px-12">
        <motion.h2
          className="secondary-heading mb-16 med:text-[4.6rem] text-[3rem]"
          initial={{ transform: "translateX(-100%)", opacity: 0 }}
          whileInView={{ transform: "translateX(0)", opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        >
          Industries we serve{" "}
        </motion.h2>

        <div className="grid grid-cols-af gap-x-8 gap-y-24 justify-center">
          <div>
            <BsBuildings style={styles} />
            <div className="border border-black-600 border-solid p-8">
              <p className="font-bold mb-6">High Rise Towers</p>
              <ul className="ml-16">
                <li>Residential Towers</li>
                <li>Office Towers</li>
                <li>Mixed Use Development</li>
              </ul>
            </div>
          </div>

          <div>
            <HiOutlineBuildingLibrary style={styles} />
            <div className="border border-black-600 border-solid p-8">
              <p className="font-bold mb-6">Hospitality</p>
              <ul className="ml-16">
                <li>Hotels</li>
                <li>Clubs & Lounges</li>
                <li>Restaurants</li>
              </ul>
            </div>
          </div>

          <div>
            <FaHotel style={styles} />
            <div className="border border-black-600 border-solid p-8">
              <p className="font-bold mb-6">Villas</p>
              <ul className="ml-16">
                <li>Farm House</li>
                <li>Farm House Villas</li>
                <li>Rustic Farmhouses</li>
              </ul>
            </div>
          </div>

          <div>
            <IoSchoolSharp style={styles} />
            <div className="border border-black-600 border-solid p-8">
              <p className="font-bold mb-6">Education</p>
              <ul className="ml-16">
                <li>Schools</li>
                <li>Universities</li>
                <li>Multi-purpose Halls</li>
              </ul>
            </div>
          </div>

          <div>
            <FaShoppingCart style={styles} />
            <div className="border border-black-600 border-solid p-8">
              <p className="font-bold mb-6">Villas</p>
              <ul className="ml-16">
                <li>Shopping Malls</li>
                <li>Hypermarkets</li>
                <li>Banks</li>
              </ul>
            </div>
          </div>

          <div>
            <GiHealthNormal style={styles} />
            <div className="border border-black-600 border-solid p-8">
              <p className="font-bold mb-6">Villas</p>
              <ul className="ml-16">
                <li>Hospitals</li>
                <li>Medical Centres</li>
                <li>Pharmaceutical</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <motion.section
        className="container px-12 h-min relative"
        initial={{ transform: "translateY(20%)", opacity: 0 }}
        whileInView={{ transform: "translateY(0)", opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "0px 0px 0px 0px" }}
      >
        <img
          src={OfferImage}
          alt="offer"
          className="w-full h-[360px] object-cover"
        />

        <h2 className="secondary-heading text-white absolute top-[40px] left-1/2 offer__heading med:text-[4.6rem] text-[3rem]">
          What we offer
        </h2>

        <div className="mx-8 offer-cards-container flex items-start gap-8 flex-wrap justify-center">
          <div className="bg-white w-[330px] p-8 shadow-2xl">
            <div>
              <img
                src={OfferCard1}
                alt="offer-card-1"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-[14px] leading-[1.5] border-solid border-black border-[1px] p-4">
              We offer professionals with comprehensive experience specialized
              in MEP installation, operations and maintenance. H&H power renders
              MEP focused services to various sectors like education, Health
              Care, Banks, Sports Club, Real estate, Shopping Malls etc., by
              efficiently maintaining their facilities. We have technical
              experts who are most experienced in similar industries. Our aim is
              to provide high standards of quality engineering services as the
              best MEP contractors. electrical, Low Current, Drainage, Water
              supply, Fire Alarm, Fire Fighting, LPG, HVAC for residential and
              industrial buildings.
            </p>
          </div>
          <div className="bg-white w-[335px] p-8 shadow-2xl">
            <div>
              <img
                src={OfferCard2}
                alt="offer-card-2"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-[14px] leading-[1.5] border-solid border-black border-[1px] p-4">
              We offer smart solutions which bring efficiency, security,
              accessibility and affordability. In combination with those
              benefits, we bring comfort, convenience and luxury to every home,
              corporate office or hospitality, be it a new or pre-constructed
              building.
            </p>
          </div>
          <div className="bg-white w-[335px] p-8 shadow-2xl">
            <div>
              <img
                src={OfferCard3}
                alt="offer-card-3"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-[14px] leading-[1.5] border-solid border-black border-[1px] p-4">
              We offer documentations of project which inlcudes Permission of
              electrical system, fire and safety, plumbing PHE etc.
            </p>
          </div>
        </div>
      </motion.section>

      <Design />

      <section className="container mb-48 shadow-2xl">
        <img
          src={Logos}
          alt="logos"
          className="w-full height-full object-cover"
        />
      </section>

      <section className="container mb-48">
        <div className="mx-12  border-solid border-[1px] p-12">
          <h2 className="secondary-heading text-center mb-16 med:text-[4.6rem] text-[3rem]">
            Contact Us
          </h2>
          <div className="flex gap-16 items-center med:flex-row flex-col">
            <div className="flex-50 flex flex-col gap-8 items-start">
              <p className="flex items-start gap-8">
                <BsFillTelephoneFill style={styles2} />
                <span>Telephone: +91-9700225721</span>
              </p>
              <p className="flex items-start gap-8">
                <FaEnvelope style={styles2} />
                <span>Email: hhpower19@gmail.com</span>
              </p>
              <p className="flex items-start gap-8">
                <BsGlobe2 style={styles2} />
                <span>Website: hnhpower.in</span>
              </p>
              <p className="flex items-start gap-8">
                <IoLocation style={styles2} />
                <span>
                  Address: 201-Appartment, beside St. Paul School,
                  <br /> Hyderguda, Hyderabad, Telangana, India.
                </span>
              </p>
            </div>
            <div className="flex-50">
              <img
                src={LocationImage}
                alt="location"
                className="w-full height-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
