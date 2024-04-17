import { useState } from "react";
import Button from "./Button";

// eslint-disable-next-line react/prop-types
const Product = ({ name, des, btn1, btn2, mover, index, color }) => {
  function handleMouseEnter() {
    mover(index);
    setAnime(color);
  }

  function handleMouseLeave() {
    setAnime("");
  }

  const [anime, setAnime] = useState("");

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`w-full h-[18rem] text-white py-20 ${anime} max-lg:px-6`}
    >
      <div className="flex  justify-between items-center font-['gilroy']  max-w-screen-xl mx-auto">
        <div>
          <h1 className=" text-[8vh] font-medium max-lg:select-none max-lg:text-3xl">
            {name}
          </h1>
        </div>
        <div className="">
          <p className=" w-[50vh] font-medium mb-5 max-lg:select-none max-lg:w-[50vw] max-lg:text-right max-lg:text-sm max-lg:font-thin max-lg:tracking-tight max-lg:leading-2 max-lg:opacity-70">
            {des}
          </p>
          <div className="flex justify-between gap-6 max-lg:hidden">
            {btn1 && <Button text="Click me " />}
            {btn2 && <Button text="Case study" />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
