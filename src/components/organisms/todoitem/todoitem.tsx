import React from "react";
import classNames from "classnames";

import Button from "_atoms/button/button";
import InputText from "_atoms/inputtext/inputtext";
import InputSelect from "_atoms/inputselect/inputselect";
import InputDate from "_atoms/inputdate/inputdate";
import InputTextArea from "_atoms/inputtextarea/inputtextarea";

import styles from "./todoitem.module.css";

type TodoItemProps = {
   title: string;
   onToggleOpen?: () => void;
   isOpen?: boolean;
   className?: string;
};

/* prettier-ignore */
const TodoItem = ({ title, onToggleOpen, isOpen = false, className }: TodoItemProps) =>
{

   return (

      <section className={classNames(styles.todoItem, className)}>

         <div className={styles.todoItem__titleArea}>
            <div>
               <span className={styles.todoItem__titleArea__handle}>:::</span>
               <span className={styles.todoItem__titleArea__title} onClick={onToggleOpen}>
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

               <div className={styles.todoItemForm}>
                  <div className={styles.todoItemForm__1st}>
                     <InputText label="Title" name="title" placeholder="title" className={styles.todoItemForm__1st__doubleWide}  />
                     <InputSelect label="Priority" name="priority" options={['low', 'medium', 'high']} defaultIndex={1} className={styles.todoItemForm__1st__doubleWide}  />

                     <InputDate label="Start On" name="startDate" />
                     <InputDate label="Complete By" name="completeBy" />
                  </div>
                  <div className={styles.todoItemForm__2nd}>
                     <InputTextArea label="Description" name="description" />
                  </div>
               </div>

            </div>

         </aside>
      </section>
  )
};

export default TodoItem;
