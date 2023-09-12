"use client";

import { useAppSelector } from "@/redux/hooks";
import styles from "./Hero.module.css";

function Hero() {
  const isAuth = useAppSelector((state) => state.auth.isAuth);
  console.log(isAuth);
  return (
    <main className={`${styles.main} flex flex-col justify-center`}>
      <div className="container flex flex-col justify-center items-center ps-16 w-[55%] max-lg:w-full max-md:ps-0 max-md:text-center">
        <h1 className="text-6xl text-white font-extrabold font-sans max-md:text-3xl ">
          Discover Your Perfect Style at UShop
        </h1>
        <p className="mt-4 text-slate-200">
          Welcome to UShop, where style meets convenience! Explore our curated
          collection of fashion, accessories, and more. Find the latest trends,
          timeless classics, and everything in between. Shop with confidence and
          elevate your wardrobe today!
        </p>
        <button className="btn mt-4 self-start max-md:self-center">
          Shop Now
        </button>
      </div>
    </main>
  );
}

export default Hero;
