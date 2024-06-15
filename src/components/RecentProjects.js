import { Button } from "@mui/material";
import React from "react";

function RecentProjects() {
  const items = [
    {
      name: "Sutherland House",
      rating: "4.5",
      price: "Rs. 40,000",
      description: "3 BHK house for rent in Gomti Nagar",
    },
    {
      name: "Sutherland House",
      rating: "4.5",
      price: "Rs. 40,000",
      description: "3 BHK house for rent in Gomti Nagar",
    },
    {
      name: "Sutherland House",
      rating: "4.5",
      price: "Rs. 40,000",
      description: "3 BHK house for rent in Gomti Nagar",
    },
  ];
  return (
    <div className="recent_projects_container mb-[30px]">
      <div className="mx-auto max-w-[1800px] px-[20px]">
        <div className="recent_projects flex flex-col-reverse w-100 min-h-[288px] ">
          <div className="recent_projects_title">
            <p className="text-end font-light mb-2">
              Get In touch by exploring{" "}
            </p>
            <h1 className="text-[44px] font-semibold text-end">
              Our Recent Projects{" "}
            </h1>
          </div>
        </div>
        <div className="recent_projects_content min-h-[500px] mt-[180px]">
          <div className="p-[40px] bg-[#F2F2F2] rounded-3xl flex gap-3">
            {items.map((item, index) => (
              <div
                key={index}
                className="carousel-item shadow-none bg-white rounded-3xl"
              >
                <div className="flex gap-5 align-items-center">
                  <img
                    src="/assets/images/hero_img.png"
                    alt="..."
                    className="w-[164px] h-[220px] rounded-xl"
                  />
                  <div className="flex flex-col justify-between">
                    <div>
                      <h2 className="text-2xl text-semibold">{item.name}</h2>
                      <h2 className="text-2xl text-semibold mb-5">
                        {item.price}
                      </h2>
                      <p className="w-[150px]">{item.description}</p>
                    </div>
                    <Button variant="outlined" color="primary">
                      View Property
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecentProjects;
