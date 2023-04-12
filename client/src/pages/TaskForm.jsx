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
      } else {
        await createTask(data);
      }
      navigate("/")
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

      <form className="bg-slate-300 max-w-sm rounded-md p-4 mx-auto mt-10" onSubmit={handleSubmit(onSubmit)}>
      <h1 className="text-xl-font-bold uppercase text-center">{params.id ? "Edit Task" : "New Task"}</h1>
        <label className="block">Title</label>
        <input
          type="text"
          name="title"
          className="px-2 py-1 rounded-sm w-full"
          placeholder="Write a title"
          {...register('title', {
            required: true,
            minLength: 2
          })}  
        />

        <label className="block">Description</label>
        <textarea
          name="description"
          rows="3"
          className="px-2 py-1 rounded-sm w-full"
          placeholder="Write a description"
          {...register('description', {
            required: true,
            minLength: 2
          })} 
        ></textarea>
        <button type="submit" className="block bg-indigo-500 px-2 py-1 text-white w-full rounded-md">
          send
        </button>
      </form>
    </div>
  );
};

export default TaskForm;


