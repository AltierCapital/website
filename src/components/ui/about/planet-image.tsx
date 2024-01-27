import Image from "next/image";

export const PlanetImage = ({ src, alt }) => (
  <div className="w-52 md:w-80">
    <Image src={src} alt={alt} layout="responsive" width={500} height={300} />
  </div>
);
