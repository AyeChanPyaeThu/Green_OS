import React from "react";
import { FaFacebook } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa6";
import { TiSocialTwitter } from "react-icons/ti";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { GrSend } from "react-icons/gr";
import { HashLink } from "react-router-hash-link";

export default function Footer() {
  return (
    <div className="bottom-0 left-0 w-full text-white py-4 px-10">
      <HashLink smooth to="/about-us#contact">
        <div className="flex justify-center items-center space-x-4 text-lg mb-2">
          <FaFacebook className="cursor-pointer" />
          <FaTiktok className="cursor-pointer" />
          <TiSocialTwitter className="cursor-pointer" size={28} />
          <FaLocationDot className="cursor-pointer" />
          <FaPhoneAlt className="cursor-pointer" />
          <GrSend className="cursor-pointer" size={24} />
        </div>
      </HashLink>

      <footer className="text-center text-lg text-green-700 font-semibold">
        © 2026 GreenFarm Organic Shop
      </footer>
    </div>
  );
}
