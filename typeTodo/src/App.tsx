import React, { useState } from 'react'
import  InputField  from './components/InputField'
import { Todo } from './model';
import TodoList from './components/TodoList';
import './App.css'

const App:React.FC=()=> {
  const[todo,setTodo]=useState<string>("");
  const[todos,setTodos]=useState<Todo[]>([]);

  const handleAdd=(e:React.FormEvent)=>{
    e.preventDefault();
    if(todo){
      setTodos([...todos,{id:Date.now(),todo,isDone:false}]);
      setTodo("");
    }
  }
  return (
    <>
    <div>
    <h1>App</h1>
    <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
    <TodoList todos={todos} setTodos={setTodos} />
    </div>
</>
  )
}

export default App
