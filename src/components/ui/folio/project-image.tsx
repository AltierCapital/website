import { cn } from "@/utils/classnames";
import Image, { StaticImageData } from "next/image";

type Props = {
  readonly src: StaticImageData;
  readonly alt: string;
  readonly href: string;
  readonly btnClasses?: string;
};

export const ProjectImage = ({ src, alt, href, btnClasses }: Props) => (
  <a href={href} target="_blank" rel="noreferrer">
    <button
      className={cn(
        "w-56 h-28 md:w-72 md:h-44 bg-transparent hover:bg-zinc-200/10 rounded-2xl relative p-6 transition-all duration-150 ease-in-out",
        btnClasses,
      )}
      type="button"
    >
      <Image src={src} alt={alt} className="w-full h-full object-contain" />
    </button>
  </a>
);
