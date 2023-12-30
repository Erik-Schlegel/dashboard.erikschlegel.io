import React from "react";

type IconProps = {
   src: string;
   alt: string;
   width?: number;
   height?: number | "auto";
};

const Icon = ({ src, alt, width = 44, height = "auto" }: IconProps) => (
   <img src={src} alt={alt} width={width} height={height} />
);

export default Icon;
