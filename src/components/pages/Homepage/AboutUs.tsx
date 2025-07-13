import Button from "@/components/ui/Button";
import React from "react";

const AboutUs = () => {
  return (
    <section className="w-4/5 lg:h-[500px] h-[600px] bg-white flex flex-col-reverse lg:flex-row justify-center items-center rounded-lg overflow-hidden">
      <div className="lg:flex-1 flex-2 flex flex-col lg:justify-center justify-evenly items-start lg:px-20 md:px-10 px-5 text-[#000] lg:gap-6 gap-0">
        <h1 className="uppercase lg:text-3xl text-xl text-[#0084d4]">
          About Us
        </h1>
        {/* <h2 className="lg:text-4xl md:text-2xl text-xl font-medium">
          Elevating Portfolios Through Property and Precision
        </h2> */}
        <p className="lg:text-base md:text-sm text-sm text-light">
          Niath Advisory is a trusted advisory firm providing integrated real
          estate and financial solutions to corporates and investors. We
          specialize in commercial leasing, outright property transactions, and
          strategic investment planning, combining deep market insight with a
          client-first approach. Our services are designed to align real estate
          strategies with business goals while offering high-performing
          investment opportunities in real estate and mutual funds. With a focus
          on integrity, transparency, and sustainable growth, we are committed
          to delivering long-term value and building lasting partnership.
        </p>
        <Button type="linkButton" link="/about-us" label="Know more about us" />
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
