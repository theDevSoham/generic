"use client";

import { container } from "@/constants/tailwind_customizations";
import React from "react";

interface INumberingCircle {
  className: string;
  index: number;
}

const NumberingCircle: React.FC<INumberingCircle> = ({ className, index }) => (
  <div className={`${className} rounded-full flex justify-center items-center`}>
    <p className="font-semibold lg:text-base md:text-base text-base">{index}</p>
  </div>
);

const whyWorkWithUs = [
  {
    id: 1,
    topic: "End-to-End Support",
    description:
      "From property selection and lease negotiation to investment planning and portfolio diversification, we offer comprehensive, hands-on guidance throughout the process.",
  },
  {
    id: 2,
    topic: "Integrated Expertise",
    description:
      "We bring together deep knowledge in both commercial real estate and financial advisory, offering clients a unified strategy for physical and financial asset growth.",
  },
  {
    id: 3,
    topic: "Client-Centric Approach",
    description:
      "We prioritize long-term relationships over short-term transactions, delivering consistent value and transparent communication.",
  },
  {
    id: 4,
    topic: "Trusted Network & Market Access",
    description:
      "Our strong network of developers, property owners, and financial institutions provides clients with exclusive opportunities and competitive advantage.",
  },
  {
    id: 5,
    topic: "Research-Driven Advisory",
    description:
      "Our recommendations are backed by data, market intelligence, and industry insights — ensuring well-informed and forward-looking decisions.",
  },
];

const WhyWorkWithUs = () => {
  return (
    <section className="w-full bg-transparent lg:py-16 lg:py-24 py-10">
      <div
        className={`${container} w-full flex flex-col justify-center items-center lg:gap-20 gap-6`}
      >
        <h2 className="lg:text-4xl md:text-2xl text-xl font-medium">
          Why work with us ?
        </h2>

        <div className="w-full grid lg:grid-cols-3 grid-cols-1 lg:gap-16 gap-8">
          {whyWorkWithUs.map((article) => (
            <article
              key={article.id}
              className="flex-1 flex flex-col justify-center items-start gap-4 bg-white lg:p-10 p-6 rounded-lg"
            >
              <NumberingCircle
                index={article.id}
                className="w-[30px] h-[30px] bg-[#0084d4] text-white"
              />
              <p className="font-medium lg:text-xl md:text-lg text-base underline">
                {article.topic}
              </p>
              <div className="flex gap-6 items-center">
                <p className="font-normal lg:text-base md:text-base text-base text-left">
                  {article.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithUs;
