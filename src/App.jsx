import { Impressum } from "./components/impressum";
import { Home } from "./components/home";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import { Routes, Route } from "react-router-dom";

export const scroll = new SmoothScroll('Link[to*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});


export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/impressum" element={<Impressum />} />
      </Routes>
    </div>
  );
}

