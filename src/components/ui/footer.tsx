import { Button } from "@/components/ui/button";
import { GradientButton } from "@/components/ui/gradient-button";
import Image from "next/image";
import Link from "next/link";
import Altier from "~/images/logo-sm.png";

export function Footer() {
  return (
    <div className="w-full flex flex-row justify-center items-center mt-40">
      <hr className="border-gray-500 border-1" />
      <div className="flex items-center justify-center">
        <Image src={Altier} alt="Altier Capital Logo" />
        <span className="text-gray-500">Powered by Altier Capital</span>
      </div>
    </div>
  );
}
