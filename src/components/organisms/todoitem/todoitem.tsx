import React from "react";
import classNames from "classnames";
import { Draggable } from "react-beautiful-dnd";

import Button from "_atoms/button/button";
import InputText from "_atoms/inputtext/inputtext";
import InputSelect from "_atoms/inputselect/inputselect";
import InputDate from "_atoms/inputdate/inputdate";
import InputTextArea from "_atoms/inputtextarea/inputtextarea";

import styles from "./todoitem.module.css";

const priorityOptions = ["low", "medium", "high"];

type TodoItemProps = {
   index: number;
   data: any;
   onToggleOpen?: () => void;
   isOpen?: boolean;
   className?: string;
};

/* prettier-ignore */
const TodoItem = ({ index, data, onToggleOpen, isOpen = false, className }: TodoItemProps) =>
{

   return (

      <Draggable
         draggableId={data.id}
         index={index}>
         {(provided) =>
         (
            <section
               className={classNames(styles.todoItem, className)}
               ref={provided.innerRef}
               {...provided.draggableProps}
            >

               <div className={styles.todoItem__titleArea}>
                  <div>
                     <span className={styles.todoItem__titleArea__handle} {...provided.dragHandleProps}>:::</span>
                     <span className={styles.todoItem__titleArea__title} onClick={onToggleOpen}>
                        {data.title}
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
                           <InputText label="Title" name="title"
                              placeholder="title" className={styles.todoItemForm__1st__doubleWide}
                              value={data.title}
                           />
                           <InputSelect label="Priority" name="priority"
                              options={['low', 'medium', 'high']}
                              defaultIndex={priorityOptions.indexOf(data.priority)}
                              className={styles.todoItemForm__1st__doubleWide}
                           />

                           <InputDate label="Start On" name="startDate" defaultValue={data.startOn} />
                           <InputDate label="Complete By" name="completeBy" defaultValue={data.endOn} />
                        </div>
                        <div className={styles.todoItemForm__2nd}>
                           <InputTextArea label="Description" name="description" value={data.description} />
                        </div>
                     </div>

                  </div>

               </aside>
            </section>
         )}

      </Draggable>
  )
};

export default TodoItem;
