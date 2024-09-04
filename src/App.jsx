import React, { useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import { motion, useScroll, useTransform } from "framer-motion";
import Logo from "./components/Logo";
import Logo1 from "../src/assets/test.svg";

export default function App() {
  return (
    <div>
      <Navbar />
      <div className="h-screen relative flex justify-center items-center">
        <Logo />
      </div>
      <div className="h-screen"></div>
      <div className="h-screen"></div>
    </div>
  );
}
