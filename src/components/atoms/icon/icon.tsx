import React from "react";
import TypeIcon from "_types/typeicon";

const Icon = ({
   src,
   alt,
   width = 44,
   height = "auto",
   className,
}: TypeIcon) => (
   <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      color="white"
   />
);

export default Icon;
