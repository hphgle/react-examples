"use client"
import logo from './logo.svg';
import { React, useState } from 'react';
import './App.css';
import TaskInput from './components/TaskInput';
import TodoList from './components/TodoList';

function App() {
  const [tasks, setTasks] = useState([
    {taskName: "Meeting 1", isCompleted: false},
    {taskName: "Meeting 2", isCompleted: true}
  ]);

  const addTask = (taskName) => {
    const newTask = {taskName, isCompleted: false};
    setTasks([...tasks, newTask]);
  };

  const checkTask = (index) => {
    const newList = tasks.map((task, i) => 
    i === index ? {...task, isCompleted: !task.isCompleted}: task);
    setTasks(newList);
  };
  
  const deleteTask = (index) => {
    const newList = tasks.filter((_, i) => i !== index);
    setTasks(newList);
  };

  return (
    <div className='wrapper'>
      <TaskInput addTask={addTask} deleteTask={deleteTask}/>
      <TodoList tasks={tasks} checkTask={checkTask} deleteTask={deleteTask}/>
    </div>
  );
}

export default App;
