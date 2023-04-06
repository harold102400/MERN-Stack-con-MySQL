import React from 'react'
import {Routes, Route} from "react-router-dom"
import TaskForm from "./pages/TaskForm"
import TasksPage from "./pages/TasksPage"
import NotFound from './pages/NotFound'
import Navbar from './components/Navbar';

const App = () => {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={ <TasksPage /> } />
      <Route path="/new" element={ <TaskForm /> } />
      <Route path="*" element={ <NotFound /> } />
    </Routes>
    
    </>
  )
}

export default App