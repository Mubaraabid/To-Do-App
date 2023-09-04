import React from "react";


const TodoList=({todoArray})=>{
    const list= todoArray.map((todolist,index)=>(
                    
            <li key={index}>
                <p>Title: {todolist.title}  </p>
                <p>Description: {todolist.description}</p>
                <p>Status: {todolist.status}</p>
             </li>
               ));
    return(
       <div>
        <ul>{list}</ul>
       </div>
    );
};

export default TodoList;