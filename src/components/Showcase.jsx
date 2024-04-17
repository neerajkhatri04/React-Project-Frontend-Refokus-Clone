import { useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

const Showcase = () => {
  const [data, setData] = useState([
    {
      url: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      top: "50%",
      left: "50%",
      isActive: false,
    },
    {
      url: "https://images.unsplash.com/photo-1706292732301-de9aa0294211?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://images.unsplash.com/photo-1706292732301-de9aa0294211?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      top: "50%",
      left: "50%",
      isActive: false,
    },
    {
      url: "https://images.unsplash.com/photo-1581403341630-a6e0b9d2d257?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      top: "50%",
      left: "50%",
      isActive: false,
    },
    {
      url: "https://images.unsplash.com/photo-1571513722275-4b41940f54b8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      top: "50%",
      left: "50%",
      isActive: false,
    },
    {
      url: "https://images.unsplash.com/photo-1562706553-a0e41eb8d066?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      top: "50%",
      left: "50%",
      isActive: false,
    },
    {
      url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      top: "56%",
      left: "50%",
      isActive: false,
    },

    // {
    //   url: "",
    //   top: "50%",
    //   left: "59%",
    //   isActive: false,
    // },
  ]);

  function handleScrollAnime(num) {
    const newData = data.map((item, i) => ({
      ...item,
      isActive: i < num + 1,
    }));
    setData(newData);
  }

  // function handleScrollAnime(arr) {
  //   setData((prev) =>
  //     prev.map((item, i) => ({
  //       ...item,
  //       isActive: arr.includes(i), // Check if index i is in the arr
  //     }))
  //   );
  // }

  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    let scrollNum = Math.floor(latest * 100);

    switch (scrollNum) {
      case 1:
        handleScrollAnime(-1);
        break;
      case 2:
        handleScrollAnime(0);
        break;
      case 3:
        handleScrollAnime(1);
        break;
      case 4:
        handleScrollAnime(2);
        break;
      case 5:
        handleScrollAnime(3);
        break;
      case 6:
        handleScrollAnime(4);
        break;
      case 7:
        handleScrollAnime(5);
        break;
    }
  });

  return (
    <div className="relative">
      <div className="flex justify-center max-w-screen-xl mx-auto text-white">
        <div className="select-none max-lg:h-[50vh]">
          <h1
            className="text-[55vh] font-medium pt-9 text-center font-['Montserrat'] max-lg:text-[20vh] max-lg:mt-12"
            style={{ textShadow: "0 0 10px #ffffff" }}
          >
            work
          </h1>
        </div>
        <div className="absolute h-full w-full">
          {data.map((item, i) => {
            return (
              item.isActive && (
                <img
                  key={i}
                  src={item.url}
                  className="absolute w-[40vh] z-10 translate-x-[-50%] translate-y-[-50%] max-lg:w-[18rem] max-lg:translate-y-[-30%]"
                  style={{ top: item.top, left: item.left }}
                ></img>
              )
            );
          })}
        </div>
      </div>

      <p className="absolute bottom-[10%] right-[50%] translate-x-[50%] font-['gilroy'] text-zinc-400 text-xl text-center max-lg:w-full max-lg:bottom-0 max-lg:text-sm max-lg:font-extralight">
        UI/UX Developer | Backend Developer | Problem Solver
      </p>
    </div>
  );
};

export default Showcase;
