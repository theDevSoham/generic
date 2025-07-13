import { container } from "@/constants/tailwind_customizations";
import { Quote } from "lucide-react";
import React from "react";

const Testimonials = () => {
  return (
    <section
      className={`${container} w-full py-20 flex flex-col justify-center items-center gap-8 bg-transparent`}
    >
      <Quote className="w-[30px] h-[30px] text-[#0084d4] scale-x-[-1]" />
      <p className="font-semibold lg:text-2xl md:text-xl text-base text-center">
        &ldquo;We will write a hypothetical testimonial from a satisfied
        customer. You can replace this with actual testimonials from your
        clients. Testimonials are a great way to inspire potential customers to
        trust you.&rdquo;
      </p>
      <div className="flex gap-6 items-center">
        <p className="font-medium lg:text-xl md:text-base text-base text-[#0084d4] uppercase">
          - Testimonial Author Name
        </p>
      </div>
    </section>
  );
};

export default Testimonials;
