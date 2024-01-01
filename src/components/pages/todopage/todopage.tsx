import React, { useState } from "react";

import ScrollableArea from "_atoms/scrollablearea/scrollablearea";
import ContentTemplate from "_templates/contenttemplate/contenttemplate";

import TodoItem from "_organisms/todoitem/todoitem";
import Button from "_atoms/button/button";

import styles from "./todopage.module.css";

const items = [
   {
      title: "abcdef",
      id: "abcdef",
   },
   {
      title: "ghijkl",
      id: "ghijkl",
   },
   {
      title: "mnopqr",
      id: "mnopqr",
   },
   {
      title: "stuvwx",
      id: "stuvwx",
   },
   {
      title: "123",
      id: "123",
   },
   {
      title: "456",
      id: "456",
   },
   {
      title: "789",
      id: "789",
   },
   {
      title: "abc",
      id: "abc",
   },
   {
      title: "yz1234",
      id: "yz1234",
   },
];

/* prettier-ignore */

const TodoPage = () =>
{
   const [openItem, setOpenItem] = useState<string | null>(null);

   const handleToggleOpen = (title: string) =>
      setOpenItem(openItem === title ? null : title);

   return (
      <ContentTemplate title="Todo">
         <div className={styles.todoPage}>

            <div className={styles.todoPage__buckets}>
               <div>backlog</div>
               <div>current</div>
               <div>scheduled</div>
            </div>

            <div className={styles.todoPage__collection}>
               <div style={{marginBottom: 'var(--M_Gap)'}}>
                  <Button text="Add" />
               </div>
               <ScrollableArea>
                  {
                     items.map((item, i) => (
                        <TodoItem data={item} key={i} isOpen={openItem === item.title} onToggleOpen={()=> handleToggleOpen(item.title)} />
                     ))
                  }
               </ScrollableArea>
            </div>


         </div>
      </ContentTemplate>
   );

};

export default TodoPage;
