/* eslint-disable no-unused-vars */
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Marquees from "./components/Marquees";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Showcase from "./components/Showcase";
import Stripes from "./components/Stripes";
import LocomotiveScroll from "locomotive-scroll";

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className="h-full w-full bg-zinc-900 overflow-hidden">
      <Navbar />
      <Showcase />
      <Stripes />
      <Products />
      <Marquees />
      <Cards />
      <Footer />
    </div>
  );
};

export default App;
