import React, { useState } from "react";
import CartCard from "../components/CartCard";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import Swal from "sweetalert2";

export default function CartSection() {
  const { cartItems, totalPrice } = useCart();
  const { clearCart } = useCart();

  const handleOrder = () => {
    clearCart(); // 🔥 empty the cart

    Swal.fire({
      title: "Order placed successfully!",
      icon: "success",
      draggable: true,
    });
  };

  return (
    <div className=" bg-white/2.5 border border-white/50 backdrop-blur-sm shadow-[inset_0_1px_0px_rgba(255,255,255,0.75),0_0_9px_rgba(0,0,0,0.2),0_3px_8px_rgba(0,0,0,0.15)]  mx-6 px-24 py-12 mb-2 rounded-2xl">
      <div className="flex flex-col gap-5">
        {cartItems.length === 0 ? (
          <p className="text-white text-center mon-reg">Your cart is empty.</p>
        ) : (
          <>
            {cartItems.map((item) => (
              <CartCard key={item.id} cart={item} />
            ))}
          </>
        )}

        <div className=" w-full ">
          <div className="border-t border-white text-white mon-reg flex flex-col justify-end mb-5 gap-3 py-3">
            <div className="text-right flex justify-end items-center gap-5  pr-15">
              <p className="">Total</p>
              <p className="font-bold ">{totalPrice.toFixed(2)}</p>
            </div>
            <div className="text-right flex justify-end items-center gap-5  pr-15">
              <p className="">Tax(10%)</p>
              <p className="font-bold ">{(totalPrice * 0.1).toFixed(2)}</p>
            </div>
            <div className="text-right flex justify-end items-center gap-5  pr-15">
              <p className="">Net Total</p>
              <p className="text-2xl font-bold ">
                {(totalPrice + totalPrice * 0.1).toFixed(2)}
              </p>
            </div>
          </div>
          <div className="text-end mb-3 pr-10">
            <button
              onClick={handleOrder}
              className="border-2 border-green-500 mon-me text-white  rounded-4xl px-4 py-2 hover:bg-green-500 hover:border-green-500 bg-green-700"
            >
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
