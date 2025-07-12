import Header from "@/components/pages/ContactUs/Header";
import SubFooter from "@/components/ui/SubFooter";
import React from "react";
import Footer from "@/components/ui/Footer";
import Contacts from "@/components/pages/ContactUs/Contacts";

const ContactUs = () => {
  return (
    <main className="w-full">
      <Header />
      <Contacts />
      <SubFooter />
      <Footer />
    </main>
  );
};

export default ContactUs;
