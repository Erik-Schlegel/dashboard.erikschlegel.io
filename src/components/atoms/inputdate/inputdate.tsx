import React from "react";
import moment from "moment";

import styles from "./inputdate.module.css";

type InputDateProps = {
   name: string;
   label?: string;
   onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
   minDate?: Date | string;
   defaultValue?: Date | string;
   className?: string;
};

const getDateString = (date: Date | string) => {
   if (typeof date === "string") return date;
   return moment(date).format("YYYY-MM-DD");
};

const todayString = moment().format("YYYY-MM-DD");

/* prettier-ignore */
const InputDate = ({ name, label, onChange, minDate=todayString, defaultValue='', className }: InputDateProps) =>
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
            min={ getDateString(minDate) }
            defaultValue={ getDateString(defaultValue)}
            className={styles.inputDate}
         />
      </div>

   );
};

export default InputDate;
