import React from "react";

import IconLinkTodo from "_molecules/iconlinktodo/iconlinktodo";
import styles from "./navpanel.module.css";

/* prettier-ignore */
const NavPanel = () => {
   return (
      <div className={styles.navPanel}>
         <nav className={styles.navPanel__nav}>
            <IconLinkTodo />
         </nav>
         <div className={styles.navPanel__column}>
            <span className={styles.navPanel__handle}>
               &lt;
            </span>
         </div>
      </div>
   );
};

export default NavPanel;
