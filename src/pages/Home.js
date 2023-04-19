import React from "react";

import HeroSection from "../components/heroSection/HeroSection";
import SmartHome from "../components/smartHome/SmartHome";
import Design from "../components/design/Design";
import Mep from "../components/mep/mep";
import MepServices from "../components/MepServices/MepServices";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <Mep />
      <SmartHome />
      <MepServices />
      <Design />
    </>
  );
};

export default HomePage;
