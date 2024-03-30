// src/context/TaskContext.js
import React, { createContext, useState, useContext } from 'react';

const TaskContext = createContext();

export const useTaskContext = () => {
  return useContext(TaskContext);
};

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const updateTask = (updatedTask) => {
    const updatedTasks = tasks.map((task) =>
      task.title === updatedTask.title ? updatedTask : task
    );
    setTasks(updatedTasks);
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, updateTask, setTasks }}>
      {children}
    </TaskContext.Provider>
  );
};