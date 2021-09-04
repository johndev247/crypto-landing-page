import React from "react";
import About from "../../components/about/About";
import Gadgets from "../../components/gadgets/Gadgets";
import HeroSection from "../../components/hero/HeroSection";
import Navbar from "../../components/navbar/Navbar";
import {HomePage} from "./home.style";

const Home = () => {
  return (
    <HomePage>
      <Navbar />
      <HeroSection />
      <About />
      <Gadgets />
      <Navbar text="Biya Coin 2021" />
    </HomePage>
  );
};

export default Home;
