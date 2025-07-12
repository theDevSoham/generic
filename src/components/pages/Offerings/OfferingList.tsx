import React from "react";

const offeringsList = [
  {
    index: "01",
    title: "Offering 1",
    description:
      "For this part, we will write an additional introduction of yourself or your business. This can be about your company history, success stories, or the product or services you offer. It can also tell about how you helped clients achieve their desired results.",
  },
  {
    index: "02",
    title: "Offering 2",
    description:
      "For this part, we will write an additional introduction of yourself or your business. This can be about your company history, success stories, or the product or services you offer. It can also tell about how you helped clients achieve their desired results.",
  },
  {
    index: "03",
    title: "Offering 3",
    description:
      "For this part, we will write an additional introduction of yourself or your business. This can be about your company history, success stories, or the product or services you offer. It can also tell about how you helped clients achieve their desired results.",
  },
];

const OfferingList = () => {
  return (
    <section className="w-4/5 lg:h-[1500px] h-[1500px] bg-white flex flex-col-reverse lg:flex-row justify-center items-center rounded-lg overflow-hidden">
      <ul className="flex flex-col justify-center items-center w-full h-full">
        {offeringsList.map((offering) => (
          <li
            key={offering.index}
            className="flex flex-col-reverse [&:nth-child(odd)]:lg:flex-row [&:nth-child(even)]:lg:flex-row-reverse justify-center items-center lg:h-[500px] h-[600px]"
          >
            <div className="flex-1 lg:h-full">
              <div className="h-full lg:p-16 px-6 flex flex-col justify-center items-start lg:gap-4 gap-2">
                <p className="uppercase lg:text-base text-sm text-[#2ab6d0]">
                  {offering.index}
                </p>
                <h2 className="lg:text-4xl md:text-2xl text-xl font-medium text-black">
                  {offering.title}
                </h2>
                <h3 className="lg:text-xl md:text-base text-sm font-light text-black">
                  {offering.description}
                </h3>
              </div>
            </div>
            <div className="flex-1 lg:h-full">
              <img
                src="images/mission.webp"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default OfferingList;
