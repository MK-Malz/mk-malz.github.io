import { useState, useEffect } from "react";
import { Navigation } from "./navigation";
import { Header } from "./header";
import { Introduction } from "./introduction";
import { About } from "./about";
import { Activities } from "./activities";
//import { Gallery } from "./components/gallery";
//import { Testimonials } from "./components/testimonials";
import { Team } from "./Team";
import { Contact } from "./contact";
import JsonData from "../data/data.json";
import SmoothScroll from "smooth-scroll";
import "../App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

export const Home = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <Introduction data={landingPageData.Introduction} />
      <About data={landingPageData.About} />
      <Activities data={landingPageData.Activities} />
      <Team data={landingPageData.Team} />
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

//export default Home;
