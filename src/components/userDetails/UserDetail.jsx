import React from "react";

/* import { InfoUserCard } from "../infousercard/InfoUserCard"; */

export const UserDetail = ({user}) => {
  return (
    <>

    <div>
         <p>{user.picture} </p>
         <p>{user.title}</p>
         <p>{user.firstName}</p>
         <p>{user.lastName}</p>
    </div>
        

      

    </>
  );
};

