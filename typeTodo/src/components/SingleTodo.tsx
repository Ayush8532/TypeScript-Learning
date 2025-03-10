import React, { useState } from 'react'
import { Todo } from '../model'
import TodoList from './TodoList'

type Props = {
    todo:Todo,
    todos:Todo[],
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleTodo = ({todo,todos,setTodos}:Props) => {

    const[edit,setEdit]=useState<boolean>(false);
    const[editTodo,setEditTodo]=useState<string>(todo.todo)
    const handleDone=(id:number)=>{
        setTodos(todos.map((item)=>
            item.id===id?{...item,isDone:!todo.isDone}:todo))
    }

    const handleDelete=(id:number)=>{
        setTodos(todos.filter((item)=>item.id!==id))
    }

    const handleEdit=(e:React.FormEvent,id:number)=>{
        e.preventDefault();
        setTodos(todos.map((todo)=>(
            todo.id===id?{...todo,todo:editTodo}:todo
        )))

        setEdit(false);
    }
  return (
    <form onSubmit={(e)=>{handleEdit(e,todo.id)}}>
        {
            edit?(
                <input type="text" value={editTodo} onChange={(e)=>{setEditTodo(e.target.value)}} />
            ):todo.isDone?(
                <s>{todo.todo}</s>
            ):(
                <span>{todo.todo}</span>
            )
        }
        <div>
            <span onClick={()=>{if(!edit && !todo.isDone){
                setEdit(!edit);
            }}}>Edit</span>
            <span onClick={()=>{handleDelete(todo.id)}} >Delete</span>
            <span onClick={()=>{handleDone(todo.id)}}>Mark</span>
        </div>
    </form>
  )
}

export default SingleTodo