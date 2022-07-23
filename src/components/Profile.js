import React, { useContext } from "react";
import { UserContext } from "../App";




export const Profile = () => {

    const { username , setUsername} = useContext(UserContext)
  return <div>

    <h1>Welcome back { username }</h1>
  </div>;
};
