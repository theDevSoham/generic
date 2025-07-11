import Button from "@/components/ui/Button";
import Navbar from "@/components/ui/Navbar";
import { container } from "@/constants/tailwind_customizations";
import React from "react";

const Header = () => {
  return (
    <header
      className={`w-full lg:h-[600px] h-[450px] relative text-white bg-transparent`}
    >
      <div className="w-full h-full absolute z-1">
        <img
          src="images/mission.webp"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className={`absolute z-2 w-full h-full bg-black/60`}>
        <Navbar selectedRouteId={2} />
        <div
          className={`${container} flex flex-col justify-center items-center gap-10 text-center lg:px-[165px] md:px-[125px] px-[10px] lg:py-[100px] md:py-[60px] py-[20px]`}
        >
          <p className={`text-[#fff] font-normal text-base uppercase`}>
            About Us
          </p>
          <h1
            className={`font-medium lg:text-5xl md:text-3xl text-2xl lg:leading-[4rem]`}
          >
            Headline for the About Page Will Be Here
          </h1>
          {/* <h2
            className={`font-normal lg:text-xl md:text-[1rem] text-[0.8rem] text-[#2ab6d0]`}
          >
            We will write a persuasive introduction for you or your company.
            This can be about your products, offerings, or simply why you exist.
          </h2> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
