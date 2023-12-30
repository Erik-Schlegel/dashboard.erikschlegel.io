import React, { useState } from "react";

import ScrollableArea from "_atoms/scrollablearea/scrollablearea";
import ContentTemplate from "_templates/contenttemplate/contenttemplate";

import TodoItem from "_organisms/todoitem/todoitem";
import Button from "_atoms/button/button";

import styles from "./todopage.module.css";

const items = [
   {
      title: "abcdef",
   },
   {
      title: "ghijkl",
   },
   {
      title: "mnopqr",
   },
   {
      title: "stuvwx",
   },
   {
      title: "yz1234",
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

            <div style={{marginBottom: 'var(--M_Gap)'}}>
               <Button text="Add" />
            </div>

            <ScrollableArea>
               {
                  items.map((item, i) => (
                     <TodoItem key={i} title={item.title} isOpen={openItem === item.title} onToggleOpen={()=> handleToggleOpen(item.title)} />
                  ))
               }
            </ScrollableArea>

         </div>
      </ContentTemplate>
   );

};

export default TodoPage;
