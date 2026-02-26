"use client"
import { createContext, useState } from "react";

export const UserContext = createContext();


const  UserProvider = ({children}) => {
    
   const [start, setStart] = useState(false);


    return (
        <UserContext.Provider value={{ start, setStart}}>
            {children}
        </UserContext.Provider>
      );
}

export default UserProvider;