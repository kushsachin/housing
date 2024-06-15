import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const handleDragStart = (e) => e.preventDefault();

const items = [
  <div className="w-full flex items-center justify-center bg-[#F2F2F2] rounded-3xl px-[24px]">
    <div className="flex justify-between gap-[200px]">
      <img
        src="/assets/images/pexels-pixabay-262391.jpg"
        onDragStart={handleDragStart}
        role="presentation"
        alt=".."
        className="rounded-3xl h-[350px] my-[24px]"
      />
      <div className="bg-[#496148] p-[24px]">
        <h2 className="text-4xl text-white font-semi-bold mb-5">
          Daniel Espinoza
        </h2>
        <p className="text-xl  text-white text-light mb-2">Great service</p>
        <p className="text-white text-light mb-4">
          "From the first inquiry to the final walkthrough, my experience with
          [Housing Website] has been exceptional. The team's dedication to
          finding the perfect home for me was evident at every step. They
          listened attentively to my needs and preferences, ensuring that each
          viewing was tailored to my specifications. Their expertise in the
          local housing market was invaluable, guiding me through the process
          with professionalism and ease. Thanks to their tireless efforts, I am
          now happily settled in my dream home. I highly recommend [Housing
          Website] to anyone in search of a seamless and personalized real
          estate experience."
        </p>
        <p className="text-xl text-white text-light mb-2">
          Marketing Sales Head
        </p>
      </div>
    </div>
  </div>,
  <div className="w-full flex items-center justify-center bg-[#F2F2F2] rounded-3xl px-[24px]">
    <div className="flex justify-between gap-[200px]">
      <img
        src="/assets/images/pexels-pixabay-262391.jpg"
        onDragStart={handleDragStart}
        role="presentation"
        alt=".."
        className="rounded-3xl h-[350px] my-[24px]"
      />
      <div className="bg-[#496148] p-[24px]">
        <h2 className="text-4xl text-white font-semi-bold mb-5">
          Daniel Espinoza
        </h2>
        <p className="text-xl  text-white text-light mb-2">Great service</p>
        <p className="text-white text-light mb-4">
          "From the first inquiry to the final walkthrough, my experience with
          [Housing Website] has been exceptional. The team's dedication to
          finding the perfect home for me was evident at every step. They
          listened attentively to my needs and preferences, ensuring that each
          viewing was tailored to my specifications. Their expertise in the
          local housing market was invaluable, guiding me through the process
          with professionalism and ease. Thanks to their tireless efforts, I am
          now happily settled in my dream home. I highly recommend [Housing
          Website] to anyone in search of a seamless and personalized real
          estate experience."
        </p>
        <p className="text-xl text-white text-light mb-2">
          Marketing Sales Head
        </p>
      </div>
    </div>
  </div>,
  <div className="w-full flex items-center justify-center bg-[#F2F2F2] rounded-3xl px-[24px]">
    <div className="flex justify-between gap-[200px]">
      <img
        src="/assets/images/pexels-pixabay-262391.jpg"
        onDragStart={handleDragStart}
        role="presentation"
        alt=".."
        className="rounded-3xl h-[350px] my-[24px]"
      />
      <div className="bg-[#496148] p-[24px]">
        <h2 className="text-4xl text-white font-semi-bold mb-5">
          Daniel Espinoza
        </h2>
        <p className="text-xl  text-white text-light mb-2">Great service</p>
        <p className="text-white text-light mb-4">
          "From the first inquiry to the final walkthrough, my experience with
          [Housing Website] has been exceptional. The team's dedication to
          finding the perfect home for me was evident at every step. They
          listened attentively to my needs and preferences, ensuring that each
          viewing was tailored to my specifications. Their expertise in the
          local housing market was invaluable, guiding me through the process
          with professionalism and ease. Thanks to their tireless efforts, I am
          now happily settled in my dream home. I highly recommend [Housing
          Website] to anyone in search of a seamless and personalized real
          estate experience."
        </p>
        <p className="text-xl text-white text-light mb-2">
          Marketing Sales Head
        </p>
      </div>
    </div>
  </div>,
  <div className="w-full flex items-center justify-center bg-[#F2F2F2] rounded-3xl px-[24px]">
    <div className="flex justify-between gap-[200px]">
      <img
        src="/assets/images/pexels-pixabay-262391.jpg"
        onDragStart={handleDragStart}
        role="presentation"
        alt=".."
        className="rounded-3xl h-[350px] my-[24px]"
      />
      <div className="bg-[#496148] p-[24px]">
        <h2 className="text-4xl text-white font-semi-bold mb-5">
          Daniel Espinoza
        </h2>
        <p className="text-xl  text-white text-light mb-2">Great service</p>
        <p className="text-white text-light mb-4">
          "From the first inquiry to the final walkthrough, my experience with
          [Housing Website] has been exceptional. The team's dedication to
          finding the perfect home for me was evident at every step. They
          listened attentively to my needs and preferences, ensuring that each
          viewing was tailored to my specifications. Their expertise in the
          local housing market was invaluable, guiding me through the process
          with professionalism and ease. Thanks to their tireless efforts, I am
          now happily settled in my dream home. I highly recommend [Housing
          Website] to anyone in search of a seamless and personalized real
          estate experience."
        </p>
        <p className="text-xl text-white text-light mb-2">
          Marketing Sales Head
        </p>
      </div>
    </div>
  </div>,
  <div className="w-full flex items-center justify-center bg-[#F2F2F2] rounded-3xl px-[24px]">
    <div className="flex justify-between gap-[200px]">
      <img
        src="/assets/images/pexels-pixabay-262391.jpg"
        onDragStart={handleDragStart}
        role="presentation"
        alt=".."
        className="rounded-3xl h-[350px] my-[24px]"
      />
      <div className="bg-[#496148] p-[24px]">
        <h2 className="text-4xl text-white font-semi-bold mb-5">
          Daniel Espinoza
        </h2>
        <p className="text-xl  text-white text-light mb-2">Great service</p>
        <p className="text-white text-light mb-4">
          "From the first inquiry to the final walkthrough, my experience with
          [Housing Website] has been exceptional. The team's dedication to
          finding the perfect home for me was evident at every step. They
          listened attentively to my needs and preferences, ensuring that each
          viewing was tailored to my specifications. Their expertise in the
          local housing market was invaluable, guiding me through the process
          with professionalism and ease. Thanks to their tireless efforts, I am
          now happily settled in my dream home. I highly recommend [Housing
          Website] to anyone in search of a seamless and personalized real
          estate experience."
        </p>
        <p className="text-xl text-white text-light mb-2">
          Marketing Sales Head
        </p>
      </div>
    </div>
  </div>,
  <div className="w-full flex items-center justify-center bg-[#F2F2F2] rounded-3xl px-[24px]">
    <div className="flex justify-between gap-[200px]">
      <img
        src="/assets/images/pexels-pixabay-262391.jpg"
        onDragStart={handleDragStart}
        role="presentation"
        alt=".."
        className="rounded-3xl h-[350px] my-[24px]"
      />
      <div className="bg-[#496148] p-[24px]">
        <h2 className="text-4xl text-white font-semi-bold mb-5">
          Daniel Espinoza
        </h2>
        <p className="text-xl  text-white text-light mb-2">Great service</p>
        <p className="text-white text-light mb-4">
          "From the first inquiry to the final walkthrough, my experience with
          [Housing Website] has been exceptional. The team's dedication to
          finding the perfect home for me was evident at every step. They
          listened attentively to my needs and preferences, ensuring that each
          viewing was tailored to my specifications. Their expertise in the
          local housing market was invaluable, guiding me through the process
          with professionalism and ease. Thanks to their tireless efforts, I am
          now happily settled in my dream home. I highly recommend [Housing
          Website] to anyone in search of a seamless and personalized real
          estate experience."
        </p>
        <p className="text-xl text-white text-light mb-2">
          Marketing Sales Head
        </p>
      </div>
    </div>
  </div>,
  <div className="w-full flex items-center justify-center bg-[#F2F2F2] rounded-3xl px-[24px]">
    <div className="flex justify-between gap-[200px]">
      <img
        src="/assets/images/pexels-pixabay-262391.jpg"
        onDragStart={handleDragStart}
        role="presentation"
        alt=".."
        className="rounded-3xl h-[350px] my-[24px]"
      />
      <div className="bg-[#496148] p-[24px]">
        <h2 className="text-4xl text-white font-semi-bold mb-5">
          Daniel Espinoza
        </h2>
        <p className="text-xl  text-white text-light mb-2">Great service</p>
        <p className="text-white text-light mb-4">
          "From the first inquiry to the final walkthrough, my experience with
          [Housing Website] has been exceptional. The team's dedication to
          finding the perfect home for me was evident at every step. They
          listened attentively to my needs and preferences, ensuring that each
          viewing was tailored to my specifications. Their expertise in the
          local housing market was invaluable, guiding me through the process
          with professionalism and ease. Thanks to their tireless efforts, I am
          now happily settled in my dream home. I highly recommend [Housing
          Website] to anyone in search of a seamless and personalized real
          estate experience."
        </p>
        <p className="text-xl text-white text-light mb-2">
          Marketing Sales Head
        </p>
      </div>
    </div>
  </div>,
  <div className="w-full flex items-center justify-center bg-[#F2F2F2] rounded-3xl px-[24px]">
    <div className="flex justify-between gap-[200px]">
      <img
        src="/assets/images/pexels-pixabay-262391.jpg"
        onDragStart={handleDragStart}
        role="presentation"
        alt=".."
        className="rounded-3xl h-[350px] my-[24px]"
      />
      <div className="bg-[#496148] p-[24px]">
        <h2 className="text-4xl text-white font-semi-bold mb-5">
          Daniel Espinoza
        </h2>
        <p className="text-xl  text-white text-light mb-2">Great service</p>
        <p className="text-white text-light mb-4">
          "From the first inquiry to the final walkthrough, my experience with
          [Housing Website] has been exceptional. The team's dedication to
          finding the perfect home for me was evident at every step. They
          listened attentively to my needs and preferences, ensuring that each
          viewing was tailored to my specifications. Their expertise in the
          local housing market was invaluable, guiding me through the process
          with professionalism and ease. Thanks to their tireless efforts, I am
          now happily settled in my dream home. I highly recommend [Housing
          Website] to anyone in search of a seamless and personalized real
          estate experience."
        </p>
        <p className="text-xl text-white text-light mb-2">
          Marketing Sales Head
        </p>
      </div>
    </div>
  </div>,
];

function Reviews() {
  return (
    <div className="mx-auto max-w-[1800px] px-[20px] mb-[80px]">
      <div className="feature_title mb-[40px]">
        <p className="text-center font-light mb-2">What you will get</p>
        <h1 className="text-[44px] font-semibold text-center">
          Hear from our clients{" "}
        </h1>
      </div>
      <div className="w-full ">
        <AliceCarousel mouseTracking items={items} />
      </div>
    </div>
  );
}

export default Reviews;
