import React from "react";

import BannerModule from "../components/Banner";
import FaqModule from "../components/Faq";
import FooterModule from "../components/Footer";
import HeaderModule from "../components/Header";
import HeroModule from "../components/Hero";
import ServicesModule from "../components/Services";
import SideBar from "../components/Sidebar";
import TestiModule from "../components/Testi";
import WhyusModule from "../components/Whyus";

function LandingPage() {
  return (
    <div>
      <div id="header">
        <SideBar />
        <HeaderModule />
      </div>
      <HeroModule />

      <br />
      <div id="services">
        <ServicesModule />
      </div>
      <br />
      <br />
      <div id="about">
        <WhyusModule />
      </div>
      <br />
      <br />
      <br />
      <br />
      <div id="testi">
        <TestiModule />
      </div>
      <br />
      <br />
      <br />
      <br />
      <BannerModule />
      <br />
      <br />
      <br />
      <br />
      <div id="faq">
        <FaqModule />
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <FooterModule />
    </div>
  );
}

export default LandingPage;
