import React from "react";
import Footer from "../components/footer";
import Contacts from "../components/contacts";
import Header from "../components/Header";
import { Toaster } from "react-hot-toast";
import ContactHeader from "./contactHeader";

export default function Page() {
  return (
    <section className="">
      <Header />
      <ContactHeader />
      <Contacts />
      <Footer />
      <Toaster position="bottom-center" reverseOrder={false} />
    </section>
  );
}
