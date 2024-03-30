import React, { useState } from 'react';
import { useTaskContext } from '../context/TaskContext';
import AddTaskModal from './AddTaskModal'; 
import './css/TaskForm.css'
const TaskForm = () => {
  const { addTask } = useTaskContext();
  
  const [isAddTaskModalOpen, setIsAddTaskModalOpen] = useState(false); // State for AddTaskModal visibility
  
  const handleOpenAddTaskModal = () => {
    setIsAddTaskModalOpen(true);
  };

  const handleCloseAddTaskModal = () => {
    setIsAddTaskModalOpen(false);
  };

  const handleSubmit = (newTask) => {
    addTask(newTask);
    handleCloseAddTaskModal();
  };

  return (
    <div className="task-form">
      <h1>Task Board</h1>
      {/* Add Task button inside TaskForm */}
      <button className="add-task-button" onClick={handleOpenAddTaskModal}>
        Add Task
      </button>
      
      {/* AddTaskModal */}
      {isAddTaskModalOpen && <AddTaskModal onClose={handleCloseAddTaskModal} onSubmit={handleSubmit} />}
    </div>
  );
};

export default TaskForm;
