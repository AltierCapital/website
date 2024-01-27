import { Idea } from "@/components/ui/about/idea-presentation";
import { PlanetImage } from "@/components/ui/about/planet-image";
import Blue from "~/images/planets/blue.png";
import Green from "~/images/planets/green.png";
import Ochre from "~/images/planets/ochre.png";
import Red from "~/images/planets/red.png";

export function About(): JSX.Element {
  return (
    <div className="flex flex-col px-96">
      <div className="flex flex-row justify-between items-center ">
        <Idea
          title="Our vision"
          description="vision du penki"
          subDescription="annotation sur la vision du penki"
        />
        <PlanetImage src={Red} alt={"red planet"} />
      </div>

      <div className="flex flex-row justify-between items-center ">
        <PlanetImage src={Blue} alt={"blue planet"} />
        <Idea
          title="Our members"
          description="goats"
          subDescription="annotation sur les brodgis "
        />
      </div>

      <div className="flex flex-row justify-between items-center ">
        <Idea
          title="Text "
          description="lorem ipsum "
          subDescription="mini lorem ipsum et dolor is amet "
        />
        <PlanetImage src={Green} alt={"green planet"} />
      </div>

      <div className="flex flex-row justify-between items-center ">
        <PlanetImage src={Ochre} alt={"ochre planet"} />

        <Idea
          title="Ts"
          description="This is a very long description that spans multiple lines and contains a lot of character"
          subDescription="lorem ipsum et dolor is amet altier culte against the fed"
        />
      </div>
    </div>
  );
}
