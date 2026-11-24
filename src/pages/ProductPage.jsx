import React from "react";
import Products from "../components/Products";

export default function ProductPage() {
  return (
    <div className=" bg-white/2.5 border border-white/50 backdrop-blur-sm shadow-[inset_0_1px_0px_rgba(255,255,255,0.75),0_0_9px_rgba(0,0,0,0.2),0_3px_8px_rgba(0,0,0,0.15)]  mx-6 px-14 py-6 mb-2 rounded-2xl">
      <Products />
    </div>
  );
}
