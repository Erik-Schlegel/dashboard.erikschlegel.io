import React from "react";
import classNames from "classnames";

import styles from "./inputtext.module.css";

type InputTextProps = {
   name: string;
   label?: string;
   placeholder?: string;
   onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
   className?: string;
};

/* prettier-ignore */
const InputText = ({name, label, placeholder, onChange, className}: InputTextProps) =>
{
   return (
      <div>
         {label && (
            <label htmlFor={name} className={styles.label}>{label}</label>
         )}
         <input type='text'
            name={name}
            placeholder={placeholder}
            onChange={onChange}
            className={classNames(styles.inputText, className)}
         />
      </div>
   )
};

export default InputText;
