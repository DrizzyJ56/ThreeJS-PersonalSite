import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      Hero
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915eff]">Joel</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I am a FullStack Developer <br className="sm:block hidden" />I've
            had a love for computers and technology since I bought my first laptop
            back in 5th grade. I am a recent graduate of FullStack Academy.
          </p>
        </div>
      </div>
      {/* "absolute xl:mt-[3vh] w-[95vw] xs:h-[60vh] xs:mt-[35vh] lg:mt-[20vh] " */}
      <div className="absolute inset-0 mx-auto mt-[14rem]">
      <ComputersCanvas />
      </div>
      <div className="absolute xs:bottom-0 bottom-0 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[60px] rounded-3xl border-4 mt-1 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [2, 24, 2],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
