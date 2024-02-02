import Image, { StaticImageData } from "next/image";

export const ProjectImage = ({
  src,
  alt,
  href,
}: Readonly<{ src: StaticImageData; alt: string; href: string }>) => (
  <a href={href} target="_blank" rel="noreferrer">
    <button
      className="w-36 h-28 md:w-72 md:h-44 hover:bg-zinc-800 rounded-2xl"
      type="button"
    >
      <Image src={src} alt={alt} layout="responsive" width={500} height={300} />
    </button>
  </a>
);
