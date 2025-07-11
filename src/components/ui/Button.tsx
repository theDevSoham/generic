"use client";

import React from "react";

const clientSideInteractions = {
  scrollToTop: () => window.scrollTo({ top: 0, behavior: "smooth" }),
  reloadPage: () => location.reload(),
} as const;

type PredefinedInteraction = keyof typeof clientSideInteractions;

interface IButtonBase {
  type: "primary" | "default" | "buttonLink" | "linkButton" | "link" | "icon";
  label: React.ReactNode;
}

type WithClick = {
  predefinedInteraction?: never;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

type WithPredefined = {
  predefinedInteraction?: PredefinedInteraction;
  onClick?: never;
};

type ButtonAction = WithClick | WithPredefined;

type IButtonProps =
  | (IButtonBase &
      ButtonAction & { type: "primary" | "default" | "buttonLink" })
  | (IButtonBase &
      WithPredefined & { type: "link" | "linkButton"; link: string })
  | (IButtonBase &
      (WithClick | WithPredefined) & { type: "icon"; link?: string });

const Button: React.FC<IButtonProps> = (props) => {
  const { type, label } = props;

  // unified click handler for all button types
  const handleClick =
    "predefinedInteraction" in props && props.predefinedInteraction
      ? clientSideInteractions[props.predefinedInteraction]
      : "onClick" in props
      ? props.onClick
      : undefined;

  switch (type) {
    case "primary":
      return (
        <button
          onClick={handleClick}
          className="lg:px-6 lg:py-3 px-4 py-2 rounded-md bg-[#F15808] text-white font-semibold hover:animate-[fade-out-button_0.3s_ease-in-out_forwards] cursor-pointer"
        >
          {label}
        </button>
      );

    case "default":
      return (
        <button
          onClick={handleClick}
          className="lg:px-6 lg:py-3 px-4 py-2 rounded-md bg-gray-200 text-black font-medium hover:bg-gray-300"
        >
          {label}
        </button>
      );

    case "buttonLink":
      return (
        <button
          onClick={handleClick}
          className="lg:px-6 lg:py-3 px-4 py-2 text-[#FF6210] font-semibold underline hover:no-underline"
        >
          {label}
        </button>
      );

    case "link":
      return (
        <a
          href={props.link}
          className="text-blue-600 hover:underline font-medium"
        >
          {label}
        </a>
      );

    case "linkButton":
      return (
        <a
          href={props.link}
          className="lg:px-6 lg:py-3 px-4 py-2 rounded-md bg-[#FF6210] text-[#fff] font-semibold hover:animate-[fade-button_0.3s_ease-in-out_forwards] cursor-pointer"
        >
          {label}
        </a>
      );

    case "icon":
      return (
        <button
          onClick={
            "predefinedInteraction" in props && props.predefinedInteraction
              ? clientSideInteractions[props.predefinedInteraction]
              : "onClick" in props
              ? props.onClick
              : undefined
          }
          className="flex items-center justify-center w-10 h-10 rounded-full bg-[#F15808] hover:bg-[#FF6210] transition duration-200 text-white cursor-pointer"
          aria-label="Icon button"
        >
          {props.link ? (
            <a
              href={props.link}
              className="w-full h-full flex items-center justify-center"
            >
              {label}
            </a>
          ) : (
            label
          )}
        </button>
      );

    default:
      return null;
  }
};

export default Button;
