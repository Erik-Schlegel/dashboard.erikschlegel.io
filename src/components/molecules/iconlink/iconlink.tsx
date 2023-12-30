import React from "react";

import Icon from "_atoms/icon/icon";
import styles from "./iconlink.module.css";

type IconLinkProps = {
   onClick?: () => void;
   text: string;
   src: string;
   alt: string;
   width?: number;
};

const IconLink = ({ onClick, text, src, alt, width = 30 }: IconLinkProps) => {
   return (
      <div className={styles.iconLink} onClick={onClick}>
         <Icon src={src} alt={alt} width={width} />
         <span className={styles.iconLink__text}>{text}</span>
      </div>
   );
};

export default IconLink;
