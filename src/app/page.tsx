import Image from "next/image";
import Header from "./components/Header";
import Head from "next/head";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/about";
import Bar from "./components/bar";
import LastSlider from "./components/lastSlider";
import Reviews from "./components/reviews";
import Slider from "./components/slider";
import Footer from "./components/footer";
import { MenuContext } from "../../lib/context";
import { MenuProvider } from "../../lib/context";

export default function Home() {
  return (
    <main className="">
      <MenuProvider>
        <Header />
        <Hero />
        <Services />
        <About />
        <Bar />
        <LastSlider />
        <Reviews />
        <Slider />
        <Footer />
      </MenuProvider>
    </main>
  );
}
