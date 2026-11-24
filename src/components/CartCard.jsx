import React from "react";
import carts from "../data/carts";
import { useCart } from "../context/CartContext";

const CartCard = ({ cart }) => {
  const { increaseQty, decreaseQty } = useCart();
  return (
    <div className="border border-white rounded-xl bg-white text-green-800 mon-reg p-5 pr-10 grid grid-cols-6">
      <div className="col-span-2 mr-3">
        <img src={cart.img} className="h-40 w-full rounded-lg object-cover" />
      </div>
      <div className="flex justify-between col-span-4 px-5">
        <div className="p-3 flex-1/3">
          <p className="mb-2 text-3xl mon-exbold">{cart.name}</p>
          <p className="text-green-500 text-xl">
            Price <span className="text-yellow-500">$ {cart.price}</span>{" "}
          </p>
        </div>
        <div className="pt-6 flex-1/3 text-center w-full">
          <p className="mb-2 text-xl text-center">Quantity</p>
          <div className="flex gap-3 items-center text-3xl w-full justify-center">
            <button
              onClick={() => decreaseQty(cart.id)}
              className="bg-black hover:scale-105 cursor-pointer rounded-lg text-white px-2.5 py-0.5"
            >
              -
            </button>
            <span className="text-green-800">{cart.quantity}</span>
            <button
              onClick={() => increaseQty(cart.id)}
              className="bg-black hover:scale-105 cursor-pointer rounded-lg text-white px-2 py-0.5"
            >
              +
            </button>
          </div>
        </div>
        <div className="pt-8 text-right flex-1/3">
          <p className="text-3xl font-bold mt-3">
            $ {(cart.price * cart.quantity).toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
