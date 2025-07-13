import React from "react";

interface ICardImageLink {
  imageLink: string;
  heading: string;
  description: string;
  link: string;
}

interface ICardComponent {
  image: React.ReactNode;
  heading: string;
  description: string;
  link: string;
}

interface ICardCoreValue {
  index: string;
  heading: string;
  description: string;
}

type ICard =
  | ({ type: "offering" } & (ICardImageLink | ICardComponent))
  | ({ type: "core_values" } & ICardCoreValue)
  | { type: "custom" };

const Card: React.FC<ICard> = (props) => {
  const isImageLink = "imageLink" in props;

  switch (props.type) {
    case "offering":
      return (
        <div className="max-w-sm card-offering overflow-hidden ring ring-gray-200 hover:shadow-md transition-shadow bg-white lg:p-6 p-4 cursor-pointer">
          <div className="w-full xl:h-[400px] lg:h-[350px] md:h-[300px] h-[200px]">
            {isImageLink ? (
              <img
                src={props.imageLink}
                alt={props.heading}
                width={400}
                height={450}
                className="w-full h-full object-cover rounded-xl"
              />
            ) : (
              <div className="w-full h-full rounded-xl overflow-hidden">
                {props.image}
              </div>
            )}
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">{props.heading}</h3>
            <p className="text-[#0084d4] text-sm mb-4">{props.description}</p>
            <a href={props.link}>
              <span className="text-purple-700 font-semibold text-sm hover:underline inline-flex items-center">
                Learn More <span className="ml-1">→</span>
              </span>
            </a>
          </div>
        </div>
      );

    case "core_values":
      return (
        <div className="bg-transparent flex flex-col justify-center items-start lg:gap-8 gap-4">
          {/* <p className="uppercase lg:text-base textt-sm text-[#0084d4]">
            {props.index}
          </p> */}
          <div className="flex flex-col justify-center items-start lg:gap-4 gap-2">
            <h2 className="lg:text-lg md:text-base text-sm font-bold text-[#0084d4]">
              {props.heading}
            </h2>
            <p className="lg:text-2xl md:text-lg text-base font-light">
              {props.description}
            </p>
          </div>
        </div>
      );

    case "custom":
      <></>;

    default:
      return <></>;
  }
};

export default Card;
