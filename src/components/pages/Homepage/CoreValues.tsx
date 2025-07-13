import Card from "@/components/ui/Card";
import { container } from "@/constants/tailwind_customizations";
import React from "react";

const coreValues = [
  {
    index: "01",
    heading: "Core Value 1",
    description: "Integrity in every transaction",
  },
  {
    index: "02",
    heading: "Core Value 2",
    description: "Client-first thinking in every solution",
  },
  {
    index: "03",
    heading: "Core Value 3",
    description: "Innovation in both approach and execution",
  },
  {
    index: "04",
    heading: "Core Value 4",
    description: "Transparency and open communication",
  },
  {
    index: "05",
    heading: "Core Value 5",
    description: "Sustainable Growth for all stakeholders",
  },
];

const CoreValues = () => {
  return (
    <section
      className={`${container} bg-transparent flex flex-col lg:justify-center justiify-center items-center lg:gap-10 gap-6`}
    >
      {/* <p className="lg:text-lg md:text-base text-sm uppercase text-[#0084d4]">
        Prefix describing what your business does will be here
      </p> */}
      <h2 className="lg:text-4xl md:text-2xl text-xl font-medium text-center">
        Rooted in Integrity, Driven by Innovation, Committed to Transparent,
        Client-First Growth.
      </h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:pt-8 lg:pb-12 lg:gap-10 gap-6 pt-0 pb-10">
        {coreValues.map((coreValue) => (
          <Card key={coreValue.index} type="core_values" {...coreValue} />
        ))}
      </div>
    </section>
  );
};

export default CoreValues;
