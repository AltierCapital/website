import Image from "next/image";
import Altitude from "~/images/projects/altitude.png";
import Granted from "~/images/projects/granted.png";

export function Projects() {
  return (
    <div className="bg-[#3f40426d] flex flex-row items-center justify-center h-24 space-x-24">
      <Image src={Altitude} alt={"atlitude logo"} />
      <Image src={Granted} alt={"Granted logo"} />
    </div>
  );
}
