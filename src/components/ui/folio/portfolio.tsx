import { FadeIn } from "@/components/ui/fade-in";
import { ProjectImage } from "@/components/ui/folio/project-image";
import Avail from "~/images/folio/avail.png";
import Bitlight from "~/images/folio/bitlight.png";
import Celestia from "~/images/folio/celestia.png";
import EigenLayer from "~/images/folio/eigen.png";
import Goal3 from "~/images/folio/goal3.png";
import Maveric from "~/images/folio/maveric.png";
import Omnibot from "~/images/folio/omnibot.png";
import Printer from "~/images/folio/printer.png";
import Winr from "~/images/folio/winr.png";

const PORTFOLIO_DATA = [
  {
    key: 0,
    src: Celestia,
    alt: "celestia logo",
    href: "https://celestia.org",
  },
  {
    key: 1,
    src: EigenLayer,
    alt: "eigen layer logo",
    href: "https://www.eigenlayer.xyz",
    btnClasses: "md:p-10",
  },
  {
    key: 2,
    src: Maveric,
    alt: "maveric logo",
    href: "https://www.mav.xyz",
  },
  {
    key: 3,
    src: Goal3,
    alt: "Goal3 logo",
    href: "https://goal3.xyz",
  },
  {
    key: 4,
    src: Winr,
    alt: "winr logo",
    href: "https://winr.games",
  },
  {
    key: 5,
    src: Omnibot,
    alt: "omnibot x logo",
    href: "https://www.omnibotx.io",
  },
  {
    key: 6,
    src: Bitlight,
    alt: "bitlight logo",
    href: "https://twitter.com/Bitlight_wallet",
  },
  {
    key: 7,
    src: Avail,
    alt: "avail logo",
    href: "https://www.availproject.org",
    btnClasses: "md:p-10",
  },
  {
    key: 8,
    src: Printer,
    alt: "printer logo",
    href: "https://print3r.xyz",
  },
] as const;

export function Portfolio() {
  return (
    <FadeIn id="portfolio">
      <div className="flex justify-center items-center">
        <h1 className="text-transparent bg-clip-text bg-gradient-to-b from-gray-50 to-gray-500/20 text-3xl md:text-5xl lg:text-6xl font-clashGrotesk font-medium">
          Porfolio
        </h1>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-x-64 gap-y-10 md:gap-y-32 mt-10 pt-8 pb-20 h-fit">
        {PORTFOLIO_DATA.map(({ key, ...project }) => (
          <ProjectImage key={key} {...project} />
        ))}
      </div>
    </FadeIn>
  );
}
