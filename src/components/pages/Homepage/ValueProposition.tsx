import { container } from "@/constants/tailwind_customizations";
import React from "react";

const valueProposition = [
  {
    id: 1,
    title: "Unique Value Proposition 1",
    description:
      "In this part, we will write about what makes your business unique and the value people get from using your products or services over competitors.",
  },
  {
    id: 2,
    title: "Unique Value Proposition 2",
    description:
      "In this part, we will write about what makes your business unique and the value people get from using your products or services over competitors.",
  },
  {
    id: 3,
    title: "Unique Value Proposition 3",
    description:
      "In this part, we will write about what makes your business unique and the value people get from using your products or services over competitors.",
  },
];

const ValueProposition = () => {
  return (
    <section className="w-full bg-[#fff]">
      <div
        className={`${container} w-full flex flex-col-reverse lg:flex-row lg:py-20 py-10 gap-10 md:gap-2`}
      >
        <div className="flex-1 flex flex-col lg:flex-row justify-center items-start gap-4 lg:gap-8">
          <div className="flex-1 lg:h-full flex flex-col justify-center items-center lg:gap-6 gap-4 lg:pr-10">
            <p className="uppercase lg:text-base text-sm text-[#2ab6d0]">
              We will write a prefix describing what makes people choose your
              business here
            </p>
            <h2 className="lg:text-4xl md:text-2xl text-2xl font-medium">
              Headline Describing Your Unique Value Propositions Will Be Here
            </h2>
            <p className="lg:text-lg md:text-base text-sm font-light">
              In this part, we will write a sub-headline briefly describing your
              company&apos;s unique value proposition.
            </p>
          </div>

          <ul className="flex-1 flex flex-col">
            {valueProposition.map((item, index, arr) => (
              <li
                key={item.id}
                className="flex flex-col justify-center items-start gap-4"
              >
                <span className="flex flex-col lg:gap-4 gap-2">
                  <h2 className="font-medium lg:text-xl md:text-lg text-base">
                    {item.title}
                  </h2>
                  <p className="font-light lg:text-base md:text-sm text-sm text-[#000]">
                    {item.description}
                  </p>
                </span>

                {index !== arr.length - 1 && (
                  <span className="mt-3 mb-6 w-full h-[0.5px] bg-[#F15808] rounded-xl" />
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
