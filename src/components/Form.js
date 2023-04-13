import React from 'react'



const Form= ({setInputText,todos,setTodos, inputText})=>{


const inputTextHandler=(e)=>{
    console.log(e.target.value)
    setInputText(e.target.value)
}
const submitTodoHandler=(e)=>{
e.preventDefault()
setTodos([...todos ,{text:inputText ,completed:false,id:Math.random()*1000}])
setInputText("")
  

}

 const filterHandler=(e)=>{




 }

    return (
<form action="">
    <div className="input-area">
    <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
    <button  onClick={submitTodoHandler} className=" todo-button" type='submit'>
    <i className="fa-regular fa-plus"></i>
    </button>
    </div>
<div className="select">
    <select name="todos" className="filter-todo" onChange={filterHandler}>
        <option value="All">All</option>
        <option value="Completed">Completed</option>
        <option value="Uncompleted">Uncompleted</option>
    </select>

</div>

</form>


)}

export default  Form