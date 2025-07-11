import Header from "@/components/pages/AboutUs/Header";
import SubFooter from "@/components/ui/SubFooter";
import React from "react";
import Footer from "@/components/ui/Footer";
import Introduction from "@/components/pages/AboutUs/Introduction";
import Approaches from "@/components/pages/AboutUs/Approaches";

const AboutUs = () => {
  return (
    <main className="w-full">
      <Header />
      <Introduction />
	  <Approaches />
      <SubFooter />
      <Footer />
    </main>
  );
};

export default AboutUs;
