/* eslint-disable react/prop-types */
import { PiArrowBendDownRightBold } from "react-icons/pi";

const Button = ({ text = "Get Started" }) => {
  return (
    <button className="tracking-widest text-black font-[gilroy] w-40  px-3 py-2 rounded-full bg-zinc-100">
      <span className="font-medium text-sm flex items-center  justify-evenly">
        {text}
        <PiArrowBendDownRightBold />
      </span>
    </button>
  );
};

export default Button;
