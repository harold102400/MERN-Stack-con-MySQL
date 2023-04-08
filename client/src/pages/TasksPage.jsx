import React, { useEffect } from "react";
import TaskCard from "../components/TaskCard";
import { useTasks } from "../context/TaskProvider";

const TasksPage = () => {

 const { tasks, loadTasks } = useTasks()

  useEffect(() => {
    loadTasks();
  }, []);

  function renderMain(){
    if(tasks.length === 0) return <h1>No tasks yet</h1>
    
    return tasks.map((task, index) => {
      return <TaskCard task={task} key={index}/>
    })
  }

  return (
    <div>
      <h1>Tasks</h1>
      {renderMain()}
    </div>
  );
};

export default TasksPage;
