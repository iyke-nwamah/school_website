import React from "react";
import AboutCard from "../about/AboutCard";
import HBlog from "./HBlog";
import HAbout from "./HAbout";
import Hero from "./hero/Hero";
import HPrice from "./HPrice";
import Testimonial from "./testimonial/Testimonial";

const Home = () => {
  return (
    <>
      <Hero />
      <AboutCard />
      <HAbout />
      <Testimonial />
      <HBlog />
      <HPrice />
    </>
  );
};

export default Home;
