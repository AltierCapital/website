"use client";
import { ProjectImage } from "@/components/ui/folio/project-image";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
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
        <Link href={"https://twitter.com/altitudexyz"}>
          <Image src={Altitude} alt={"atlitude logo"} />
        </Link>
        <Link href={"https://www.isgranted.com/"}>
          <Image src={Granted} alt={"Granted logo"} />
        </Link>
      </div>
    </motion.section>
  );
}
