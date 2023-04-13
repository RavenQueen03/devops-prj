import React, {useState} from 'react';
import "../App.css"
import Form from './Form'
import TodoList from './TodoList'
function App() {
const [inputText,setInputText ]=useState("")
const [todos,setTodos]= useState([])
const [ filter,setFilter]=useState("all")
  return (
    <div >
     <header>
      <h1>My Todo List</h1>
    
     </header>
    
      <Form 
      todos={todos} 
      setTodos={setTodos} 
      setInputText={setInputText}
      inputText={inputText}
      setFilter={setFilter}/>
      <TodoList todos={todos} setTodos={setTodos}  />
    </div>
   
  
  );
}

export default App;
