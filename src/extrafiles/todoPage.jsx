import  { useEffect, useState } from 'react'
import { AddTodo } from './addTodo'

export const TodoPage = () => {
    const [todos,setTodos] = useState([])
    const addTodo = (todo)=> setTodos([...todos,todo])
 
 useEffect(()=> console.log(todos),[todos])
    return (
    <>
     <div>This is Todo Page</div>
    <AddTodo addTodo={addTodo}/></>
   
  )
}
