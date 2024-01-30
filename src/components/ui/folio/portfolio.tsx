import { ProjectImage } from "@/components/ui/folio/project-image";
import Image from "next/image";
import Avail from "~/images/folio/avail.png";
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
      <ProjectImage
        src={Celestia}
        alt={"celestia logo"}
        href={"https://celestia.org/"}
      />
      <button
        className="flex w-36 h-28 md:w-72 md:h-44 hover:bg-zinc-800 rounded-2xl items-center justify-center"
        type="button"
      >
        <a href="https://www.eigenlayer.xyz/">
          <Image
            className="w-20 md:w-36 "
            src={EigenLayer}
            alt={"eigen layer logo"}
          />
          {/* using a custom integration for eigen layer logo for a visual purpose (else too much space is taken by the square shaped logo)*/}
        </a>
      </button>

      <ProjectImage
        src={Maveric}
        alt={"maveric logo"}
        href={"https://www.mav.xyz/"}
      />

      <ProjectImage
        src={Goal3}
        alt={"Goal3 logo"}
        href={"https://goal3.xyz/"}
      />

      <ProjectImage src={Winr} alt={"winr logo"} href={"https://winr.games/"} />

      <ProjectImage
        src={Omnibot}
        alt={"omnibot x logo"}
        href={"https://www.omnibotx.io/"}
      />

      <ProjectImage
        src={Bitlight}
        alt={"bitlight logo"}
        href={"https://twitter.com/Bitlight_wallet"}
      />
      <button
        className="flex w-36 h-28 md:w-72 md:h-44 hover:bg-zinc-800 rounded-2xl items-center justify-center"
        type="button"
      >
        <a href="https://www.availproject.org/">
          <Image className="w-20 md:w-36" src={Avail} alt={"avail logo"} />
        </a>
      </button>
      <ProjectImage
        src={Printer}
        alt={"printer logo"}
        href={"https://print3r.xyz/#/home"}
      />
    </div>
  );
}
