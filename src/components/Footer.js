import React from "react";
import { Facebook, Twitter, Instagram } from "@mui/icons-material";

const Footer = () => {
  return (
    <footer className="bg-[#A8B27E] text-back py-8">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-4">
        <div className="flex items-center justify-center lg:justify-start">
          <img
            src="/assets/images/frame_1.png"
            alt="Logo"
            style={{ height: "50px", marginRight: "20px" }}
          />
        </div>
        <div className="flex flex-wrap justify-center lg:justify-end mt-4 lg:mt-0">
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a href="#" className="mx-3 my-2 lg:mx-2 lg:my-0">
            Home
          </a>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a href="#" className="mx-3 my-2 lg:mx-2 lg:my-0">
            About Us
          </a>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a href="#" className="mx-3 my-2 lg:mx-2 lg:my-0">
            Services
          </a>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a href="#" className="mx-3 my-2 lg:mx-2 lg:my-0">
            Contact
          </a>
        </div>
        <div className="flex mt-4 lg:mt-0">
          <Facebook className="text-back mr-3" />
          <Twitter className="text-back mr-3" />
          <Instagram className="text-back" />
        </div>
      </div>
      <div className="mt-4 text-center">
        <p>123 Street, City, Country</p>
        <p>Email: info@example.com</p>
        <p>Phone: +123 456 7890</p>
      </div>
    </footer>
  );
};

export default Footer;
