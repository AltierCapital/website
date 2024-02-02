"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Altitude from "~/images/projects/altitude.png";
import Granted from "~/images/projects/granted.png";

export function Projects() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="projects"
    >
      <div className="bg-[#3f40426d] flex flex-row items-center justify-center h-24 space-x-24">
        <a href="https://twitter.com/altitudexyz">
          <Image src={Altitude} alt="atlitude logo" />
        </a>
        <a href="https://www.isgranted.com/">
          <Image src={Granted} alt="Granted logo" />
        </a>
      </div>
    </motion.section>
  );
}
