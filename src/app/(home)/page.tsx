"use client";
import { HomeCirclesBackground } from "@/app/(home)/circles";
import { About } from "@/components/ui/about/about";
import { Button } from "@/components/ui/button";
import { Portfolio } from "@/components/ui/folio/portfolio";
import { GradientButton } from "@/components/ui/gradient-button";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import SkyBackground from "~/images/sky-background.svg";
import SparklesImage from "~/images/sparkles.png";

const Home = () => (
  <>
    <Image
      src={SkyBackground}
      alt="Sky Background"
      className="object-cover w-full h-full absolute top-1 left-0 z-0"
    />

    <div className="relative w-screen h-screen overflow-hidden">
      <HomeCirclesBackground />
      <div className="w-full h-full flex flex-col justify-center items-center gap-y-8 z-10">
        <div className="flex flex-nowrap">
          <h1 className="text-transparent bg-clip-text bg-gradient-to-b from-gray-50 to-gray-500/20 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-clashGrotesk font-medium">
            Altier Capital{" "}
          </h1>

          <div className="w-9 h-9 md:w-12 md:h-12 lg:w-14 lg:h-14 relative ml-2">
            <Image
              src={SparklesImage}
              width={56}
              height={56}
              alt="sparkles"
              className="object-contain aspect-square w-full h-full"
            />
          </div>
        </div>

        <div className="text-white max-w-xl text-center text-sm md:text-base lg:text-lg px-10">
          <p>
            Where the vanguard of finance intersects with the innovation of
            Web3. Experience privileged access to the most groundbreaking Web3
            ventures.
          </p>
          <p>
            Are you prepared to lead and shape the future of financial
            innovation?
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-y-4 gap-x-4">
          <Button
            variant="secondary"
            onClick={() =>
              document
                .getElementById("portfolio")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Portfolio
          </Button>

          <Link href="/contact">
            <GradientButton>Contact us</GradientButton>
          </Link>
        </div>
      </div>
    </div>

    <Image
      src={SkyBackground}
      alt="Sky Background"
      className="object-cover w-full h-full absolute top-full left-0 z-0"
    />
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="portfolio"
    >
      <div className="relative w-full h-full overflow-hidden">
        <div className="flex justify-center items-center">
          <h1 className="text-transparent bg-clip-text bg-gradient-to-b from-gray-50 to-gray-500/20 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-clashGrotesk font-medium">
            Porfolio
          </h1>
        </div>
      </div>
      <div className="mt-16 flex justify-center items-center">
        <Portfolio />
      </div>
    </motion.section>

    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="vision"
    >
      <About />
    </motion.section>
  </>
);

export default Home;
