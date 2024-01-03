import React, { useEffect, useRef } from "react";
import classNames from "classnames";
import { Draggable } from "react-beautiful-dnd";

import Button from "_atoms/button/button";
import InputText from "_atoms/inputtext/inputtext";
import InputSelect from "_atoms/inputselect/inputselect";
import InputDate from "_atoms/inputdate/inputdate";
import InputTextArea from "_atoms/inputtextarea/inputtextarea";

import styles from "./todoitem.module.css";
import TypeTodo from "_types/typetodo";

const priorityOptions = ["high", "medium", "low"];

type TodoItemProps = {
   data: TypeTodo;
   handleDataChange?: (data: TypeTodo) => void;
   onToggleOpen?: () => void;
   isOpen?: boolean;
   className?: string;
};

/* prettier-ignore */
const TodoItem = ({ data, handleDataChange, onToggleOpen, isOpen = false, className }: TodoItemProps) =>
{
   const localData = useRef(data)!;

   useEffect(
      ()=>{
         localData.current = data;
      },
      [localData, data]
   )

   const handleBlur = (event: React.FocusEvent<HTMLFormElement>) =>
   {
      if(event.relatedTarget || !handleDataChange) return;
      if(!localData.current) return;
      handleDataChange(localData.current);
   }


   const handleChange = (event: React.FormEvent<HTMLFormElement>) =>
   {
      const target = event.target as HTMLInputElement;
      const { name, value } = target;

      if(name in localData.current!)
         (localData.current! as any)[name] = value
    };

   return (

      <Draggable
         draggableId={ `${data.sortIndex}` }
         index={ data.sortIndex }>
         {
            (provided) =>
            (
               <section
                  className={classNames(styles.todoItem, className)}
                  ref={ provided.innerRef }
                  { ...provided.draggableProps }
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

                        {isOpen && (

                           <form onBlur={handleBlur} onChange={handleChange}>
                              <div className={styles.todoItemForm}>
                                 <div className={styles.todoItemForm__1st}>
                                    <InputText label="Title" name="title"
                                       placeholder="title" className={styles.todoItemForm__1st__doubleWide}
                                       value={data.title}
                                    />
                                    <InputSelect label="Priority" name="priority"
                                       options={priorityOptions}
                                       defaultIndex={priorityOptions.indexOf(data.priority)}
                                       className={styles.todoItemForm__1st__doubleWide}
                                    />

                                    <InputDate label="Start By" name="startOn" defaultValue={data.startOn} />
                                    <InputDate label="Complete By" name="endOn" defaultValue={data.endOn} />
                                 </div>
                                 <div className={styles.todoItemForm__2nd}>
                                    <InputTextArea label="Description" name="description" value={data.description} />
                                 </div>
                              </div>
                           </form>


                        )}

                     </div>

                  </aside>
               </section>
            )
         }

      </Draggable>
  )
};

export default TodoItem;
