import Header from "@/components/pages/Homepage/Header";
import SubFooter from "@/components/ui/SubFooter";
import Testimonials from "@/components/pages/Homepage/Testimonials";
import ValueProposition from "@/components/pages/Homepage/ValueProposition";
import React from "react";
import Footer from "@/components/ui/Footer";
import CoreValues from "@/components/pages/Homepage/CoreValues";
import MiddleCallToAction from "@/components/pages/Homepage/MiddleCallToAction";

const App = () => {
  return (
    <main className="w-full">
      <Header />
      <CoreValues />
      <MiddleCallToAction />
      <ValueProposition />
      {/* <Testimonials />
      <SubFooter />
      <Footer /> */}
    </main>
  );
};

export default App;
