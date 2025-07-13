"use client";

import { libreFranklin } from "@/assets/fonts";
import { container } from "@/constants/tailwind_customizations";
import React, { useState } from "react";
import Button from "./Button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "About", link: "/about-us" },
  { id: 3, name: "Offerings", link: "/offerings" },
  { id: 4, name: "Contact", link: "/contact-us" },
];

interface INavBar {
  selectedRouteId?: number;
}

const Navbar: React.FC<INavBar> = ({ selectedRouteId = 1 }) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="w-full h-[100px] bg-transparent relative z-50">
        <div
          className={`${container} w-full h-full flex justify-between items-center`}
        >
          {/* <p
            className={`flex-1 text-left ${libreFranklin.className} font-semibold text-2xl`}
          >
            Generic
          </p> */}

          <div className="flex-1 flex justify-start items-center">
            <a href="/" className="w-18 h-18 md:w-20 md:h-20 lg:w-28 lg:h-28">
              <img
                src="images/logo.webp"
                alt="logo"
                className="w-full h-full oject-cover"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="flex-1 hidden lg:flex justify-evenly items-center">
            {navLinks.map((item) => (
              <a
                key={item.id}
                href={item.link}
                className={`font-medium ${
                  item.id === selectedRouteId ? "text-[#F15808]" : "text-white"
                } hover:animate-[fade-link_0.3s_ease_out_forwards]`}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Desktop Button */}
          <div className="flex-1 hidden lg:flex justify-end items-center">
            <Button
              type="linkButton"
              link="https://wa.me/+919049591604"
              label={
                <div className="flex justify-center items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    viewBox="0 0 24 24"
                    className="lg:w-6 lg:h-6 w-6 h-6"
                  >
                    <title>WhatsApp</title>
                    <path
                      fill="currentColor"
                      d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
                    />
                  </svg>
                  <span>Start enquiry</span>
                </div>
              }
            />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex-1 flex lg:hidden justify-end items-center">
            <Button
              type="icon"
              label={isMobileMenuOpen ? <X /> : <Menu />}
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            />
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-md p-6 flex flex-col gap-4 lg:hidden z-40 animate-[fade-in-down_0.3s_ease-out_forwards]">
            {navLinks.map((item) => (
              <a
                key={item.id}
                href={item.link}
                className={`text-lg font-medium ${
                  item.id === selectedRouteId ? "text-[#F15808]" : "text-black"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <Button
              type="linkButton"
              link="/contact-us/#contact"
              label="Start enquiry"
            />
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
