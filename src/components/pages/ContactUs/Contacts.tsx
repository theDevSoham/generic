import Button from "@/components/ui/Button";
import { container } from "@/constants/tailwind_customizations";
import React from "react";

const Contacts = () => {
  return (
    <section
      id="contact"
      className={`${container} w-full bg-transparent flex flex-col lg:flex-row lg:py-20 py-10 relative lg:gap-0 gap-10 min-h-[600px]`}
    >
      <div className="flex-1 flex flex-col lg:gap-6 gap-4 ">
        <h2 className="lg:text-4xl md:text-2xl text-xl font-semibold">
          Short heading for the Contact Us Section Will Be Here
        </h2>
        <h3 className="lg:text-lg md:text-base text-base font-normal">
          We will write a sub-headline for the Contact Us Section here
        </h3>
        <address className="lg:text-lg md:text-base text-base font-normal">
          A: 2360 Hood Avenue, San Diego, CA, 92123
        </address>
        <a
          className="lg:text-lg md:text-base text-base font-normal"
          href="tel:+919049591604"
        >
          P: 9049591604
        </a>
        <a
          className="lg:text-lg md:text-base text-base font-normal"
          href="mailto:Sales@niathadvisory.com"
        >
          E: Sales@niathadvisory.com
        </a>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <div className="lg:absolute lg:-top-30 lg:right-30 xl:-right-20 lg:z-6 xl:w-1/2 lg:w-2/5 bg-white w-full lg:p-10 p-6 flex flex-col lg:gap-10 gap-6 justify-start items-start">
          <p className="uppercase lg:text-base text-sm text-[#0084d4]">
            Prefix for the Contact Form section will be here
          </p>

          <p className="lg:text-2xl md:text-xl text-base font-semibold">
            Short heading for the Contact Form Section Will be Here
          </p>
          <form
            action="https://formspree.io/f/xanjkyop"
            method="POST"
            className="flex flex-col w-full lg:gap-6 gap-4"
          >
            <div>
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="John Doe"
                required
              />
            </div>
            <div>
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="john.doe@example.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Your message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Write your thoughts here..."
              ></textarea>
            </div>

            <div className="w-full lg:w-3/5">
              <Button type="primary" label="Submit Form" buttonType="submit" />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
