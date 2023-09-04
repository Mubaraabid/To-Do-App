import React, { useState } from "react";
import TodoList from "./todoList";

const TodoInput=()=>{

    const[todoInfo, setTodoInfo]= useState({
        title:"",
        description:"",
        status:""
    });

    const[newArray, setNewArray]=useState([]);
    // const newArray=[];
    const handleInput=(e)=>{

         const name= e.target.name;
        const value=e.target.value;
        // console.log(name,value);
        
        setTodoInfo({...todoInfo, [name]:value})
    }

    const handleSubmit=(e)=>{
        e.preventDefault();

        const newTodo={...todoInfo};
        console.log(newTodo);
        // newArray.push({newTodo});
        setNewArray([...newArray,newTodo]);
        setTodoInfo({title:"", description:"", status:""});

    }

    return (
        <div>
        <div>
            <fieldset>
                <legend>ADD TODO</legend>
                <form action="" onSubmit={handleSubmit} >
                    <div>
                        <label>Title:</label>
                        <input type="text" name="title"  value={todoInfo.title}
                        onChange={handleInput}
                         />
                    </div>
                    <div>
                        <label>Description:</label>
                        <input type="text" name="description"  value={todoInfo.description}
                        onChange={handleInput}
                         />
                    </div>
                    <div>
                        <label>Status:</label>
                        <input type="text" name="status"  value={todoInfo.status}
                        onChange={handleInput}
                         />
                    </div>
                    <button type="submit">ADD</button>
                </form>
           </fieldset>
           
            </div> 
            <div>
            <TodoList todoArray={newArray}/>
            </div>
        
        </div>
    )
}

export default TodoInput;