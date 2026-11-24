import React from "react";
import "../index.css";
import Products from "../components/Products";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import fruits from "../data/fruits";
import vegetables from "../data/vegetables";
import { HashLink } from "react-router-hash-link";
import { useCart } from "../context/CartContext";
import { flyToCart } from "../utils/flyToCart";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../css/custom-swiper.css";

export default function Home() {
  const { addToCart, cartRef } = useCart();

  const handleAdd = (e, product) => {
    const img = e.currentTarget.closest(".card").querySelector("img");

    if (!img || !cartRef.current) return;

    flyToCart(img, cartRef.current, () => addToCart(product));
  };

  return (
    <div
      id="top"
      className=" bg-white/2.5 border border-white/50 backdrop-blur-sm shadow-[inset_0_1px_0px_rgba(255,255,255,0.75),0_0_9px_rgba(0,0,0,0.2),0_3px_8px_rgba(0,0,0,0.15)]  mx-6 px-14 py-6 mb-2 rounded-2xl"
    >
      {/* swipe slides  */}
      <section>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper mb-16"
        >
          <SwiperSlide>
            <article className="mx-15  grid md:grid-cols-2 gap-1 items-center mb-20 mt-5">
              <div>
                <h1 className="text-5xl font-extrabold text-white leading-tight">
                  From farm to <br /> your kitchen
                </h1>
                <p className="mt-6 mb-10 text-white max-w-md">
                  Discover the freshest and finest organic vegetables and fruits
                  delivered directly to your home.
                </p>
                <Link
                  to={"/product-page"}
                  className=" px-6 py-2 rounded-full  text-white/90 
               bg-white/10 backdrop-blur-lg 
               border border-white/10 
               shadow-[inset_0_0_10px_rgba(255,255,255,0.2)]
               transition-all duration-300 hover:bg-white/20 "
                >
                  Shop Now
                </Link>
              </div>

              <div className="">
                <img
                  src="src/assets/market1.jfif"
                  alt="Vegetables"
                  className="rounded-3xl shadow-xl border border-green-800 w-full h-full object-cover"
                />
              </div>
            </article>
          </SwiperSlide>

          <SwiperSlide>
            <article className="mx-15  grid md:grid-cols-2 gap-1 items-center mb-20 mt-5">
              <div>
                <h1 className="text-5xl font-extrabold text-white leading-tight">
                  From farm to <br /> your kitchen
                </h1>
                <p className="mt-6 mb-10 text-white max-w-md">
                  Discover the freshest and finest organic vegetables and fruits
                  delivered directly to your home.
                </p>
                <Link
                  to={"/product-page"}
                  className=" px-6 py-2 rounded-full  text-white/90 
               bg-white/10 backdrop-blur-lg 
               border border-white/10 
               shadow-[inset_0_0_10px_rgba(255,255,255,0.2)]
               transition-all duration-300 hover:bg-white/20 "
                >
                  Shop Now
                </Link>
              </div>

              <div className="">
                <img
                  src="src/assets/market1.jfif"
                  alt="Vegetables"
                  className="rounded-3xl shadow-xl border border-green-800 w-full h-full object-cover"
                />
              </div>
            </article>
          </SwiperSlide>

          <SwiperSlide>
            <article className="mx-15  grid md:grid-cols-2 gap-1 items-center mb-20 mt-5">
              <div>
                <h1 className="text-5xl font-extrabold text-white leading-tight">
                  From farm to <br /> your kitchen
                </h1>
                <p className="mt-6 mb-10 text-white max-w-md">
                  Discover the freshest and finest organic vegetables and fruits
                  delivered directly to your home.
                </p>
                <Link
                  to={"/product-page"}
                  className=" px-6 py-2 rounded-full  text-white/90 
               bg-white/10 backdrop-blur-lg 
               border border-white/10 
               shadow-[inset_0_0_10px_rgba(255,255,255,0.2)]
               transition-all duration-300 hover:bg-white/20 "
                >
                  Shop Now
                </Link>
              </div>

              <div className="">
                <img
                  src="src/assets/market1.jfif"
                  alt="Vegetables"
                  className="rounded-3xl shadow-xl border border-green-800 w-full h-full object-cover"
                />
              </div>
            </article>
          </SwiperSlide>

          <SwiperSlide>
            <article className="mx-15  grid md:grid-cols-2 gap-1 items-center mb-20 mt-5">
              <div>
                <h1 className="text-5xl font-extrabold text-white leading-tight">
                  From farm to <br /> your kitchen
                </h1>
                <p className="mt-6 mb-10 text-white max-w-md">
                  Discover the freshest and finest organic vegetables and fruits
                  delivered directly to your home.
                </p>
                <Link
                  to={"/product-page"}
                  className=" px-6 py-2 rounded-full  text-white/90 
               bg-white/10 backdrop-blur-lg 
               border border-white/10 
               shadow-[inset_0_0_10px_rgba(255,255,255,0.2)]
               transition-all duration-300 hover:bg-white/20 "
                >
                  Shop Now
                </Link>
              </div>

              <div className="">
                <img
                  src="src/assets/market1.jfif"
                  alt="Vegetables"
                  className="rounded-3xl shadow-xl border border-green-800 w-full h-full object-cover"
                />
              </div>
            </article>
          </SwiperSlide>

          <SwiperSlide>
            <article className="mx-15  grid md:grid-cols-2 gap-1 items-center mb-20 mt-5">
              <div>
                <h1 className="text-5xl font-extrabold text-white leading-tight">
                  From farm to <br /> your kitchen
                </h1>
                <p className="mt-6 mb-10 text-white max-w-md">
                  Discover the freshest and finest organic vegetables and fruits
                  delivered directly to your home.
                </p>
                <Link
                  to={"/product-page"}
                  className=" px-6 py-2 rounded-full  text-white/90 
               bg-white/10 backdrop-blur-lg 
               border border-white/10 
               shadow-[inset_0_0_10px_rgba(255,255,255,0.2)]
               transition-all duration-300 hover:bg-white/20 "
                >
                  Shop Now
                </Link>
              </div>

              <div className="">
                <img
                  src="src/assets/market1.jfif"
                  alt="Vegetables"
                  className="rounded-3xl shadow-xl border border-green-800 w-full h-full object-cover"
                />
              </div>
            </article>
          </SwiperSlide>
        </Swiper>
      </section>

      {/* /* Products */}
      <div className="mb-8">
        <h1 className="mb-2 mon-exbold text-4xl text-white text-center">
          Top Choices
        </h1>
        <div className="border-b-2 border-b-white/40 mb-8"></div>
        <h1 className="mb-8 mon-exbold text-4xl text-white">Fruits</h1>
        <div className="flex justify-between items-center mb-12">
          <div className="basis-11/12 grid md:grid-cols-4 gap-6">
            {fruits.length <= 4 ? (
              <>
                {fruits.map((p) => (
                  <div
                    key={p.id}
                    className="card rounded-3xl bg-card-color p-4 hover:-translate-y-2 transition"
                  >
                    <img
                      src={p.img}
                      alt={p.name}
                      className="h-32 w-full object-cover rounded-2xl"
                    />
                    <h3 className="mt-3 font-semibold text-green-900">
                      {p.name}
                    </h3>
                    <p className="text-green-700 font-bold">${p.price}</p>
                    <button
                      // onClick={() => setCart([...cart, p])}
                      onClick={(e) => handleAdd(e, p)}
                      className="mt-3 w-full py-2 rounded-full bg-green-800 text-white hover:bg-green-600"
                    >
                      Add to Cart
                    </button>
                  </div>
                ))}{" "}
              </>
            ) : (
              <>
                {fruits.slice(0, 4).map((p) => (
                  <div
                    key={p.id}
                    className="card rounded-3xl bg-card-color p-4 hover:-translate-y-2 transition"
                  >
                    <img
                      src={p.img}
                      alt={p.name}
                      className="h-32 w-full object-cover rounded-2xl"
                    />
                    <h3 className="mt-3 font-semibold text-green-900">
                      {p.name}
                    </h3>
                    <p className="text-green-700 font-bold">${p.price}</p>
                    <button
                      onClick={(e) => handleAdd(e, p)}
                      className="mt-3 w-full py-2 rounded-full bg-green-800 text-white hover:bg-green-600"
                    >
                      Add to Cart
                    </button>
                  </div>
                ))}
              </>
            )}
          </div>
          <HashLink smooth to={"/product-page#fruits"}>
            <MdKeyboardDoubleArrowRight
              className="basis-1/12inline-block ml-2 text-white"
              size={34}
            />
          </HashLink>
        </div>

        <h1 className="mb-8 mon-exbold text-4xl text-white">Vegetables</h1>
        <div className="flex justify-between items-center ">
          <div className="basis-11/12 grid md:grid-cols-4 gap-6">
            {vegetables.length <= 4 ? (
              <>
                {vegetables.map((p) => (
                  <div
                    key={p.id}
                    className="card rounded-3xl bg-card-color p-4 hover:-translate-y-2 transition"
                  >
                    <img
                      src={p.img}
                      alt={p.name}
                      className="h-32 w-full object-cover rounded-2xl"
                    />
                    <h3 className="mt-3 font-semibold text-green-900">
                      {p.name}
                    </h3>
                    <p className="text-green-700 font-bold">${p.price}</p>
                    <button
                      onClick={(e) => handleAdd(e, p)}
                      className="mt-3 w-full py-2 rounded-full bg-green-800 text-white hover:bg-green-600"
                    >
                      Add to Cart
                    </button>
                  </div>
                ))}{" "}
              </>
            ) : (
              <>
                {vegetables.slice(0, 4).map((p) => (
                  <div
                    key={p.id}
                    className="card rounded-3xl bg-card-color p-4 hover:-translate-y-2 transition"
                  >
                    <img
                      src={p.img}
                      alt={p.name}
                      className="h-32 w-full object-cover rounded-2xl"
                    />
                    <h3 className="mt-3 font-semibold text-green-900">
                      {p.name}
                    </h3>
                    <p className="text-green-700 font-bold">${p.price}</p>
                    <button
                      onClick={(e) => handleAdd(e, p)}
                      className="mt-3 w-full py-2 rounded-full bg-green-800 text-white hover:bg-green-600"
                    >
                      Add to Cart
                    </button>
                  </div>
                ))}
              </>
            )}
          </div>
          <HashLink smooth to={"/product-page#vegetables"}>
            <MdKeyboardDoubleArrowRight
              className="basis-1/12inline-block ml-2 text-white"
              size={34}
            />
          </HashLink>
        </div>
      </div>

      <div className="w-full mt-8 flex justify-center">
        <HashLink
          smooth
          to={"/product-page#top"}
          className=" px-6 py-2 rounded-full  text-white/90 
               bg-white/10 backdrop-blur-lg 
               border border-white/10  text-lg
               shadow-[inset_0_0_10px_rgba(255,255,255,0.2)]
               transition-all duration-300 hover:bg-white/20  "
        >
          Choose More{" "}
          <MdKeyboardDoubleArrowRight className="inline-block ml-2" size={24} />
        </HashLink>
      </div>
    </div>
  );
}
