import { HomeCirclesBackground } from "@/app/(home)/circles";
import { GradientButton } from "@/components/ui/gradient-button";
import Image from "next/image";
import Link from "next/link";
import SparklesImage from "~/images/sparkles.png";

const Home = () => (
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

      <p className="text-white max-w-xl text-center text-sm md:text-base lg:text-lg px-10">
        Where the vanguard of finance intersects with the innovation of Web3.
        Experience privileged access to the most groundbreaking Web3 ventures.
        Are you prepared to lead and shape the future of financial innovation?
      </p>

      <div className="flex gap-x-4">
        {/* <Button variant="secondary">Portfolio</Button> */}

        <Link href="https://discord.com/invite/altiercapital">
          <GradientButton>Contact us</GradientButton>
        </Link>
      </div>
    </div>
  </div>
);

export default Home;
