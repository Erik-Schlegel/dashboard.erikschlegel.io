import React from "react";
import classNames from "classnames";

import styles from "./button.module.css";

type ButtonProps = {
   text?: string;
   children?: React.ReactNode;
   onClick?: () => void;
   type?: "primary" | "secondary" | "disabled" | "icon";
};

/* prettier-ignore */
const Button = ({ text='', children=null, onClick, type='primary' }: ButtonProps) =>
{
   return (
      <button onClick={onClick} className={classNames(styles.button, styles[type])}>
         {text}{children}
      </button>
   );
};

export default Button;
