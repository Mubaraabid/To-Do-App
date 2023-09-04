import React from 'react';
import Task from "./Task.jsx"

const TaskList = ({ todos, updateTask, deleteTask }) => {
  return (
    <div>
      {todos.map((task,index) => (
        <Task index={index} task={task} updateTask={updateTask}  deleteTask={deleteTask} />
      ))}
    </div>
  );
};

export default TaskList;
