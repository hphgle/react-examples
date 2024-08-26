import "../App.css";
function TaskInput() {
    const handleSubmit = (event) => {
        event.preventDefault();
        event.target.reset();
    };

    return (
        <form className="input" onClick={handleSubmit}>
            <input type="text" name="taskName" id="task" placeholder="Add new task"/>
            <button type="submit">Add</button>
        </form>
    );
}

export default TaskInput;