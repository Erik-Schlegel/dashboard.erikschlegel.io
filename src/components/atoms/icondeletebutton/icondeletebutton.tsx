import React from "react";
import Button from "_atoms/button/button";
import IconDelete from "_atoms/icondelete/icondelete";

type IconDeleteButtonProps = {
   onClick?: () => void;
};

/* prettier-ignore */
const IconDeleteButton = ({ onClick }: IconDeleteButtonProps) => {
   return (
      <Button type="icon" onClick={onClick}>
         <IconDelete src="" alt="delete" />
      </Button>
   );
};

export default IconDeleteButton;
