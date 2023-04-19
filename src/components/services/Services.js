import React from "react";

import MEP from "../../assets/MEP.png";
import "./services.scss";

const Services = () => {
  return (
    <section className="container MEP">
      <h2 className="secondary-heading MEP__heading">MEP Services</h2>
      <div className="MEP-content">
        <p className="MEP-content__text">
          <span className="MEP-content__text-1">
            As a MEP Contractor, H&H Power is comprised of professionals with
            comprehensive experience specialized in MEP installation, operations
            and maintenance. H&H Power renders MEP focused services to various
            sectors like Education, Health care, Banks, Sports club, Real
            estate, Shopping malls etc., by efficiently maintaining their
            facilities. We have technical experts who are most experienced in
            similar industries.
          </span>
          <span className="MEP-content__text-2">
            Our aim is to provide high standards of quality engineering services
            as the best MEP Contractors. Electrical, Low Current, Drainage,
            Water Supply, Fire Alarm, Fire Fighting, LPG, and HVAC for
            Residential & Industrial buildings.
          </span>
        </p>
        <div className="MEP-content__img">
          <img src={MEP} alt="MEP" />
        </div>
      </div>
      <div className="MEP__electrical">
        <h3 className="tertiary-heading">Electrical Services</h3>
        <p>
          We are one of the leading electrical services providers in south
          India, we believe in assisting our clients in designing, coordinating,
          and executing projects varying in size and scope. H&H Power takes
          pride in extending its in-house capabilities to the electrification
          system domain as an elite Class I Contractor.
        </p>
        <p>
          Our Electrical division is an independent business vertical
          functioning across South India, catering to the HT and LT requirements
          of our clients in the residential, commercial, hospitality and
          industrial segments. We at H&H Power have execution capabilities for
          solutions in HT, LT, DG, UPS/Inverter and ELV Systems to address
          requirements across industries. Our team of electrical engineers
          provides the best solution for less energy consumption and right light
          distribution to all areas. The team manages the end-to-end activities
          related to electrical includes DB dressing, load schedule preparations
          and the drawings for authority approvals.
        </p>
        <ul className="list">
          <li> H.V. & L.V. Transformers</li>
          <li>Switchgears</li>
          <li>Laying & Termination of H.V. Cables</li>
          <li>Testing of Transformer, Relays & Cables</li>
          <li>Digital Fault monitor & recorders etc.</li>
          <li>
            Small power and lighting works for Industrial and Commercial
            buildings
          </li>
          <li>
            Internal and External lighting Plant lighting, Emergency lighting,
            Energy management.
          </li>
        </ul>
      </div>
      <div className="MEP__low-voltage">
        <h3 className="tertiary-heading">
          Extra Low Voltage Engineering Services
        </h3>
        <ul className="list">
          <li>CCTV Systems </li>
          <li>Access Control Systems </li>
          <li>Intruder Alarm & Security Systems</li>
          <li>TV Distribution Systems</li>
          <li>Intercom Systems</li>
          <li>PA/Speakers/Music Installation Systems</li>
          <li>Car Park Management Systems</li>
          <li>Home Automation Systems</li>
          <li>IT Network & Telephony Systems</li>
          <li>Building Management Systems (BMS) </li>
        </ul>
      </div>
      <div className="MEP__hvac">
        <h3 className="tertiary-heading">HVAC</h3>
        <p>
          Our Air-Conditioning Team works for multiple applications viz. comfort
          cooling systems, process cooling, clean rooms, Labs, Data Centre’s,
          General & basement ventilation, exhaust, pressurization of staircase,
          etc.
        </p>
        <p>
          H&H Power Team, with its dedicated team experienced in Planning and
          Project Execution offers complete solution to every single client
          across the Nation. Our infrastructure along with Technical Capability,
          meet any challenges and thereby provide seamless services and
          sustainable solutions. We provide complete HVAC Solutions for various
          Industries: Residential, Commercial, Institutional, Medical, IT &
          Non-IT, Industrial projects, Health Sector, Corporates, Retail and
          Hospitality Industries.
        </p>
        <ul className="list">
           <li>HVAC – Heating, Ventilation & Air Conditioning </li>
          <li>
            Air Conditioning System like chillers, Fan Coil Unit, Handling Units
            & Package Units
          </li>
          <li>
            Ducted Split Units and Decorative Split Units for Residential &
            Commercial Buildings and Hospitals & Shopping Malls
          </li>
        </ul>
      </div>
      <div className="MEP__plumbing">
        <h3 className="tertiary-heading">Plumbing Works</h3>
        <p>
          Our experienced & skilled plumbing team provides the cost-effective
          solutions for water & drainage systems according to the govt.
          authority requirements, building requirements and the plumbing
          standards.
        </p>
        <ul className="list">
          <li>Drinking water supplies</li>
          <li>Rainwater system</li>
          <li>Drainage Sanitary Appliances</li>
          <li>Surface water Collection Systems</li>
          <li>Irrigation Systems</li>
        </ul>
      </div>
      <div className="MEP__firefighting">
        <h3 className="tertiary-heading">Fire Fighting & Plumbing (PHE) </h3>
        <p>
          The Fire Fighting team covers Fire hydrant and sprinkler systems, Wet
          & Dry Riser systems, Gas Suppression Systems, Fire extinguishers, Fire
          alarm and Voice Evacuation Systems.{" "}
        </p>
        <p>
          The very essential service in any type of building is the PHE. Our
          expert team handles projects with Internal and external pipe lines,
          drainage, water supply, RWH, RO and STP.{" "}
        </p>
        <p>
          The combination of Firefighting & PHE services enables us to provide
          the greatest advantage to all our customers as a single source and
          single point of contact for all their critical needs.{" "}
        </p>
        <p>
          We know where to plug in the system and thereby providing you the
          comfort working & Living Environment.
        </p>
        <ul className="list">
          <li>Fire alarm system</li>
          <li>Fire hose reel system</li>
          <li>Fire pump sets</li>
          <li>Fire extinguishers</li>
          <li>(DCP & CO2)</li>
          <li>Sprinkler system</li>
          <li>Dry/ wet riser valve system</li>
          <li>Emergency lighting system</li>
        </ul>
      </div>
    </section>
  );
};

export default Services;
