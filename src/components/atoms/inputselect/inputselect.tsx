import React from "react";
import classNames from "classnames";

import styles from "./inputselect.module.css";

type InputSelectProps = {
   name: string;
   label?: string;
   options: string[];
   defaultIndex?: number;
   onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
   className?: string;
};

/* prettier-ignore */
const InputSelect = ({ name, label, options, defaultIndex=0, onChange, className }: InputSelectProps) =>
{
   return (
      <div className={classNames(styles.inputSelect, className)}>
         {label && (
            <label htmlFor={name} className={styles.inputSelect__label}>
               {label}
            </label>
         )}
         <select id={name} name={name} onChange={onChange} defaultValue={options[defaultIndex]} className={styles.inputSelect__ui}>
            {
               options.map((option, i) =>
               (
                  <option key={i} value={option}>
                     {option}
                  </option>
               ))
            }
         </select>
      </div>
   );
};

export default InputSelect;
