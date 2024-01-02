import React from "react";
import classNames from "classnames";

import styles from "./inputdate.module.css";

const formatDate = (date: Date) => {
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

/* prettier-ignore */
const InputDate = ({ name, label, onChange, minDate=new Date(), defaultValue=new Date(), className }: InputDateProps) =>
{
   const min = `${minDate.getFullYear()}-${String(minDate.getMonth() + 1).padStart(2, '0')}-${String(minDate.getDate()).padStart(2, '0')}`;
   const def = `${defaultValue.getFullYear()}-${String(defaultValue.getMonth() + 1).padStart(2, '0')}-${String(defaultValue.getDate()).padStart(2, '0')}`;


   return (
      <div className={className}>
         {
            label &&
            <label htmlFor={name} className={styles.label}>
               {label}
            </label>
         }
         <input type="date" name={name}
            onChange={onChange}
            min={min}
            defaultValue={formatDate(defaultValue)}
            className={styles.inputDate}
         />
      </div>

   );
};

export default InputDate;
