import "../App.css";
import { useState } from "react";
function TodoList({ tasks, checkTask, deleteTask, editTask }) {
    return (
        <ul className="todo-list">
            {tasks != null && tasks.length > 0 ? (
                tasks.map((task, index) => (
                    <li key={index} className="todo-item">
                        <Task task={task} index={index} setTasks={tasks} 
                                checkTask={checkTask} deleteTask={deleteTask} editTask={editTask}/>
                    </li>
                ))
            ) : (
                <p>No task</p>
            )}
        </ul>
    );
}

function Task({ task, index, checkTask, deleteTask, editTask }) {
    const [isEditing, setIsEditing] = useState(false);
    const [newName, setNewName] = useState(task.taskName);
    const handleChange = () => {
        checkTask(index);
    };
    const handleDelete = () => {
        deleteTask(index);
    }
    const handleEdit = () => {
        setIsEditing(true);
      };
    
      const handleInputChange = (event) => {
        setNewName(event.target.value);
      };
    
      const handleSave = () => {
        editTask(index, newName);
        setIsEditing(false);
      };
    return (
        <div className="todo-task">
            <input type="checkbox" checked={task.isCompleted} onChange={handleChange}></input>
            {isEditing ? (
                <><input type="text" value={newName} onChange={handleInputChange}/><button onClick={handleSave}>Save</button></>
                    ) : (
                <><span>{task.taskName}</span><button onClick={handleEdit}>Edit</button></>
            )}
            
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default TodoList;