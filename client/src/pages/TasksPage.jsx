import React, { useEffect, useState } from "react";
import { getTasksRequest } from "../api/tasks.api";
import TaskCard from "../components/TaskCard";

const TasksPage = () => {

  const [Tasks, setTasks] = useState([]);

  useEffect(() => {
    async function loadTasks() {
      const response = await getTasksRequest();
      setTasks(response.data);
    }
    loadTasks();
  }, []);

  return (
    <div>
      <h1>Tasks</h1>
      {
        Tasks.map((task, index) => {
          return <TaskCard task={task} key={index}/>
        })
      }
    </div>
  );
};

export default TasksPage;
