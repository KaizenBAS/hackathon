import AboutUs from "../components/about-components/about";
import Header from "../components/about-components/aboutHeader";
import Companies from "../components/companies";
import Team from "../components/about-components/team";
import Video from "../components/about-components/video";
import Work from "../components/about-components/work";
import Footer from "../components/footer";
import React from "react";

const AboutPage = () => {
  return (
    <div className="bg-[#FFFFFF]">
      <Header />
      <AboutUs />
      <Video />
      <Team />
      <Companies />
      <Work />
      <Footer />
      </div>

  );
};

export default AboutPage;