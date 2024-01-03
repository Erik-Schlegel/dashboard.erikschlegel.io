import React from "react";

import styles from "./inputtext.module.css";

type InputTextProps = {
   name: string;
   value?: string;
   label?: string;
   placeholder?: string;
   onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
   className?: string;
};

/* prettier-ignore */
const InputText = ({name, value, label, placeholder, onChange, className}: InputTextProps) =>
{
   return (
      <div className={className}>
         {label && (
            <label htmlFor={name} className={styles.label}>{label}</label>
         )}
         <input type='text'
            id={name}
            defaultValue={value}
            name={name}
            placeholder={placeholder}
            onChange={onChange}
            className={styles.inputText}
         />
      </div>
   )
};

export default InputText;
