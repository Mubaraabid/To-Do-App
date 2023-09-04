
import { useState } from 'react';
import { useEffect } from 'react';
import AddTask from '../components/ToDoComponents/AddTask';
import TaskList from '../components/ToDoComponents/TaskList';

 const TodoPage = () => {
    const [todos,setTodos] = useState([])
    const addTodo = (todo)=> setTodos([...todos,todo]);

    
    const [saveTodo, setsaveTodo] = useState(() => {
        const savedState = localStorage.getItem("stateString");
        const saveTodo = JSON.parse(savedState);
        return saveTodo || [];
      });
    
    useEffect(() => {
        localStorage.setItem("stateString", JSON.stringify(saveTodo));
      }, [saveTodo]);

    const savetodo=(todo)=> setsaveTodo([...saveTodo,todo])

    const updateTask = (index) => {
        const updatedTasks = [...saveTodo];
        updatedTasks[index].status = !updatedTasks[index].status;
        setsaveTodo(updatedTasks);
      };

   
    const deleteTask = (index) => {
        const updatedTasks = [...saveTodo];
        updatedTasks.splice(index, 1);
        setsaveTodo(updatedTasks);
      };
  
    return (
   <div>

     <div>
     <h1>Todo Page</h1>
    <AddTask addTodo={addTodo}  savetodo={savetodo}/>
    </div>
    <div>
    <TaskList todos={saveTodo} updateTask={updateTask} deleteTask={deleteTask} />
    </div>

   </div>
  )
}

export default TodoPage;