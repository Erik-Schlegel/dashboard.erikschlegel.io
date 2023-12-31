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
const InputSelect = ({ name, label, options, defaultIndex, onChange, className }: InputSelectProps) =>
{
   return (
      <div>
         {label && (
            <label htmlFor={name} className={styles.label}>
               {label}
            </label>
         )}
         <select name={name} onChange={onChange} className={classNames(styles.inputSelect, className)}>
            {
               options.map((option, i) =>
               (
                  <option key={i} value={option} selected={i === defaultIndex}>
                     {option}
                  </option>
               ))
            }
         </select>
      </div>
   );
};

export default InputSelect;
