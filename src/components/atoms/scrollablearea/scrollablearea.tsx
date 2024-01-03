import React from "react";
import classNames from "classnames";

import styles from "./scrollablearea.module.css";

type ScrollableAreaProps = {
   children: React.ReactNode;
   className?: string;
};

/* prettier-ignore */
const ScrollableArea = ({ children, className }: ScrollableAreaProps) =>
{
   return (
      <div className={classNames(styles.scrollableArea, className)}>
         {children}
      </div>
   );
};

export default ScrollableArea;
