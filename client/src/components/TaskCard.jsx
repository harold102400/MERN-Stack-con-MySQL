import React from "react";
import { useTasks } from "../context/TaskProvider";
import { Link } from "react-router-dom"

const TaskCard = ({ task }) => {
  const { deleteTask, toggleTaskDone } = useTasks()

  const handleDone = async() => {
    await toggleTaskDone(task.id)
    console.log(toggleTaskDone)
  }
  
  return (
    <div>
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <span>{task.done === 1 ? "✔" : "❌"}</span>
      <span>{task.createdAt}</span>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
      <Link to={`/edit/${task.id}`}>Edit</Link>
      <button onClick={() => handleDone(task.done)}>
        Toggle Task
      </button>
    </div>
  );
};

export default TaskCard;
