import { easeIn, motion, useAnimation } from "framer-motion";
import React from "react";

function Featured() {
  const cards = [
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
  ];

  const handleHover = (index) => {
    cards[index].start({ y: "0" });
  };

  const handleHoverEnd = (index) => {
    cards[index].start({ y: "100%" });
  };

  return (
    <div className="w-full py-20 bg-gray-400">
      <div className="w-full px-[4.5vw] border-b-[1px] border-zinc-700 pb-10">
        <h1 className="text-[4.5vw] font-semibold"> INSIGHTS -</h1>
      </div>
      <div className="cards w-full flex gap-[4vw] pt-[6vw] px-[4.5vw] ">
        <motion.div
          onHoverStart={() => handleHover(0)}
          onHoverEnd={() => handleHoverEnd(0)}
          className="card relative w-1/2 h-[70vh]"
        >
          <h1 className="absolute flex overflow-hidden left-full -translate-x-1/2 -translate-y-1/2 top-1/2 text-[#CDEA68] z-[9] leading-none tracking-tighter text-[6vw] font-bold">
  {"STATS".split("").map((item, index) => (
    <motion.span
      key={index}  // Add key prop here
      initial={{ y: "100%" }}
      animate={cards[0]}
      transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}
      className="inline-block"
    >
      {item}
    </motion.span>
  ))}
</h1>

          <img
            className=" rounded-lg overflow-hidden "
            src="https://img.freepik.com/premium-vector/sample-cricket-statistics-player-stat-career-info_597133-784.jpg"
          ></img>
        </motion.div>

        <motion.div
          onHoverStart={() => handleHover(1)}
          onHoverEnd={() => handleHoverEnd(1)}
          className="card relative w-1/2 h-[70vh] "
        >
          <h1 className="absolute  flex overflow-hidden right-full translate-x-1/2  -translate-y-1/2  top-1/2 text-[#CDEA68] z-[9] leading-none tracking-tighter text-[7vw] font-bold">
            {"1 vs 1".split("").map((item, index) => (
              <motion.span
                key={index}
                initial={{ y: "100%" }}
                animate={cards[1]}
                transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}
                className="inline-block"
              >
                {item}
              </motion.span>
            ))}
          </h1>
          <img
            className=" rounded-lg overflow-hidden h-[62vh]"
            src="https://www.shutterstock.com/image-vector/1v1-260nw-660332524.jpg"
            alt="img"
          ></img>
        </motion.div>
      </div>

      <div className="cards w-full flex gap-[4vw] pt-[6vw] px-[4.5vw] ">
        <motion.div
          onHoverStart={() => handleHover(2)}
          onHoverEnd={() => handleHoverEnd(2)}
          className="card relative w-1/2 h-[70vh]"
        >
          <h1
            className="absolute flex overflow-hidden left-full -translate-x-1/2  -translate-y-1/2  top-1/2 text-[#CDEA68] z-[9] leading-none  
            tracking-tighter text-[6vw] font-bold"
          >
            {"MULTIPLAYER".split("").map((item, index) => (
              <motion.span
              key = {index}
                initial={{ y: "100%" }}
                animate={cards[2]}
                transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.09 }}
                className="inline-block"
              >
                {item}
              </motion.span>
            ))}
          </h1>
          <img
            className=" rounded-lg overflow-hidden h-[52vh] w-[90vh]"
            src="data:image/jpeg;base64,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"
          ></img>
        </motion.div>

        <motion.div
          onHoverStart={() => handleHover(3)}
          onHoverEnd={() => handleHoverEnd(3)}
          className="card relative w-1/2 h-[70vh] "
        >
          <h1 className="absolute flex overflow-hidden right-full translate-x-1/2  -translate-y-1/2  top-1/2 text-[#CDEA68] z-[9] leading-none tracking-tighter text-[6vw] font-bold">
            {"TOURNAMENTS".split("").map((item, index) => (
              <motion.span
              key = {index}
                initial={{ y: "100%" }}
                animate={cards[3]}
                transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.09 }}
                className="inline-block"
              >
                {item}
              </motion.span>
            ))}
          </h1>
          <img
            className=" rounded-lg overflow-hidden h-[52vh] w-[100vh]"
            src="https://t3.ftcdn.net/jpg/04/94/65/34/360_F_494653408_L5XoC3iFVyKkVz5K7e9kbmKrv0iDMaNt.jpg"
            alt="img"
          ></img>
        </motion.div>
      </div>

      <div className="grid place-items-center pt-[1vw]">
        <button className="  group flex   gap-[2vw] items-center px-[2vw] py-[1.2vw] mt-[0.5vw] bg-zinc-800 rounded-full text-white  hover:bg-black ">
          And many more...
          <div className=" group-hover:scale-150 w-[0.8vw] h-[0.8vw] rounded-full bg-white"></div>
        </button>
      </div>
    </div>
  );
}

export default Featured;
