import "../App.css";
import { React, useState } from 'react';
function TaskInput ({ addTask }) {
    const [taskName, setTaskName] = useState("");
    const handleAdd = (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
        if (taskName.trim()) {
            addTask(taskName); // Call the addTask function passed as a prop to add the new task
            setTaskName(""); // Clear the input field
        }
    };
    const handleChange = (event) => {
        setTaskName(event.target.value);
    }

    return (
        <form className="input" onClick={handleAdd}>
            <input type="text" value={taskName} onChange={handleChange} placeholder="Add new task"/>
            <button type="submit">Add</button>
        </form>
    );
}

export default TaskInput;