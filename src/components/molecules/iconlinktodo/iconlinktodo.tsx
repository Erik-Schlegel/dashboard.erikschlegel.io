import React from "react";

import IconLink from "../iconlink/iconlink";

type IconLinkTodoProps = {
   onClick?: () => void;
};

const IconLinkTodo = ({ onClick }: IconLinkTodoProps) => (
   <IconLink
      text="Todo"
      src="/assets/images/todo.svg"
      alt="todo icon"
      onClick={onClick}
   />
);

export default IconLinkTodo;
