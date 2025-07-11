"use client";

import { container } from "@/constants/tailwind_customizations";
import React from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    testimonial:
      "We will write a hypothetical testimonial from a satisfied customer. You can replace this with actual testimonials from your clients. Testimonials are a great way to inspire potential customers to trust you.",
    author: "Testimonial Author Name",
    avatar: "images/mission.webp",
  },
  {
    id: 2,
    testimonial:
      "We will write a hypothetical testimonial from a satisfied customer. You can replace this with actual testimonials from your clients. Testimonials are a great way to inspire potential customers to trust you.",
    author: "Testimonial Author Name",
    avatar: "images/mission.webp",
  },
  {
    id: 3,
    testimonial:
      "We will write a hypothetical testimonial from a satisfied customer. You can replace this with actual testimonials from your clients. Testimonials are a great way to inspire potential customers to trust you.",
    author: "Testimonial Author Name",
    avatar: "images/mission.webp",
  },
  {
    id: 4,
    testimonial:
      "We will write a hypothetical testimonial from a satisfied customer. You can replace this with actual testimonials from your clients. Testimonials are a great way to inspire potential customers to trust you.",
    author: "Testimonial Author Name",
    avatar: "images/mission.webp",
  },
  {
    id: 5,
    testimonial:
      "We will write a hypothetical testimonial from a satisfied customer. You can replace this with actual testimonials from your clients. Testimonials are a great way to inspire potential customers to trust you.",
    author: "Testimonial Author Name",
    avatar: "images/mission.webp",
  },
  {
    id: 6,
    testimonial:
      "We will write a hypothetical testimonial from a satisfied customer. You can replace this with actual testimonials from your clients. Testimonials are a great way to inspire potential customers to trust you.",
    author: "Testimonial Author Name",
    avatar: "images/mission.webp",
  },
];

const Testimonials = () => {
  return (
    <section className="w-full bg-transparent lg:py-16 lg:py-24 py-10">
      <div
        className={`${container} w-full flex flex-col justify-center items-center lg:gap-20 gap-6`}
      >
        <h2 className="lg:text-4xl md:text-2xl text-xl font-medium">
          Short Heading for Testimonials Section Will be here
        </h2>

        <div className="w-full grid lg:grid-cols-3 grid-cols-1 lg:gap-16 gap-8">
          {testimonials.map((article) => (
            <article
              key={article.id}
              className="flex-1 flex flex-col justify-center items-start gap-4 bg-white lg:p-10 p-6 rounded-lg"
            >
              <Quote className="w-[30px] h-[30px] text-[#2ab6d0] scale-x-[-1]" />
              <p className="font-normal lg:text-base md:text-base text-base text-left">
                &ldquo;{article.testimonial}&rdquo;
              </p>
              <div className="flex gap-6 items-center">
                <p className="font-medium lg:text-base md:text-base text-base">
                  - {article.author}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
