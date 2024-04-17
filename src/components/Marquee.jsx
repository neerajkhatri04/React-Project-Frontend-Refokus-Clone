/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

const Marquee = ({ url, from = "-100%", to = "0" }) => {
  return (
    <div className="flex w-full overflow-hidden">
      <motion.div
        initial={{ x: from }}
        animate={{ x: to }}
        transition={{ ease: "linear", duration: 20, repeat: Infinity }}
        className="flex mt-5 flex-shrink-0 gap-40 pr-32 pt-10 max-lg:gap-20 max-lg:pr-20 max-lg:pt-7"
      >
        {url.map((item, i) => {
          return <img key={i} src={item} alt="marquee img" />;
        })}
      </motion.div>
      <motion.div
        initial={{ x: from }}
        animate={{ x: to }}
        transition={{ ease: "linear", duration: 20, repeat: Infinity }}
        className="flex mt-5 flex-shrink-0 gap-40 pr-32 pt-10 max-lg:gap-20 max-lg:pr-20 max-lg:pt-7"
      >
        {url.map((item, i) => {
          return <img key={i} src={item} alt="marquee img" />;
        })}
      </motion.div>
    </div>
  );
};

export default Marquee;
