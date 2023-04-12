import React from "react";
import { useTasks } from "../context/TaskProvider";
import { Link } from "react-router-dom";

const TaskCard = ({ task }) => {
  const { deleteTask, toggleTaskDone } = useTasks();

  const handleDone = async () => {
    await toggleTaskDone(task.id);
    console.log(toggleTaskDone);
  };

  return (
    <div className="bg-zinc-700 text-white rounded-md p-4">
      <h2 className="text-sm font-bold">{task.title}</h2>
      <header className="flex justify-between">
        <p className="text-xs">{task.description}</p>
        <span>{task.done === 1 ? "✅" : "❌"}</span>
      </header>
      <span>{task.createdAt}</span>
      <div className="flex  gap-x-2">
        <button
          className="bg-red-500 px-2 py-1 text-white"
          onClick={() => deleteTask(task.id)}
        >
          Delete
        </button>
        <Link className="bg-slate-500 px-3 py-1 text-white" to={`/edit/${task.id}`}>Edit</Link>
        <button className="bg-green-500 px-2 py-1 text-white" onClick={() => handleDone(task.done)}>Toggle Task</button>
      </div>
    </div>
  );
};

export default TaskCard;
