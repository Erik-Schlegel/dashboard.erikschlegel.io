import React from "react";
import classNames from "classnames";

import styles from "./inputtextarea.module.css";

type InputTextAreaProps = {
   name: string;
   label?: string;
   onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
   className?: string;
};

/* prettier-ignore */
const InputTextArea = ({ name, label, onChange, className }: InputTextAreaProps) =>
{
   return (
      <>
         {
            label &&
            <label htmlFor={name} className={styles.label}>{label}</label>
         }
         <textarea name={name}
            onChange={onChange}
            className={classNames(styles.inputTextArea, className)}
         />

      </>
   )
};

export default InputTextArea;
