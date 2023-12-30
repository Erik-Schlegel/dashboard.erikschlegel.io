import React from "react";

import styles from "./scrollablearea.module.css";

type ScrollableAreaProps = {
   children: React.ReactNode;
};

/* prettier-ignore */
const ScrollableArea = ({ children }: ScrollableAreaProps) =>
{
   return (
      <div className={styles.scrollableArea}>
         {children}
      </div>
   );
};

export default ScrollableArea;
