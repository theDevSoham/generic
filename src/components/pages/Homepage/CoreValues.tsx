import Card from "@/components/ui/Card";
import { container } from "@/constants/tailwind_customizations";
import React from "react";

const coreValues = [
  {
    index: "01",
    heading: "Core Value 1",
    description:
      "In this part, we will write about the core values and guiding principles that influence your business choices and operations.",
  },
  {
    index: "02",
    heading: "Core Value 2",
    description:
      "In this part, we will write about the core values and guiding principles that influence your business choices and operations.",
  },
  {
    index: "03",
    heading: "Core Value 3",
    description:
      "In this part, we will write about the core values and guiding principles that influence your business choices and operations.",
  },
];

const CoreValues = () => {
  return (
    <section
      className={`${container} bg-transparent flex flex-col lg:justify-center justiify-center items-center lg:gap-10 gap-6`}
    >
      <p className="lg:text-lg md:text-base text-sm uppercase text-[#2ab6d0]">
        Prefix describing what your business does will be here
      </p>
      <h2 className="lg:text-4xl md:text-2xl text-xl font-medium">
        Headline Describing Your Company Core Values Will Come Here
      </h2>
      <div className="flex flex-col lg:flex-row justify-center items-center lg:pt-8 lg:pb-12 lg:gap-10 gap-6 pt-0 pb-10">
        {coreValues.map((coreValue) => (
          <Card key={coreValue.index} type="core_values" {...coreValue} />
        ))}
      </div>
    </section>
  );
};

export default CoreValues;
