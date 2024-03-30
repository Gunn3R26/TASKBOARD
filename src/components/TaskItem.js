import React, { useState } from 'react';
import { useTaskContext } from '../context/TaskContext';
import EditTaskModal from './EditTaskModal';
import DeleteConfirmationModal from './DeleteConfirmationModal'; // Import the new component
import './css/TaskList.css';
import './css/AddTask.css';

const TaskItem = ({ task }) => {
  const { tasks, setTasks } = useTaskContext();
  const [isEditing, setIsEditing] = useState(false);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false); // State for showing delete confirmation

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCloseModal = () => {
    setIsEditing(false);
  };

  const handleDelete = () => {
    // Check if the task status is "Completed"
    if (task.status === "Completed") {
      alert("Task with status 'Completed' cannot be deleted.");
      return;
    }
    setShowDeleteConfirmation(true);
  };

  const handleConfirmDelete = () => {
    const updatedTasks = tasks.filter((t) => t.title !== task.title);
    setTasks(updatedTasks);
    setShowDeleteConfirmation(false);
  };

  const handleCancelDelete = () => {
    setShowDeleteConfirmation(false);
  };

  return (
    <div>
      {isEditing ? (
        <EditTaskModal task={task} onClose={handleCloseModal} />
      ) : (
        <div className="task-item">
          <h3>{task.title} <span><button>{task.priority}</button></span></h3>
          <div className="line-item"></div>
          <p className='desc-item'>{task.description}</p>
          <p className='assign-item'>@ {task.assignee}</p>
          <div className='button-item'>
            <button className='status-item'>{task.status}</button>
            <div className="button-item-inside">
              <button onClick={handleEdit}>Edit</button>
              <button onClick={handleDelete}>Delete</button>
            </div>
          </div>
        </div>
      )}
      {showDeleteConfirmation && (
        <DeleteConfirmationModal 
          onConfirm={handleConfirmDelete} 
          onCancel={handleCancelDelete} 
        />
      )}
    </div>
  );
};

export default TaskItem;
