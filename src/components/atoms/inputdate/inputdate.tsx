import React from "react";

import styles from "./inputdate.module.css";

const formatDate = (date: Date) => {
   console.log(date);
   const year = date.getFullYear();
   const month = String(date.getMonth() + 1).padStart(2, "0");
   const day = String(date.getDate()).padStart(2, "0");
   return `${year}-${month}-${day}`;
};

type InputDateProps = {
   name: string;
   label?: string;
   onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
   minDate?: Date;
   defaultValue?: Date;
   className?: string;
};

const d = new Date();

/* prettier-ignore */
const InputDate = ({ name, label, onChange, minDate=d, defaultValue=d, className }: InputDateProps) =>
{
   return (
      <div className={className}>
         {
            label &&
            <label htmlFor={name} className={styles.label}>
               {label}
            </label>
         }
         <input type="date" name={name}
            id={name}
            onChange={onChange}
            min={formatDate(minDate)}
            defaultValue={formatDate(defaultValue)}
            className={styles.inputDate}
         />
      </div>

   );
};

export default InputDate;
