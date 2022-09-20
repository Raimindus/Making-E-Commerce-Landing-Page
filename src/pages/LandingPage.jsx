import React from 'react';
import FooterModule from '../components/Footer';
import HeaderModule from '../components/Header';
import HeroModule from '../components/Hero';
import ServicesModule from '../components/Services';
import WhyusModule from '../components/Whyus';
import BannerModule from '../components/Banner';
import TestiModule from '../components/Testi';
import FaqModule from '../components/Faq';
import SideBar from '../components/Sidebar';

const LandingPage = () => {
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
};

export default LandingPage;
