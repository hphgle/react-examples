import "../App.css";
import { useState } from "react";
function TodoList({ tasks, checkTask, deleteTask }) {
    return (
        <ul className="todo-list">
            {tasks != null && tasks.length > 0 ? (
                tasks.map((task, index) => (
                    <li key={index} className="todo-item">
                        <Task task={task} index={index} setTasks={tasks} 
                                checkTask={checkTask} deleteTask={deleteTask}/>
                    </li>
                ))
            ) : (
                <p>No task</p>
            )}
        </ul>
    );
}

function Task({ task, index, checkTask, deleteTask }) {
    const handleChange = () => {
        checkTask(index);
    };
    const handleDelete = () => {
        deleteTask(index);
    }
    return (
        <div className="todo-task">
            <input type="checkbox" checked={task.isCompleted} onChange={handleChange}></input>
            {task.taskName}
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default TodoList;