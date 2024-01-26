import Image from "next/image";

export const ProjectImage = ({ src, alt }) => (
  <div className="w-36 md:w-72">
    <Image src={src} alt={alt} layout="responsive" width={500} height={300} />
  </div>
);
