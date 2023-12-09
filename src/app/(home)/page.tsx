import { Button } from "@/components/ui/button";
import Image from "next/image";
import SphereImage from "~/images/sphere.svg";

const Home = () => (
  <>
    <div className="absolute h-full w-full bottom-0 flex items-end">
      <div className="relative mx-auto max-h-64">
        <Image
          src={SphereImage}
          alt="Globe Sphere"
          className="object-contain w-full h-full bottom-0"
        />
      </div>
    </div>
    <section className="w-full h-full flex flex-col justify-center items-center gap-y-8 z-10">
      <h1 className="text-transparent bg-clip-text bg-gradient-to-b from-gray-300 to-gray-700 text-4xl md:text-5xl lg:text-6xl font-clashGrotesk font-medium">
        Altier Capital{" "}
        <span role="image" aria-label="sparkles" className="text-white">
          ✨
        </span>
      </h1>

      <p className="text-white max-w-xl text-center text-sm md:text-base px-10">
        Dive into the elite world of AC, where the future of finance meets the
        innovation of web3. Unlocking unparalleled access to groundbreaking web3
        ventures. Are you ready to be at the forefront of the financial
        revolution?
      </p>

      <div className="flex gap-x-4">
        <Button variant="secondary">Portfolio</Button>
        <Button>Contact us</Button>
      </div>
    </section>
  </>
);

export default Home;
