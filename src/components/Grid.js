import { Button } from "@mui/material";
import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const GridElement = ({ imageUrl, description }) => {
  return (
    <div className="bg-[#F5F5F5] rounded-2xl p-4 m-2 text-start shadow-md">
      <div className="w-[100px] h-[100px] mb-5">
        <img
          src={imageUrl}
          alt=".."
          className="w-full h-auto rounded-full mb-2 "
        />
      </div>
      <p className="text-start text-2xl font-semibold	mb-6 text-[#2A82C2]">
        {description}
      </p>
      <p className="mb-6">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries,{" "}
      </p>
      <Button
        variant="outlined"
        color="primary"
        className="flex items-center gap-2"
      >
        <span className="font-semibold">Learn More</span>
        <ArrowForwardIcon fontSize="small" />
      </Button>
    </div>
  );
};

const Grid = () => {
  const elements = [
    {
      imageUrl: "/assets/images/srvc1.png",
      description: "Complimentary Tenant Search in India",
    },
    {
      imageUrl: "/assets/images/477f8ace-3fd7-4c66-927a-d2dab9519430.jpeg",
      description: "Regular Home Inspections",
    },
    {
      imageUrl: "/assets/images/download.png",
      description: "Prompt Rent Collection",
    },
    {
      imageUrl:
        "/assets/images/stock-vector-agreement-icon-vector-image-can-also-be-used-for-real-estate-suitable-for-mobile-apps-we.jpg",
      description: "Complimentary Rental Agreement",
    },
    {
      imageUrl: "/assets/images/Background+Check.png",
      description: "Tenant Background Check",
    },
    {
      imageUrl:
        "/assets/images/360_F_648793438_sQOTHD4QwQxCXM44fqlHf2O4auwOezje.jpg",
      description: "Dedicated Relationship Manager",
    },
    {
      imageUrl: "/assets/images/rupee.png",
      description: "Rental Income Assurance",
    },
  ];

  return (
    <div>
      <div>
        <h1 className="text-[44px] font-semibold text-center mt-[50px] mb-[50px]">
          Go through our services
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mx-auto px-[20px] max-w-[1800px]">
        {elements.map((element, index) => (
          <GridElement
            key={index}
            imageUrl={element.imageUrl}
            description={element.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Grid;
