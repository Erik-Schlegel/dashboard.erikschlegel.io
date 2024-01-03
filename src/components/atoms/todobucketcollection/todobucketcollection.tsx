import React from "react";
import classNames from "classnames";

import TypeBucket from "_types/typebucket";
import { Droppable } from "react-beautiful-dnd";

import styles from "./todobucketcollection.module.css";

const buckets: TypeBucket[] = ["backlog", "scheduled", "current", "complete"];

type TodoBucketCollectionProps = {
   activeBucket?: TypeBucket;
   onBucketClick?: (bucket: TypeBucket) => void;
};

/* prettier-ignore */
const TodoBucketCollection = ({activeBucket='current', onBucketClick}: TodoBucketCollectionProps) =>
{

   const handleBucketClick = (bucket: TypeBucket) => {
      if(onBucketClick) onBucketClick(bucket);
   }

   const getClasses = (bucket: string): string =>
   {
      const classes = [styles.todoBucketCollection__option];

      if(activeBucket === bucket)
         classes.push(styles.todoBucketCollection__option__active);

      return classNames(classes);
   }

   return (
      <div className={styles.todoBucketCollection}>
         {
            buckets.map((bucket, index) => (
                 <Droppable key={index} droppableId={bucket}>
                    {(provided) => (

                        <div
                           data-name={bucket}
                           className={getClasses(bucket)}
                           onClick={()=>handleBucketClick(bucket)}
                           {...provided.droppableProps} ref={provided.innerRef}
                        >
                           {bucket}
                           {provided.placeholder}
                        </div>

                    )}
                 </Droppable>
            ))
         }
      </div>
   )

};

export default TodoBucketCollection;
