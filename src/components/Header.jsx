import React from "react";
import { FiSearch } from "react-icons/fi";
import { FaShoppingCart } from "react-icons/fa";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { HashLink } from "react-router-hash-link";
import { PiPlantFill } from "react-icons/pi";

export default function Header() {
  const { cartCount, cartRef } = useCart();
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div
      className={`sticky top-0 left-0 z-10 ${scrolled ? "bg-green-500" : ""}`}
    >
      <div className=" flex justify-between items-center text-white py-4 px-10 ">
        <div className="mon-exbold text-lg flex items-end ">
          <PiPlantFill size={40} /> GreenFarm
        </div>

        <div className="flex space-x-8">
          <HashLink
            smooth
            to={"/"}
            className="mon-reg cursor-pointer hover:underline"
          >
            Home
          </HashLink>
          <HashLink
            smooth
            to={"/product-page#top"}
            className="mon-reg cursor-pointer hover:underline"
          >
            Products
          </HashLink>
          <HashLink
            smooth
            to={"/about-us"}
            className="mon-reg cursor-pointer hover:underline"
          >
            About Us
          </HashLink>
        </div>

        <div className="flex space-x-4 items-center ">
          <div className="mon-reg  pr-2 flex justify-between items-center rounded-full border border-white">
            <input
              type="text"
              placeholder="Search..."
              size="15"
              className=" py-1 pl-3 border-r mr-2 rounded-full focus:outline-none"
            />
            <FiSearch size={23} />
          </div>

          <div ref={cartRef} className="relative text-2xl cursor-pointer">
            <Link to={"/cart"} ref={cartRef} className="mon-reg">
              <FaShoppingCart size={28} />
            </Link>
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 rounded-full">
              {cartCount}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
