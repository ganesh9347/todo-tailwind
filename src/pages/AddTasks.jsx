import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from '../components/Button';
//import Button from '../../components/Button';
// import Button from "../components/Button";

const AddTask = () => {
  const [task, setTask] = useState("");
  const navigate = useNavigate();

  const handleAdd = () => {
    if (!task.trim()) return alert("Task cannot be empty!");
    const saved = JSON.parse(localStorage.getItem("tasks")) || [];
    saved.push(task);
    localStorage.setItem("tasks", JSON.stringify(saved));
    navigate("/");
  };

  return (
    <div className="max-w-[500px] mx-auto my-[40px] p-5 rounded-xl border border-gray-300 bg-[#f9fafb] shadow-md">
      <h1 className="text-center font-bold text-2xl mb-5 text-[#1e293b]">Add New Task</h1>

      <input
        type="text"
        placeholder="Enter your task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="w-full p-[10px] border border-[#cbd5e1] rounded-md mb-1 text-[15px]outline-none focus:border-blue-500"
      />
      <Button text="Add Task" onClick={handleAdd} /> 
    </div>
  );
};

export default AddTask;