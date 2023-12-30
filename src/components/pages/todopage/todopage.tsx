import React from "react";

import ScrollableArea from "_atoms/scrollablearea/scrollablearea";
import ContentTemplate from "_templates/contenttemplate/contenttemplate";

import TodoItem from "_organisms/todoitem/todoitem";
import Button from "_atoms/button/button";

import styles from "./todopage.module.css";

/* prettier-ignore */

const TodoPage = () =>
{

   return (
      <ContentTemplate title="Todo">
         <div className={styles.todoPage}>

            <div style={{marginBottom: 'var(--M_Gap)'}}>
               <Button text="Add" />
            </div>

            <ScrollableArea>

               <TodoItem title='something really easy to complete' />
               <TodoItem title='something really easy to complete' />
               <TodoItem title='something really easy to complete' />
               <TodoItem title='something really easy to complete' />

            </ScrollableArea>

         </div>
      </ContentTemplate>
   );

};

export default TodoPage;
