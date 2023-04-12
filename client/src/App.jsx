import React from "react";
import { Routes, Route } from "react-router-dom";
import TaskForm from "./pages/TaskForm";
import TasksPage from "./pages/TasksPage";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import { TaskContextProvider } from "./context/TaskProvider";

const App = () => {
  return (
    <div className="bg-zinc-800 h-screen">
          <Navbar />
      <div className="container mx-auto py-4 px-20">
        <TaskContextProvider>
          <Routes>
            <Route path="/" element={<TasksPage />} />
            <Route path="/new" element={<TaskForm />} />
            <Route path="/edit/:id" element={<TaskForm />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </TaskContextProvider>
      </div>
    </div>
  );
};

export default App;
