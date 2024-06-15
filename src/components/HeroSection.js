import React from "react";

function HeroSection() {
  return (
    <div className="hero_container mb-[50px]">
      <div className="hero mx-auto px-[20px] max-w-[1800px] h-[490px]">
        <div className="flex flex-col justify-center h-full">
          <h1 className="text-white text-[50px] font-bold">
            Explore Top Properties near you
          </h1>
          <h1 className="text-white text-[50px] font-bold">
            at the comfort of your couch.
          </h1>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
