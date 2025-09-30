import React, { useState } from 'react'

const Taskform = () => {
  const [task, settask]= useState({
    title:"",
    description:"",
  });
  const handlechange= (e)=>{
    e.preventDefault();
    settask({
      ...task,
      [e.target.name]: e.target.value,
    })
  }
   const handleSubmit = (e)=>{
      e.preventDefault();
      console.log("task created successfully")
      settask({
        title:"",
        description:"",
      })
    }
  return (
      
      <form
      onsubmit={handleSubmit}
      className="bg-white p-6 rounded-2xl shadow-md max-w-lg w-full mx-auto mb-8 border border-gray-200"
    >
      <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">
        Add a New Task
      </h2>

      {/* Task Title */}
      <div className="mb-4">
        <label
          htmlFor="title"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={task.title}
          onChange={handlechange}
          placeholder="Enter task title"
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition"
        />
      </div>

      {/* Task Description */}
      <div className="mb-4">
        <label
          htmlFor="description"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Description
        </label>
        <textarea
          id="description"
          name="description"
          value={task.description}
          onChange={handleChange}
          placeholder="Enter task description"
          rows="3"
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition resize-none"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition font-medium"
      >
        Add Task
      </button>
      
    </form>
  );
};

export default Taskform