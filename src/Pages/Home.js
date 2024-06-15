import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import WhyUs from "../components/WhyUs";
import RecentProjects from "../components/RecentProjects";
import Features from "../components/Features";
import Reviews from "../components/Reviews";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <WhyUs />
      <RecentProjects />
      <Features />
      <Reviews />
      <Footer />
    </div>
  );
}

export default Home;
