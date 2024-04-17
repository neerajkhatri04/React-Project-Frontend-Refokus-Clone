import { motion } from "framer-motion";
import { IoIosArrowRoundForward } from "react-icons/io";

// eslint-disable-next-line react/prop-types
const Card = ({ width, heading, para, text, hover = 0 }) => {
  return (
    <motion.div
      whileHover={{
        backgroundColor: hover ? "#7443ff" : "#3E3E46",
        padding: "25px",
      }}
      className={`font-[gilroy] h-[60vh] flex flex-col justify-between rounded-xl bg-zinc-800 text-white p-4 ${width} max-lg:w-full max-lg:h-full max-lg:mt-4`}
    >
      <div className="max-lg:mb-[40%]">
        <div className="flex justify-between p-2">
          <p className=" text-sm">Up Next: News</p>

          <IoIosArrowRoundForward className="w-4" />
        </div>
        <h1 className="text-3xl font-medium w-[80%] p-2 mt-4">{text}</h1>
      </div>
      <div>
        {heading && (
          <div className="max-lg:flex max-lg:justify-between">
            <h1 className="text-[6vw] font-medium tracking-wide">
              Start a Project
            </h1>
            <button className="w-32 h-12 font-medium border-[1px] border-white rounded-full">
              Contact Us
            </button>
          </div>
        )}
        {para && (
          <p className="text-sm opacity-50">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        )}
      </div>
    </motion.div>
  );
};

export default Card;
