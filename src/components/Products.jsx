import { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";

const Products = () => {
  let data = [
    {
      name: "Ingenuity",
      des: "This refers to the ability to think creatively and come up with innovative solutions or ideas.",
      btn1: true,
      btn2: false,
    },
    {
      name: "Imagination",
      des: "The faculty or action of forming new ideas, images, or concepts that are not present to the senses.",
      btn1: true,
      btn2: false,
    },
    {
      name: "Originality",
      des: "The quality of being novel or unique, characterized by a departure from traditional or common ideas or methods.",
      btn1: true,
      btn2: false,
    },
    {
      name: "Inspiration",
      des: "The process of being mentally stimulated to do or feel something creative, often resulting in the generation of new ideas or artistic expressions.",
      btn1: true,
      btn2: true,
    },
    {
      name: "Innovation",
      des: "The introduction of something new or the modification of existing ideas, processes, or products to improve upon them or create something entirely novel.",
      btn1: true,
      btn2: true,
    },
    {
      name: "Improvization",
      des: "The act of creating or performing spontaneously, without preparation, often leading to innovative or unexpected outcomes.",
      btn1: true,
      btn2: true,
    },
    {
      name: "Resourceful",
      des: "The ability to find quick and clever ways to overcome difficulties or challenges, often using available resources effectively.",
      btn1: true,
      btn2: true,
    },
    {
      name: "Gallery",
      des: "A digital collection of photographs displayed on a website, usually arranged by theme, style, or event.",
      btn1: true,
      btn2: true,
    },
  ];

  const color = [
    "bg-sky-400 text-black",
    "bg-violet-500",
    "bg-sky-600 text-black",
    "bg-purple-800",
    "bg-green-600 text-black",
    "bg-orange-600",
    "bg-yellow-400 text-black",
    "bg-red-600",
  ];

  const [pos, setPos] = useState(0);

  function mover(val) {
    setPos(val * 18);
  }

  return (
    <div className="relative mt-20">
      {data.map((item, i) => (
        <Product
          key={i}
          name={item.name}
          des={item.des}
          btn1={item.btn1}
          btn2={item.btn2}
          mover={mover}
          index={i}
          color={color[i]}
        />
      ))}
      <div className="absolute top-0 w-full h-full pointer-events-none">
        <motion.div
          initial={{ y: 0, x: "-50%" }}
          animate={{ y: pos + "rem" }}
          transition={{ ease: [0, 0.55, 0.45, 1], duration: 0.6 }}
          className="absolute w-[30%] h-[18rem] left-[50%] overflow-y-hidden max-lg:w-full"
        >
          <motion.div
            animate={{ y: -pos + "rem" }}
            transition={{ ease: [0, 0.55, 0.45, 1], duration: 0.5 }}
            className="w-full h-full"
          >
            <video
              className="h-full w-full object-cover"
              src="v1.mp4"
              autoPlay
              muted
              loop
            ></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + "rem" }}
            transition={{ ease: [0, 0.55, 0.45, 1], duration: 0.5 }}
            className="w-full h-full"
          >
            <video
              className="h-full w-full object-cover"
              src="v2.mp4"
              autoPlay
              muted
              loop
            ></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + "rem" }}
            transition={{ ease: [0, 0.55, 0.45, 1], duration: 0.5 }}
            className="w-full h-full "
          >
            <video
              className="h-full w-full object-cover"
              src="v3.mp4"
              autoPlay
              muted
              loop
            ></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + "rem" }}
            transition={{ ease: [0, 0.55, 0.45, 1], duration: 0.5 }}
            className="w-full h-full "
          >
            <video
              className="h-full w-full object-cover"
              src="v4.mp4"
              autoPlay
              muted
              loop
            ></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + "rem" }}
            transition={{ ease: [0, 0.55, 0.45, 1], duration: 0.5 }}
            className="w-full h-full "
          >
            <video
              className="h-full w-full object-cover"
              src="v5.mp4"
              autoPlay
              muted
              loop
            ></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + "rem" }}
            transition={{ ease: [0, 0.55, 0.45, 1], duration: 0.5 }}
            className="w-full h-full "
          >
            <video
              className="h-full w-full object-cover"
              src="v6.mp4"
              autoPlay
              muted
              loop
            ></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + "rem" }}
            transition={{ ease: [0, 0.55, 0.45, 1], duration: 0.5 }}
            className="w-full h-full "
          >
            <video
              className="h-full w-full object-cover"
              src="v7.mp4"
              autoPlay
              muted
              loop
            ></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + "rem" }}
            transition={{ ease: [0, 0.55, 0.45, 1], duration: 0.5 }}
            className="w-full h-full bg-sky-900"
          >
            <video
              className="h-full w-full object-cover"
              src="v8.mp4"
              autoPlay
              muted
              loop
            ></video>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Products;
