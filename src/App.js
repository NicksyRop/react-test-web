import React, {  createContext, useState } from "react";
import Login from "./components/Login";
import { Profile } from "./components/Profile";

export const UserContext = createContext(null)




function App() {

  const [username ,setUsername] = useState("Nicksy");

  

  return (
    <UserContext.Provider value={{ username , setUsername}}>

    <Login />
    <Profile />
    
    </UserContext.Provider >

     

      
    
  );
}

export default App;
