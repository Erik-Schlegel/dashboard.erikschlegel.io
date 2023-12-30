import React from "react";
import classNames from "classnames";

import styles from "./header.module.css";
import IconLogo from "_atoms/iconlogo/iconlogo";

type HeaderProps = {
   className?: string;
};

const Header = ({ className }: HeaderProps) => {
   return (
      <header className={classNames(styles.header, className)}>
         <IconLogo />
         <h1 className={styles.heading}>eschware</h1>
      </header>
   );
};

export default Header;
