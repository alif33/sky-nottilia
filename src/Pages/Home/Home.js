import React from "react";
import Banner from "./Banner";
import Faq from "./Faq";
import Features from "./Features";
import Footer from "./Footer";
import Pricing from "./Pricing";
import SpecialFeature from "./SpecialFeature";
import Subscribe from "./Subscribe";
import Testimonials from "./Testimonials";
import WhatNext from "./whatNext";

const Home = () => {
  return (
    <div className="bg-[#E5E3E3]">
      <Banner />
      <Features />
      <WhatNext />
      <SpecialFeature />
      <Pricing />
      <Faq />
      <Testimonials />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default Home;
