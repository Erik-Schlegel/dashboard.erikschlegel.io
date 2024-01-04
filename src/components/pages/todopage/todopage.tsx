import React, { useState } from "react";
import { DragDropContext, DropResult, Droppable } from "react-beautiful-dnd";
import moment from "moment";

import ScrollableArea from "_atoms/scrollablearea/scrollablearea";
import TodoBucketCollection from "_atoms/todobucketcollection/todobucketcollection";
import Button from "_atoms/button/button";
import TodoItem from "_organisms/todoitem/todoitem";
import ContentTemplate from "_templates/contenttemplate/contenttemplate";

import TypeTodo from "_types/typetodo";
import TypeBucket from "_types/typebucket";

import styles from "./todopage.module.css";

const tomorrowString = moment().add(1, "days").format("YYYY-MM-DD");
const nextWeekString = moment().add(7, "days").format("YYYY-MM-DD");

const original_items: TypeTodo[] = [
   {
      id: "a",
      sortIndex: 0,
      user: "user1",
      title: "backlog abc",
      description: "abc description",
      bucket: "backlog",
      priority: "high",
      startOn: tomorrowString,
      endOn: nextWeekString,
   },
   {
      id: "b",
      sortIndex: 0,
      user: "user1",
      title: "scheduled jkl",
      description: "jkl description",
      bucket: "scheduled",
      priority: "high",
      startOn: tomorrowString,
      endOn: nextWeekString,
   },
   {
      id: "c",
      sortIndex: 1,
      user: "user1",
      title: "current def",
      description: "def description",
      bucket: "current",
      priority: "high",
      startOn: tomorrowString,
      endOn: nextWeekString,
   },
   {
      id: "d",
      sortIndex: 0,
      user: "user1",
      title: "current ghi",
      description: "ghi description",
      bucket: "current",
      priority: "medium",
      startOn: tomorrowString,
      endOn: nextWeekString,
   },
];

/* prettier-ignore */

const TodoPage = () =>
{

   const [openItem, setOpenItem] = useState<string | null>(null);
   const [bucketMode, setBucketMode] = useState<TypeBucket>('current');
   const [items, setItems] = useState<TypeTodo[]>(original_items);


   const getReorderedTodoItems = (items: TypeTodo[], fromBucket: TypeBucket, fromIndex: number, toBucket: TypeBucket, toIndex: number) : TypeTodo[]|null =>
   {
      const newState = [...items];

      const movedItem = newState.find(item =>
         item.bucket === bucketMode &&
         item.sortIndex === fromIndex
      );

      if(!movedItem) return null;

      if(fromBucket === toBucket)
      {
         //direction of ripple effect
         //change sortIndex for all items between toIndex and fromIndex

         if(fromIndex > toIndex)
         {
            const sortedItems = items
               .filter(item =>
                  item.bucket === bucketMode &&
                  item.sortIndex >= toIndex &&
                  item.sortIndex < fromIndex
               )

            sortedItems.forEach(item => item.sortIndex += 1);
         }
         else
         {
            const sortedItems = items
               .filter(item =>
                  item.bucket === bucketMode &&
                  item.sortIndex <= toIndex &&
                  item.sortIndex > fromIndex
               )
            sortedItems.forEach(item => item.sortIndex -= 1);
         }

         movedItem.sortIndex = toIndex;
      }
      else
      {
         const atIndex = getLastItemSortIndexInBucket(newState, toBucket);
         movedItem.sortIndex = atIndex;
         movedItem.bucket = toBucket;

         newState
            .filter(item=>
               item.bucket === bucketMode &&
               item.sortIndex > fromIndex
            )
            .forEach(item=> item.sortIndex -= 1);

      }

      return newState;
   }


   const getLastItemSortIndexInBucket = (items: TypeTodo[], bucket: TypeBucket) : number =>
   {
      const itemsInBucket = items.filter(item => item.bucket === bucket);
      if(itemsInBucket.length === 0) return 0;

      return (
         itemsInBucket.sort((a,b)=> a.sortIndex - b.sortIndex)[itemsInBucket.length -1].sortIndex + 1
      );
   }


   const handleToggleOpen = (id: string) =>
      setOpenItem(openItem === id ? null : id);


   const handleTodoDataChange = (data: TypeTodo) =>
      setItems(
         previousItems=> previousItems.map(item => item.id === data.id ? data: item)
      );


   const handleAddTodoClick = ()=>
   {
      const id = `new-${Date.now()}`;
      const newTodo: TypeTodo = {
         id,
         sortIndex: getLastItemSortIndexInBucket(items, bucketMode),
         user: "user1",
         title: "",
         description: "",
         bucket: bucketMode,
         priority: "medium",
         startOn: '',
         endOn: '',
      };

      let newitems = [...items, newTodo]
      setItems(newitems);
      setOpenItem(id);
   }


   const handleDragEnd = ({source, destination}: DropResult) =>
   {
      if(!destination) return; // dropped outside any droppable area

      const fromIndex = source.index;
      const fromBucket = source.droppableId as TypeBucket;

      const toIndex = destination.index;
      const toBucket = destination.droppableId as TypeBucket;

      const newState = getReorderedTodoItems(items, fromBucket, fromIndex, toBucket, toIndex);

      if(!newState) return;
      setItems(newState);
   }


   const handleDelete = (id: string) =>
   {
      const newState = items.filter(item => item.id !== id);
      setItems(newState);
   }


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
                     <Button text="Add" onClick={handleAddTodoClick} />
                  </div>

                  <ScrollableArea className={styles.todoPage__collection__scrollableArea}>
                     <Droppable droppableId="todoSet">
                        {(provided) => (

                           <div {...provided.droppableProps} ref={provided.innerRef}>
                              {items
                                 .filter(item => item.bucket === bucketMode)
                                 .sort((a,b)=> a.sortIndex - b.sortIndex)
                                 .map((item) => (
                                    <TodoItem
                                       key={ item.sortIndex }
                                       data={ item }
                                       isOpen={ openItem === item.id }
                                       onDelete={ handleDelete }
                                       onDataChange={ handleTodoDataChange }
                                       onToggleOpen={ ()=> handleToggleOpen(item.id)}
                                    />
                                 ))
                              }
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
