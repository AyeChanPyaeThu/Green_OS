import React from "react";
import { FaFacebook } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa6";
import { TiSocialTwitter } from "react-icons/ti";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { GrSend } from "react-icons/gr";

export default function About_Us() {
  return (
    <div
      id="top"
      className=" bg-white/2.5 border border-white/50 backdrop-blur-sm shadow-[inset_0_1px_0px_rgba(255,255,255,0.75),0_0_9px_rgba(0,0,0,0.2),0_3px_8px_rgba(0,0,0,0.15)]  mx-6 px-14 py-10 mb-2 rounded-2xl"
    >
      <section className=" mb-14">
        <h2 className="text-4xl mon-exbold text-white mb-4">About Us</h2>

        <p className="text-white mon-reg mb-6">
          GreenFarm is an organic vegetables and fruits shop dedicated to
          bringing fresh, healthy, and chemical-free produce directly from our
          farms to your kitchen. We work closely with local farmers who follow
          sustainable and eco-friendly farming practices, ensuring every product
          is natural, nutritious, and safe for your family. Our mission is to
          promote healthy living, support local agriculture, and protect the
          environment by offering food you can truly trust. From farm to table,
          we believe freshness is not a luxury — it’s a lifestyle.
        </p>
      </section>

      <section className=" mb-8">
        <div className=" flex gap-10 justify-center  ">
          <div className="mt-12">
            <h2 className="text-4xl mon-exbold text-white mb-8">Our Mission</h2>
            <ul className=" list-disc list-inside space-y-2 text-xl  text-white mon-reg">
              <li>🌱 100% Organic & Fresh</li>
              <li>🚜 Directly from Local Farms</li>
              <li>💚 Sustainable & Eco-Friendly</li>
              <li>👨‍👩‍👧 Healthy Choice for Families</li>
            </ul>
          </div>

          <div className="relative w-130 h-80 mb-45">
            <img
              src="/src/assets/farm6.jfif"
              className="absolute hover:scale-98 duration-75 top-0 left-0 w-80 rounded-full border-5 border-white"
              alt="quality_check"
            />
            <img
              src="/src/assets/farm4.jfif"
              className="absolute hover:scale-98 duration-75 w-80 bottom-0 right-0 rounded-full border-5 border-white"
              alt="quality_check"
            />
            <img
              src="/src/assets/farm8.jfif"
              className="absolute hover:scale-98 duration-75 w-80 h-53 top-60 left-0 rounded-full border-5 border-white"
              alt="quality_check"
            />
          </div>
        </div>
      </section>

      <section className=" mb-8">
        <h2 className="text-5xl mon-exbold text-white mb-4 text-center">
          Our Farms
        </h2>

        <p className="text-white mon-reg mb-5">
          Take a look at where your food comes from 🌿 Our farms are carefully
          managed to ensure clean soil, fresh air, and natural growing methods.
          Every vegetable and fruit you purchase is grown with care, patience,
          and respect for nature.
        </p>

        <div className="grid grid-cols-4 gap-1 p-3 justify-around items-center mb-6">
          <img
            src="/src/assets/farm11.jfif"
            alt=""
            className="border border-white hover:scale-98 duration-150 rounded-sm w-full h-full"
          />
          <img
            src="/src/assets/farm12.jfif"
            alt=""
            className="border border-white hover:scale-98 duration-150 rounded-sm w-full h-full"
          />
          <img
            src="/src/assets/farm13.jfif"
            alt=""
            className="border border-white hover:scale-98 duration-150 rounded-sm w-full h-full"
          />
          <img
            src="/src/assets/farm14.jfif"
            alt=""
            className="border border-white hover:scale-98 duration-150 rounded-sm w-full h-full"
          />
          <img
            src="/src/assets/farm7.jfif"
            alt=""
            className="border border-white hover:scale-98 duration-150 rounded-sm w-full h-full"
          />
          <img
            src="/src/assets/farm3.jfif"
            alt=""
            className="border border-white hover:scale-98 duration-150 rounded-sm w-full max-h-40 object-cover"
          />
          <img
            src="/src/assets/farm2.jfif"
            alt=""
            className="border border-white hover:scale-98 duration-150 rounded-sm w-full max-h-40 object-cover"
          />
          <img
            src="/src/assets/farm1.jfif"
            alt=""
            className="border border-white hover:scale-98 duration-150 rounded-sm w-full max-h-40"
          />
        </div>
      </section>

      <section>
        <h3 className="text-4xl mon-exbold text-white mb-4">Contact Us</h3>
        <ul className="text-white mon-reg space-y-1">
          <li>
            <FaFacebook className="inline mr-2" /> facebook.com/greenfarm
          </li>
          <li>
            <FaTiktok className="inline mr-2" /> tiktok.com/@greenfarm
          </li>
          <li>
            <TiSocialTwitter className="inline mr-2" /> twitter.com/greenfarm
          </li>
          <li>
            <FaLocationDot className="inline mr-2" /> Local Farmers Market Road
          </li>
          <li>
            <FaPhoneAlt className="inline mr-2" /> +95 9 123 456 789
          </li>
        </ul>
        <div id="contact"></div>
      </section>
    </div>
  );
}
