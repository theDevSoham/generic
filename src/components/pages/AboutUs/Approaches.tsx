import { container } from "@/constants/tailwind_customizations";
import React from "react";

const approaches = [
  {
    index: 1,
    title: "Approach 1",
    descrption:
      "In this part, we will highlight details about the approach your company uses to serve clients and help them achieve their desired results",
  },
  {
    index: 2,
    title: "Approach 2",
    descrption:
      "In this part, we will highlight details about the approach your company uses to serve clients and help them achieve their desired results",
  },
];

const Approaches = () => {
  return (
    <section className={`w-full bg-white lg:py-20 py-10`}>
      <div
        className={`${container} flex flex-col justify-center items-start lg:gap-10 gap-6`}
      >
        <p className="uppercase lg:text-base text-sm text-[#2ab6d0]">
          Prefix for the Company Approach section will be written here
        </p>

        <h2 className="font-medium lg:text-4xl md:text-2xl text-lg">
          Headline Describing The Company Approach Will Be Here
        </h2>

        <div className="flex flex-col lg:flex-row justify-center items-center lg:gap-10 gap-6">
          {approaches.map((approach, index, arr) => (
            <article
              key={approach.index}
              className={`flex flex-col lg:pr-[20px] lg:pb-0 pb-[20px] ${
                index !== arr.length - 1
                  ? "lg:border-r-1 border-b-1 lg:border-r-[#F15808] border-b-[#F15808] lg:border-b-0"
                  : ""
              }`}
            >
              <p className="lg:text-xl md:text-base text-base font-medium ">
                {approach.title}
              </p>
              <p className="lg:text-lg md:text-sm text-sm font-light">
                {approach.descrption}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Approaches;
