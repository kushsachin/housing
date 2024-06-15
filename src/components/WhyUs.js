import React from "react";

function WhyUs() {
  return (
    <div className="why_us_container mb-[40px]">
      <div className="why_us">
        <div className="why_us_title">
          <p className="text-center font-light mb-5">
            Get Started in three easy steps
          </p>
          <h1 className="text-[44px] font-semibold text-center">
            Property Search Made Easy
          </h1>
        </div>
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-center">
            <div className="max-w-sm rounded-3xl overflow-hidden shadow-none bg-gray-200">
              <div className="p-4">
                <img
                  src="/assets/images/vector.png"
                  alt="#"
                  className="mb-10"
                />
                <h2 className="text-4xl font-semi-bold mb-5">Register</h2>
                <p className="text-xl text-light mb-2">Register yourself</p>
                <p className="text-xl text-light">and become a user</p>
              </div>
            </div>
            <div className="max-w-sm rounded-3xl overflow-hidden shadow-none bg-gray-200">
              <div className="p-4">
                <img
                  src="/assets/images/vector_1.png"
                  alt="#"
                  className="mb-10"
                />
                <h2 className="text-4xl font-semi-bold mb-5">Register</h2>
                <p className="text-xl text-light mb-2">Register yourself</p>
                <p className="text-xl text-light">and become a user</p>
              </div>
            </div>
            <div className="max-w-sm rounded-3xl overflow-hidden shadow-none bg-gray-200">
              <div className="p-4">
                <img src="/assets/images/group.png" alt="#" className="mb-10" />
                <h2 className="text-4xl font-semi-bold mb-5">Register</h2>
                <p className="text-xl text-light mb-2">Register yourself</p>
                <p className="text-xl text-light">and become a user</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyUs;
