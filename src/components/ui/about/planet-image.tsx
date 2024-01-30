import Image from "next/image";

export const PlanetImage = ({ src, alt }) => (
  <Image
    src={src}
    alt={alt}
    layout="responsive"
    width={500}
    height={300}
    className="w-40 md:w-80 max-w-lg"
  />
);
