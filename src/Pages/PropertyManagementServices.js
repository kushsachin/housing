import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import RecentProjects from "../components/RecentProjects";
import Features from "../components/Features";
import Reviews from "../components/Reviews";
import PmsDesc from "../components/PmsDesc";

function PropertyManagementServices() {
  return (
    <div>
      <Header />
      <PmsDesc />
      <RecentProjects />
      <Features />
      <Reviews />
      <Footer />
    </div>
  );
}

export default PropertyManagementServices;
