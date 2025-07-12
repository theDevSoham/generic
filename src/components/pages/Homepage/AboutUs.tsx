import Button from "@/components/ui/Button";
import React from "react";

const AboutUs = () => {
  return (
    <section className="w-4/5 lg:h-[500px] h-[600px] bg-white flex flex-col-reverse lg:flex-row justify-center items-center rounded-lg overflow-hidden">
      <div className="lg:flex-1 flex-2 flex flex-col lg:justify-center justify-evenly items-start lg:px-20 md:px-10 px-5 text-[#000] lg:gap-6 gap-0">
        <h1 className="uppercase lg:text-base text-sm text-[#2ab6d0]">About Us</h1>
        <h2 className="lg:text-4xl md:text-2xl text-xl font-medium">
          Short Headline for Company About Section Will Be Here
        </h2>
        <p className="lg:text-base md:text-sm text-sm text-light">
          This part will introduce you or your business to website visitors.
          We&apos;ll write about you, your organization, the products or services you
          offer, and why your company exists.
        </p>
        <Button type="primary" label="Call to Action" />
      </div>
      <div className="flex-1 lg:h-full w-full flex justify-center items-center">
        <img
          src="images/mission.webp"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default AboutUs;
