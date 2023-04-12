import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useTasks } from "../context/TaskProvider";
import { useParams, useNavigate } from "react-router-dom";

const TaskForm = () => {

  const params = useParams();
  const navigate = useNavigate();

  const { createTask, getTask, updateTask } = useTasks();
  
  const [task, setTask] = useState({
    title: "",
    description: "",
  });

  const { register, handleSubmit, setValue } = useForm();
  
  const onSubmit = async (data, e) => { 
    if(params.id){
        await updateTask(params.id, data)
        navigate("/")
      } else {
       await createTask(data);
      }
      e.target.reset()
   };

  useEffect(() => {
    const loadOneTask = async () => {
      if (params.id) {
        const task = await getTask(params.id);
        setTask(task);
      }
    };
    loadOneTask();
  }, [params.id, getTask]);


  useEffect(() => {
      setValue('title', task.title);
      setValue('description', task.description);
  }, [task, setValue]);

 

  return (
    <div>
      <h1>{params.id ? "Edit Task" : "New Task"}</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Title</label>
        <input
          type="text"
          name="title"
          placeholder="Write a title"
          {...register('title', {
            required: true,
            minLength: 2
          })}  
        />

        <label>Description</label>
        <textarea
          name="description"
          rows="3"
          placeholder="Write a description"
          {...register('description', {
            required: true,
            minLength: 2
          })} 
        ></textarea>
        <button type="submit">
          send
        </button>
      </form>
    </div>
  );
};

export default TaskForm;


