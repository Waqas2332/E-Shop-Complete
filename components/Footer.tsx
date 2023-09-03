import React from "react";
import FooterList from "./FooterList";
import { categories, others } from "@/constants";

function Footer() {
  return (
    <footer className="text-gray-600 bg-gray-200 body-font">
      <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <span className="text-xl">UShop</span>
          </a>
          <p className="mt-2 text-sm text-gray-500">
            Get the best deals on your favorite products. Shop now!
          </p>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              Categories
            </h2>
            <nav className="list-none mb-10">
              {categories.map((category) => (
                <FooterList text={category} key={category} />
              ))}
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              Others
            </h2>
            <nav className="list-none mb-10">
              {others.map((other) => (
                <FooterList text={other} key={other} />
              ))}
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              Categories
            </h2>
            <nav className="list-none mb-10">
              {categories.map((category) => (
                <FooterList text={category} key={category} />
              ))}
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              Others
            </h2>
            <nav className="list-none mb-10">
              {others.map((other) => (
                <FooterList text={other} key={other} />
              ))}
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-gray-100">
        <div className="container mx-auto py-4 px-5">
          <p className="text-gray-500 text-center text-sm">
            © 2023 E-Shop —
            <a
              href="https://twitter.com/Waqas_Munir232"
              rel="noopener noreferrer"
              className="text-gray-600 ml-1"
              target="_blank"
            >
              @Waqas_Munir232
            </a>
            &nbsp; All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
