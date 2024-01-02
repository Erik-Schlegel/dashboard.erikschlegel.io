import React, { useState } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

import ScrollableArea from "_atoms/scrollablearea/scrollablearea";
import TodoBucketCollection from "_atoms/todobucketcollection/todobucketcollection";
import Button from "_atoms/button/button";
import TodoItem from "_organisms/todoitem/todoitem";
import ContentTemplate from "_templates/contenttemplate/contenttemplate";

import TypeTodo from "_types/typetodo";
import TypeBucket from "_types/typebucket";

import styles from "./todopage.module.css";

const tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);

const nextWeek = new Date();
nextWeek.setDate(nextWeek.getDate() + 7);

const items: TypeTodo[] = [
   {
      id: "abc",
      user: "user1",
      title: "backlog abc",
      description: "abcdef description",
      bucket: "backlog",
      priority: "high",
      startOn: tomorrow,
      endOn: nextWeek,
   },
   {
      id: "def",
      user: "user1",
      title: "current abc",
      description: "abcdef description",
      bucket: "current",
      priority: "high",
      startOn: tomorrow,
      endOn: nextWeek,
   },
   {
      id: "abcdef",
      user: "user1",
      title: "scheduled abc",
      description: "abcdef description",
      bucket: "scheduled",
      priority: "high",
      startOn: tomorrow,
      endOn: nextWeek,
   },
];

/* prettier-ignore */

const TodoPage = () =>
{
   const [openItem, setOpenItem] = useState<string | null>(null);
   const [bucketMode, setBucketMode] = useState<TypeBucket>('current');

   const handleToggleOpen = (title: string) =>
      setOpenItem(openItem === title ? null : title);

   const handleDragEnd = (response: any)=> console.log(response);

   const handleBucketClick = (bucket: TypeBucket) => {
      setBucketMode(bucket);
   }


   return (
      <ContentTemplate title="Todo">
         <div className={styles.todoPage}>

            <DragDropContext onDragEnd={handleDragEnd}>

               <div className={styles.todoPage__buckets}>
                  <TodoBucketCollection onBucketClick={handleBucketClick} activeBucket={bucketMode} />
               </div>

               <div className={styles.todoPage__collection}>

                  <div style={{marginBottom: 'var(--M_Gap)'}}>
                     <Button text="Add" />
                  </div>

                  <ScrollableArea>
                     <Droppable droppableId="todoSet">
                        {(provided) => (

                           <div {...provided.droppableProps} ref={provided.innerRef}>
                              {items.filter(item => item.bucket === bucketMode).map((item, index) => (

                                 <TodoItem
                                    key={index}
                                    index={index}
                                    data={item}
                                    isOpen={openItem === item.title} onToggleOpen={()=> handleToggleOpen(item.title)} />

                              ))}
                              {provided.placeholder}
                           </div>
                        )}
                     </Droppable>
                  </ScrollableArea>
               </div>

            </DragDropContext>


         </div>
      </ContentTemplate>
   );

};

export default TodoPage;
