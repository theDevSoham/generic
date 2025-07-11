"use client";

import Button from "@/components/ui/Button";
import { container } from "@/constants/tailwind_customizations";
import React from "react";

const MiddleCallToAction = () => {
  return (
    <section className="w-full h-[400px] relative">
      <div className="w-full h-full absolute inset-0 z-2">
        <img
          src="images/mission.webp"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="w-full h-full absolute inset-0 z-4 bg-black/50">
        <div
          className={`${container} w-full h-full flex flex-col justify-center items-center text-center lg:px-[100px] gap-10`}
        >
          <h4 className="font-normal lg:text-lg md:text-lg text-base text-white uppercase">
            Prefix describing what your business does will be here
          </h4>

          <h2 className="lg:text-4xl md:text-2xl text-xl font-semibold text-white lg:leading-[3rem] leading:2-rem">
            Heading for the Middle Call to Action Will Be Written Here
          </h2>

          <Button type="primary" label="Call to Action" onClick={() => {}} />
        </div>
      </div>
    </section>
  );
};

export default MiddleCallToAction;
