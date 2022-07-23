import React, { useContext, useState } from "react";

import { UserContext } from "../App";

const Login = () => {

    const { setUsername} = useContext(UserContext);

    const [newname,setNewName] = useState("");

    const hundleSubit = (e) =>{

        e.preventDefault()

        setUsername(newname)


    }
  return <div>
    <form onSubmit={hundleSubit}>

    <input type="text"  onChange={ (e) => setNewName(e.target.value)} />

    <button type="submit">Click</button>


    </form>

  </div>;
};

export default Login;
