import "../App.css";
import { useState } from "react";
function TodoList({ tasks }) {
    return <ul className="todo-list">
    {tasks != null && tasks.length > 0 ? ( 
        tasks?.map((task, index) =>
            <Task key={index} task={task} setTasks={tasks}/>
        )) : (
            <p>No task</p>
        )}
    </ul>
}

function Task({ task }) {
    const [isCompleted, setIsCompleted] = useState(false);
    const handleChange = (event) => {
        setIsCompleted(!isCompleted);
    };
    return (
        <li className="todo-task">
            <input type="checkbox" checked={isCompleted} onChange={handleChange}></input>
            <p>{task.taskName}</p>
            <button>Delete</button>
        </li>
    )
}

export default TodoList;