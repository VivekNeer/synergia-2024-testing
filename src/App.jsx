import React, { useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import { motion, useScroll, useTransform } from "framer-motion";
import Logo from "../src/assets/Logo.png";

export default function App() {
  const imgRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: imgRef,
    offset: ["start start", "end start"],
  });

  const imageOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const navbarOpacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div>
      <Navbar navbarOpacity={navbarOpacity} />
      <div className="h-screen relative flex justify-center items-center">
        <motion.img src={Logo} ref={imgRef} style={{ opacity: imageOpacity }} />
      </div>
      <div className="h-screen"></div>
      <div className="h-screen"></div>
    </div>
  );
}
