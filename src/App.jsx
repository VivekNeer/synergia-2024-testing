import React, { useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import { motion, MotionConfig, useScroll, useTransform } from "framer-motion";
import Logo from "./components/Logo";
import TitleHeader from "./components/TitleHeader";

export default function App() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <div>
      <Navbar opacity={opacity} />
      <motion.div
        className="h-screen relative flex justify-center items-center"
        ref={containerRef}
      >
        <Logo />
      </motion.div>
      <motion.div className="w-full md:px-14 lg:px-44 px-4 pt-16 min-h-screen">
        <MotionConfig
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div className="flex flex-col items-start text-start pb-32">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="md:text-5xl max-w-3xl w-4/5 text-3xl font-normal"
              style={{ lineHeight: 1.2 }}
            >
              A platform where brilliant minds meet to redefine the future
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="md:text-2xl max-w-xl w-4/5 text-lg py-6 font-light text-zinc-300"
            >
              A platform where brilliant minds meet to redefine the future A
              platform where brilliant minds meet to redefine the future A
              platform where brilliant minds meet to redefine the future A
              platform where brilliant minds meet to redefine the future
            </motion.p>
          </motion.div>

          <motion.div className="flex flex-col items-end text-end py-32">
            <motion.h1
              className="md:text-5xl max-w-3xl w-4/5 text-3xl font-normal"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              style={{ lineHeight: 1.2 }}
            >
              A platform where brilliant minds meet to redefine the future
            </motion.h1>
            <motion.p
              className="md:text-2xl max-w-xl w-4/5 text-lg py-6 font-light text-zinc-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              A platform where brilliant minds meet to redefine the future A
              platform where brilliant minds meet to redefine the future A
              platform where brilliant minds meet to redefine the future A
              platform where brilliant minds meet to redefine the future
            </motion.p>
          </motion.div>

          <motion.div className="flex flex-col items-center text-center py-32">
            <motion.h1
              className="md:text-5xl max-w-3xl w-4/5 text-3xl font-normal"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              style={{ lineHeight: 1.2 }}
            >
              A platform where brilliant minds meet to redefine the future
            </motion.h1>
            <motion.p
              className="md:text-2xl max-w-xl w-4/5 text-lg py-6 font-light text-zinc-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              A platform where brilliant minds meet to redefine the future A
              platform where brilliant minds meet to redefine the future A
              platform where brilliant minds meet to redefine the future A
              platform where brilliant minds meet to redefine the future
            </motion.p>
          </motion.div>
        </MotionConfig>
      </motion.div>
      <motion.div className="w-full md:px-14 lg:px-44 px-4 py-16 min-h-screen">
        <MotionConfig
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <TitleHeader
            gradientColors={["blue", "purple", "violet"]}
            title={"SSTH"}
          />
        </MotionConfig>
      </motion.div>
      <motion.div className="w-full md:px-14 lg:px-44 px-4 py-16 min-h-screen">
        <MotionConfig
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <TitleHeader
            gradientColors={["lime", "green", "darkgreen"]}
            title={"Devhost"}
          />
        </MotionConfig>
      </motion.div>
      <motion.div className="w-full md:px-14 lg:px-44 px-4 py-16 min-h-screen">
        <MotionConfig
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <TitleHeader
            gradientColors={["yellow", "orange", "red"]}
            title={"SRC"}
          />
        </MotionConfig>
      </motion.div>
    </div>
  );
}
