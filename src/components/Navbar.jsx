import Logo from "../assets/Logo.png";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.div
      className={`w-full fixed top-0 h-32 bg-transparent bg-gradient-to-b from-black to-transparent bg-opacity-70 overflow-hidden p-6 px-8 flex flex-grow-0 z-50 items-center justify-around `}
    >
      <h1 className="cursor-pointer lg:block hidden">ABOUT</h1>
      <h1 className="cursor-pointer lg:block hidden">EVENTS</h1>
      <img src={Logo} className="h-full" />
      <h1 className="cursor-pointer lg:block hidden">GALLERY</h1>
      <h1 className="cursor-pointer lg:block hidden">BENEFITS</h1>
    </motion.div>
  );
}
