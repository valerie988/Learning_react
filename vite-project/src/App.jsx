import { useState } from "react";
import "./App.css";

function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  function input(event) {
    setNewTask(event.target.value);
  }
  function addTask() {
    if(newTask.trim() !== ""){
    setTasks(t => [...t, newTask])
    setNewTask("")
    }
  }
  function deleteTask(index) {
    const updatedTask = tasks.filter((_, i) => i !== index)
    setTasks(updatedTask)
  }

  return (
    <div className="to-do-list">
      <h2>To-Do-List</h2>
      <div>
        <input
          type="text"
          placeholder="Enter a task..."
          value={newTask}
          onChange={input}
        />
        <button className="add-button" onClick={addTask}>Add</button>
      </div>
      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="text">{task}</span>
            <button className="delete-button" onClick={() => deleteTask(index)}>
              Delete
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default ToDoList;
