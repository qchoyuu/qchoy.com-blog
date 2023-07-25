import React from "react";

export default function ListLayout ({children} : {children:React.ReactNode}) {
   return (
      <div>
         <h1>ListLayot</h1>
         {children}
      </div>
   )
}