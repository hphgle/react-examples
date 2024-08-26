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
  return (
    <div className='wrapper'>
      <TaskInput />
      <TodoList tasks={[tasks]}/>
    </div>
  );
}

export default App;
