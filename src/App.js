import React, { useReducer, useState } from "react";
import Todo from "./components/Todo";

function reducer(todos, action){


  switch (action.type){

    case 'ADD':
      return [...todos , newTodo(action.payload.name)];
    case 'TOGGLE':
    return todos.map( todo => {

      if(todo.id === action.payload.id){

        return { ...todo, completed : !todo.completed }
      }

      return todo
    })
    case 'DELETE':
      return todos.filter( todo => todo.id !== action.payload.id)
    
     
    default:
      return todos;  
  }

}



function newTodo (name){
return { id  : Date.now() , name : name , completed : false}
}

function App() {


  const [todos,dispatch] = useReducer( reducer, [])
  const [name , setName] = useState('')

  const handleSubmit = (e)=>{

    e.preventDefault()

    dispatch({ type : "ADD" , payload : { name : name}})
    setName('')

  }


console.log(todos);


  return (
    <div>

      <form onSubmit={handleSubmit}><input value={name} onChange={ e => setName(e.target.value)} /></form>


      <h3>Todos</h3>
      {todos.map((todo) =>{
        return <Todo key={todo.id}  todo={todo} dispatch={dispatch}/>
      })}

      
     
    
      
    </div>
  );
}

export default App;
