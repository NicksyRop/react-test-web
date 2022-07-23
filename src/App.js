import React, {  useRef } from "react";




function App() {

  const inputRef = useRef(null);


  const onclick = () =>{

    console.log(inputRef.current.value);
  }

  

  return (
    <div>


      <input type="text"  ref={inputRef} placeholder="name here" />

      <button onClick={onclick}>click</button>
    </div>
      
    
  );
}

export default App;
