import React, { useState } from "react";
import classNames from "classnames";

import Button from "_atoms/button/button";

import styles from "./todoitem.module.css";

type TodoItemProps = {
   title: string;
   onToggleOpen?: () => void;
};

const TodoItem = ({ title, onToggleOpen }: TodoItemProps) => {
   const [isOpen, setIsOpen] = useState(false);

   const handleTitleClick = () => {
      setIsOpen(!isOpen);
      onToggleOpen && onToggleOpen();
   };

   /* prettier-ignore */
   return (

      <section className={styles.todoItem}>

         <div className={styles.todoItem__titleArea}>
            <div>
               <span className={styles.todoItem__titleArea__handle}>:::</span>
               <span className={styles.todoItem__titleArea__title} onClick={handleTitleClick}>
                  {title}
               </span>
            </div>
            <div className={styles.todoItem__titleArea__options}>
               <Button text="Delete" type='secondary' />
               <Button text="Complete"  />
            </div>
         </div>

         <aside className={classNames(
            styles.todoItem__bodyArea,
            isOpen && styles.todoItem__bodyArea__open)}
         >
            <div className={styles.todoItem__bodyArea__expandable}>

               <div>som</div>

            </div>

         </aside>
      </section>
  )
};

export default TodoItem;
