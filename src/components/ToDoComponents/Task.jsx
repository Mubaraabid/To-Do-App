import React from 'react';
import "../CSS/todoCSS/Task.css"

const Task = ({index, task, updateTask, deleteTask }) => {
    
  return (
    <div>
  
        <fieldset>
        <legend>Task # {index+1}</legend>
        <div className='details'>
            <p><b>Title:</b> {task.title}  </p>
            <p><b>Description:</b> {task.description}</p>
            <p><b>Status:</b> {task.status ? 'Incomplete' : 'Completed'}</p>   
        </div>      

        <div>
        <button onClick={()=> updateTask(index)}>Update</button>
        <button onClick={() => deleteTask(index)}>Delete</button>
        </div> 
        </fieldset>
    </div>
  );
};

export default Task;
