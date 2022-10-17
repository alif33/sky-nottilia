import React from "react";
import Banner from "./Banner";
import Faq from "./Faq";
import Features from "./Features";
import Pricing from "./Pricing";
import SpecialFeature from "./SpecialFeature";
import Subscribe from "./Subscribe";
import Testimonials from "./Testimonials";
import WhatNext from "./whatNext";

const Home = () => {
  return (
    <div>
      <Banner />
      <Features />
      <WhatNext />
      <SpecialFeature />
      <Pricing />
      <Faq />
      <Testimonials />
      <Subscribe />
    </div>
  );
};

export default Home;
