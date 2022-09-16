import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";

import React from "react";

import FooterModule from "../components/Footer";
import HeaderModule from "../components/Header";
import HeroModule from "../components/Hero";
import SearchModule from "../components/Search";
import SideBar from "../components/Sidebar";

function CariMobil() {
  return (
    <div>
      <SideBar />
      <div
        style={{
          backgroundColor: "#F1F3FF",
          position: "relative",
          zIndex: "-2",
        }}
      >
        <HeaderModule />
        <HeroModule />
      </div>
      <SearchModule />
      <br />
      <br />
      <br />
      <br />
      <FooterModule />
    </div>
  );
}

export default CariMobil;
