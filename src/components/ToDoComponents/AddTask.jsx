import  { useState } from 'react'
import "../CSS/todoCSS/AddTask.css"

 const AddTask = ({addTodo,savetodo}) => {
  const [todo, setTodo] = useState({
    title: "",
    description: "",
    status:"Incomplete"
  })
  const handleInput=(e)=>{

    const name= e.target.name;
    const value=e.target.value;
    setTodo({...todo, [name]:value})

}

const handleSubmit=(e)=>{
   e.preventDefault();

   const newTodo={...todo};
  //  console.log(newTodo);
   // newArray.push({newTodo});
   addTodo(newTodo);
   savetodo(newTodo);
   setTodo({title:"", description:"", status:"Incomplete"});
}

  return (

    <div>
    <div>
        <fieldset>
            <legend>ADD TODO</legend>
            <form action="" onSubmit={handleSubmit} >
                <div>
                    <label>Title:</label>
                    <input type="text" name="title"  value={todo.title}
                    onChange={handleInput}
                     />
                </div>
                <div>
                    <label>Description:</label>
                    <input type="text" name="description"  value={todo.description}
                    onChange={handleInput}
                     />
                </div>
                <div>
                    <label>Status:</label>
                    <input type="text" name="status"  value={todo.status}
                    onChange={handleInput}
                     />
                </div>
                <button type="submit">ADD</button>
            </form>
       </fieldset>
       
        </div>
    
    </div>

  )
}
export default AddTask;