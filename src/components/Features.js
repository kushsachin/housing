import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

function Features() {
  const items = [
    {
      desc: "10,000 + verified properties listed",
    },
    {
      desc: "Over 5100 satisfied customers",
    },
    {
      desc: "Properties available for buying and rent",
    },
    {
      desc: "All registered and verified properties",
    },
  ];
  return (
    <div className="feature_container mb-[100px]">
      <div className="feature mx-auto max-w-[1800px] px-[20px]">
        <div className="feature_title ">
          <p className="text-start font-light mb-2">
            Get verified and trusted properties
          </p>
          <h1 className="text-[44px] font-semibold text-start">
            Why Consider Us?{" "}
          </h1>
        </div>
        <div className="features_content flex justify-between items-center">
          <div>
            {items.map((data) => {
              return (
                <div className="mb-5">
                  <p className="flex gap-2 text-2xl font-normal">
                    <CheckCircleIcon className="text-[#499A46]" />
                    {data.desc}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="relative w-[750px] h-[500px]  rounded-3xl">
            <div className="absolute top-[35px] left-0 w-[725px] h-[475px] bg-[#496148] rounded-3xl">
            </div>
            <div className="absolute top-0 left-[40px] w-[725px] h-[475px]">
              <img src="/assets/images/react_img.png" className="w-[100%] h-[100%] rounded-3xl" alt="bg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
