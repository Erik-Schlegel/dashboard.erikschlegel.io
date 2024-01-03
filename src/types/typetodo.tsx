import TypeBucket from "./typebucket";

type TypeTodo = {
   id: string;
   sortIndex: number;
   user: string;
   title: string;
   description: string;
   bucket: TypeBucket;
   priority: string;
   startOn: Date;
   endOn: Date;
};

export default TypeTodo;
