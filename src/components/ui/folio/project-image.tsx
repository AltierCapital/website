"use client";
import { cn } from "@/utils/classnames";
import Image, { StaticImageData } from "next/image";
import React, { MouseEvent, useState } from "react";

type Props = {
  readonly src: StaticImageData;
  readonly alt: string;
  readonly href: string;
  readonly btnClasses?: string;
};

export const ProjectImage = ({ src, alt, href, btnClasses }: Props) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (event: MouseEvent) => {
    if (isHovered) {
      // Update position on hover
      setPosition({
        x: event.nativeEvent.offsetX,
        y: event.nativeEvent.offsetY,
      });
    }
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <a href={href} target="_blank" rel="noreferrer">
      <button
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={cn(
          "w-56 h-28 md:w-72 md:h-44 bg-transparent  rounded-2xl relative p-6 overflow-hidden",
          btnClasses,
          { "group-hover:overflow-visible": isHovered }, // Glow effect on hover
        )}
        type="button"
        style={{
          backgroundImage: isHovered
            ? `radial-gradient(circle at ${position.x}px ${position.y}px, rgba(100,   100,   100,   0.5), transparent   80%)`
            : undefined,
        }}
      >
        <Image src={src} alt={alt} className="w-full h-full object-contain" />
      </button>
    </a>
  );
};
