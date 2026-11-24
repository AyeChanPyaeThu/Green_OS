import React from "react";
import "../App.css";
import vegetables from "../data/vegetables";
import fruits from "../data/fruits";
import "../index.css";
import { useCart } from "../context/CartContext";
import { flyToCart } from "../utils/flyToCart";

export default function Products() {
  const { addToCart, cartRef } = useCart();

  const handleAdd = (e, product) => {
    const img = e.currentTarget.closest(".card").querySelector("img");

    if (!img || !cartRef.current) return;

    flyToCart(img, cartRef.current, () => addToCart(product));
  };

  return (
    <section className="mt-8" id="top">
      {/* fruit side */}
      <div className="mb-18" id="fruits">
        <h1 className="mb-8 mon-exbold text-4xl text-white">Fruits</h1>
        <div className="grid md:grid-cols-4 gap-6">
          {fruits.map((p) => (
            <div
              key={p.id}
              className="card rounded-3xl bg-card-color p-4 hover:-translate-y-2 transition"
            >
              <img
                src={p.img}
                alt={p.name}
                className=" h-53 w-full object-cover rounded-2xl"
              />
              <h3 className="mt-3 font-semibold text-green-900">{p.name}</h3>
              <p className="text-green-700 font-bold">${p.price}</p>
              <button
                // onClick={() => setCart([...cart, p])}
                onClick={(e) => handleAdd(e, p)}
                className="mt-3 w-full py-2 rounded-full bg-green-800 text-white hover:bg-green-600"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
      {/* vegetable side */}
      <div className="mb-8" id="vegetables">
        <h1 className="mb-8 mon-exbold text-4xl text-white">Vegetables</h1>
        <div className="grid md:grid-cols-4 gap-6">
          {vegetables.map((p) => (
            <div
              key={p.id}
              className="card rounded-3xl bg-card-color p-4 hover:-translate-y-2 transition"
            >
              <img
                src={p.img}
                alt={p.name}
                className="h-53 w-full object-cover rounded-2xl"
              />
              <h3 className="mt-3 font-semibold text-green-900">{p.name}</h3>
              <p className="text-green-700 font-bold">${p.price}</p>
              <button
                onClick={(e) => handleAdd(e, p)}
                className="mt-3 w-full py-2 rounded-full bg-green-800 text-white hover:bg-green-600"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
