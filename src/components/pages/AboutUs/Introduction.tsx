import { container } from "@/constants/tailwind_customizations";
import React from "react";

const Introduction = () => {
  return (
    <section
      className={`${container} w-full bg-transparent flex flex-col lg:flex-row justify-center items-center lg:py-28 py-10 lg:gap-10 gap-6`}
    >
      <div className="flex-1 flex flex-col justify-center items-center lg:gap-6 gap-4">
        <p className="uppercase lg:text-base text-sm text-[#0084d4]">
          Prefix for the About Section will be written here
        </p>
        <h2 className="font-medium lg:text-4xl md:text-2xl text-lg">
          Short Headline for Company About Section Will Be Here
        </h2>
      </div>
      <div className="flex-2 flex flex-col justify-center items-center lg:gap-6 gap-4">
        <h2 className="lg:text-xl md:text-lg text-base">
          This part will introduce you or your business to website visitors.
          We&apos;ll write about you, your organization, the products or services you
          offer, and why your company exists.
        </h2>
        <h3 className="lg:text-lg md:text-base text-sm">
          For this part, we will write an additional introduction of yourself or
          your business. This can be about your company history, success
          stories, or the product or services you offer. It can also tell about
          how you helped clients achieve their desired results.
        </h3>
      </div>
    </section>
  );
};

export default Introduction;
