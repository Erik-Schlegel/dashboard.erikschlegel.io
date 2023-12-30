import React from "react";
import classNames from "classnames";

import styles from "./button.module.css";

type ButtonProps = {
   text: string;
   onClick?: () => void;
   type?: "primary" | "secondary" | "disabled";
};

/* prettier-ignore */
const Button = ({ text, onClick, type='primary' }: ButtonProps) =>
{
   return (
      <button onClick={onClick} className={classNames(styles.button, styles[type])}>
         {text}
      </button>
   );
};

export default Button;
