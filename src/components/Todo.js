import React from "react";
import "../App.css"


const Todo=({setTodos,todos,todo,text})=>{

    const deleteHandler=()=>{
       console.log(todo.id)
 setTodos(todos.filter((el)=> el.id !== todo.id))
    }


    const checkHandler=()=>{

setTodos(todos.map((item)=>{

if(item.id===todo.id){
    return {
...item,completed:!item.completed,


    }
}return item

}
    ))

    }
return (

<div className="todo">
    <li  className={`todo-item ${ todo.completed?"completed-todo": " " }` }>{text}</li>
    <button onClick={checkHandler} className="check-btn" ><i className="fa-solid fa-check"></i></button>
    <button onClick={deleteHandler} className="trash-btn"> <i className="fa-solid fa-trash"></i></button>
   
    


</div>


    
)




}
export default Todo