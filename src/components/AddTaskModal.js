import React, { useState } from 'react';
import { useTaskContext } from '../context/TaskContext';
import './css/AddTask.css';

const AddTaskModal = ({ onClose, onSubmit }) => {
  const { tasks } = useTaskContext();
  const [newTask, setNewTask] = useState({
    title: '',
    description: '',
    assignee: '',
    priority: 'P0',
    status: 'Pending',
    startDate: new Date().toISOString().split('T')[0],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    // Check for empty fields
    if (
      newTask.title.trim() === '' ||
      newTask.description.trim() === '' ||
      newTask.assignee.trim() === ''
    ) {
      alert('All fields must be filled out!');
      return;
    }
    
    onSubmit(newTask);
  };

  return (
    <div className="add-task-modal">
      <h2>Add New Task</h2>
      <div className="title-add">
        <label>Title:</label>
        <input type="text" name="title" value={newTask.title} onChange={handleChange} required />
      </div>
      <div className="desc-add">
        <label>Description:</label>
        <textarea name="description" value={newTask.description} onChange={handleChange} required></textarea>
      </div>
      <div className="assignee-add">
        <label>Assignee:</label>
        <input type="text" name="assignee" value={newTask.assignee} onChange={handleChange} required />
      </div>
      
      <div className="priority-add">
        <label> Priority:</label>
        <select name="priority" value={newTask.priority} onChange={handleChange}>
          <option value="P0">P0</option>
          <option value="P1">P1</option>
          <option value="P2">P2</option>
        </select>
      </div>
      
      <div className="button-add">
        <button onClick={handleSubmit}>Submit</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default AddTaskModal;
