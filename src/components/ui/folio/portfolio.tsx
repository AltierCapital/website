import { ProjectImage } from "@/components/ui/folio/project-image";
import Image from "next/image";
import Bitlight from "~/images/folio/bitlight.png";
import Celestia from "~/images/folio/celestia.png";
import EigenLayer from "~/images/folio/eigen.png";
import Goal3 from "~/images/folio/goal3.png";
import Maveric from "~/images/folio/maveric.png";
import Omnibot from "~/images/folio/omnibot.png";
import Printer from "~/images/folio/printer.png";
import Winr from "~/images/folio/winr.png";

export function Portfolio() {
  return (
    <div className="flex flex-wrap justify-center items-center gap-x-64 gap-y-10 md:gap-y-32 mt-10  ">
      <ProjectImage src={Celestia} alt={"celestia logo"} />

      <Image
        className="w-20 md:w-36 mx-20"
        src={EigenLayer}
        alt={"eigen layer logo"}
      />
      {/* using a custom integration for eigen layer logo for a visual purpose (else too much space is taken by the square shaped logo)*/}

      <ProjectImage src={Maveric} alt={"maveric logo"} />

      <ProjectImage src={Goal3} alt={"Goal3 logo"} />

      <ProjectImage src={Winr} alt={"winr logo"} />

      <ProjectImage src={Omnibot} alt={"omnibot x logo"} />

      <ProjectImage src={Bitlight} alt={"bitlight logo"} />

      <ProjectImage src={Printer} alt={"printer logo"} />
    </div>
  );
}
