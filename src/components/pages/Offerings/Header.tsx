import Navbar from "@/components/ui/Navbar";
import { container } from "@/constants/tailwind_customizations";
import React from "react";
import OfferingList from "./OfferingList"

const Header = () => {
  return (
    <header className={`w-full lg:h-[2000px] h-[1800px] bg-transparent`}>
      <div className="w-full lg:h-[600px] h-[400px] relative text-white">
        <div className="w-full h-full absolute z-1">
          <img
            src="images/mission.webp"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className={`absolute z-2 w-full h-full bg-black/60`}>
          <Navbar selectedRouteId={3} />
          <div
            className={`${container} flex flex-col justify-center items-center gap-10 text-center lg:px-[165px] md:px-[125px] px-[10px] lg:py-[100px] md:py-[60px] py-[20px]`}
          >
            <p className={`text-[#fff] font-normal text-base uppercase`}>
              Offerings
            </p>
            <h1
              className={`font-medium lg:text-5xl md:text-3xl text-2xl lg:leading-[4rem]`}
            >
              Headline for the Offering Page Will Be Here
            </h1>
          </div>
        </div>
        <div className="absolute w-full z-3 lg:-bottom-330 -bottom-350 flex justify-center items-center">
			<OfferingList />
		</div>
      </div>
    </header>
  );
};

export default Header;
