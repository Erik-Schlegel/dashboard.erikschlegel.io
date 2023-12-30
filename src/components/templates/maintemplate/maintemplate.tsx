import React from "react";

import Header from "_molecules/header/header";
import NavPanel from "_organisms/navpanel/navpanel";

import styles from "./maintemplate.module.css";

type MainTemplateProps = {
   children: React.ReactNode;
};

const MainTemplate = ({ children }: MainTemplateProps) => {
   return (
      <div data-theme="dark" className={styles.mainTemplate}>
         <Header className={styles.header} />
         <div className={styles.content}>
            <NavPanel />
            <main className={styles.content__main}>
               <h2>Todo</h2>
               <div className={styles.content__main__wrapper}>{children}</div>
            </main>
         </div>
      </div>
   );
};

export default MainTemplate;
