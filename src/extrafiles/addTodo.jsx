import  { useState } from 'react'

// eslint-disable-next-line react/prop-types
export const AddTodo = ({addTodo}) => {
  const [todo, setTodo] = useState({
    name: "",
    status: ""
  })

  return (
    <div>
      <label >Name:</label><br />
      <input type="text" name="name" value={todo.name} onChange={(e)=>setTodo({...todo,name:e.target.value})}/><br />
      <button onClick={()=>addTodo(todo)}>Add Todo</button>
    </div>
  )
}
