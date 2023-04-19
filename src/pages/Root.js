import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";

import MainNavigation from "../components/mainNavigation/MainNavigation";
import Footer from "../components/footer/Footer";

const RootLayout = () => {
  return (
    <Fragment>
      <MainNavigation />
      <Outlet />
      <Footer />
    </Fragment>
  );
};

export default RootLayout;
