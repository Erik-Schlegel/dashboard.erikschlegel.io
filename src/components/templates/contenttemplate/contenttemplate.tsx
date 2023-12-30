import React from "react";

import styles from "./contenttemplate.module.css";

type ContentTemplateProps = {
   title: string;
   children: React.ReactNode;
};

/* prettier-ignore */
const ContentTemplate = ({ title, children }: ContentTemplateProps) =>
{
   return (
      <>
         <h2 className={styles.contentTemplate__title}>{title}</h2>
         <div className={styles.contentTemplate__wrapper}>{children}</div>
      </>
   );
};

export default ContentTemplate;
