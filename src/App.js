import React, { useCallback, useState } from "react";
import List from "./components/List";




function App() {

  const [number ,setNumber] = useState(1);

  const [dark ,setDark] = useState(false)


  const getList = useCallback(() =>  {
    return [number , number + 1 , number + 2]
  }, [number])

  const theme =  {

    backgroundColor: dark ? 'black' : 'white',
    color: dark ? 'white' : 'black',


  }

  return (
    <div style={theme}>

      <input value={number} type="number" onChange={ (e) => setNumber(e.target.value) } />

      <button onClick={ () => setDark(!dark)}>Toggle Theme</button>

    <List getList={getList} />
     
    
      
    </div>
  );
}

export default App;
