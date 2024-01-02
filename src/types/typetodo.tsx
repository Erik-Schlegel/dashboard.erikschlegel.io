import TypeBucket from "./typebucket";

type TypeTodo = {
   id: string;
   user: string;
   title: string;
   description: string;
   bucket: TypeBucket;
   priority: string;
   startOn: Date;
   endOn: Date;
};

export default TypeTodo;
