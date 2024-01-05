import React from "react";
import TypeIcon from "_types/typeicon";

/* prettier-ignore */
const IconDelete = ({ src, alt, width = 44, height = "auto", className }: TypeIcon) =>
{
   return (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24"
         strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
         color="var(--I_Link)" stroke="currentColor" fill="none"
      >
         <polyline points="3 6 5 6 21 6"></polyline>
         <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m6 0V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"></path>
      </svg>
   );
};

export default IconDelete;
