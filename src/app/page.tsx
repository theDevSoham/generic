import Header from "@/components/pages/Homepage/Header";
import SubFooter from "@/components/ui/SubFooter";
import WhyWorkWithUs from "@/components/pages/Homepage/WhyWorkWithUs";
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
      {/* <MiddleCallToAction /> */}
      <ValueProposition />
      <WhyWorkWithUs />
      <SubFooter />
      <Footer />
    </main>
  );
};

export default App;
