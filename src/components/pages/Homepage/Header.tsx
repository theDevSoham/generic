import Button from "@/components/ui/Button";
import Navbar from "@/components/ui/Navbar";
import { container } from "@/constants/tailwind_customizations";
import React from "react";
import AboutUs from "./AboutUs";

const Header = () => {
  return (
    <header className={`w-full lg:h-[1200px] h-[1100px] bg-transparent`}>
      <div className="w-full lg:h-[750px] h-[500px] relative text-white">
        <div className="w-full h-full absolute z-1">
          <img
            src="images/mission.webp"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className={`absolute z-2 w-full h-full bg-black/60`}>
          <Navbar />
          <div
            className={`${container} flex flex-col justify-center items-center gap-6 text-center lg:px-[165px] md:px-[125px] px-[10px] lg:py-[100px] md:py-[60px] py-[20px]`}
          >
            <h1
              className={`font-medium lg:text-7xl md:text-6xl text-4xl lg:leading-[4rem] uppercase`}
            >
              NIATH ADVISORY
            </h1>
            <h2
              className={`font-medium lg:text-3xl md:text-xl text-lg lg:leading-[4rem] uppercase`}
            >
              REAL ESTATE & INVESTMENT
            </h2>
            <p className={`text-[#fff] font-normal lg:text-4xl md:text-2xl text-xl`}>
              Elevating Portfolios Through Property and Precision
            </p>
            {/* <h2
            className={`font-normal lg:text-xl md:text-[1rem] text-[0.8rem] text-[#0084d4]`}
          >
            We will write a persuasive introduction for you or your company.
            This can be about your products, offerings, or simply why you exist.
          </h2> */}
            {/* <div>
              <Button type="primary" label="Call to Action" />
            </div> */}
          </div>
        </div>
        <div className="absolute w-full z-3 lg:-bottom-90 -bottom-140 flex justify-center items-center">
          <AboutUs />
        </div>
      </div>
    </header>
  );
};

export default Header;
