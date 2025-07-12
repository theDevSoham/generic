import Header from "@/components/pages/Offerings/Header";
import SubFooter from "@/components/ui/SubFooter";
import React from "react";
import Footer from "@/components/ui/Footer";
import Testimonials from "@/components/pages/Offerings/Testimonials"

const AboutUs = () => {
  return (
    <main className="w-full">
      <Header />
	  <Testimonials />
      <SubFooter />
      <Footer />
    </main>
  );
};

export default AboutUs;
