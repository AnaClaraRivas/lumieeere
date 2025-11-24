import React from "react";
import { NavLink } from "react-router-dom";


function BotoesFilme() {
 return (
       <div className="navegacao my-4">
         <NavLink
           to="/detalhada/filme"
           className={({ isActive }) => `naveg ${isActive ? "active" : ""}`}
         >
           1
         </NavLink>
   
         <NavLink
           to="/criterioemocao/filme"
           className={({ isActive }) => `naveg ${isActive ? "active" : ""}`}
         >
           2
         </NavLink>
 
       </div>
     );
   }

export default BotoesFilme;