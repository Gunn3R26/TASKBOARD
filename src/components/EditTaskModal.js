import React from 'react';
import { useTaskContext } from '../context/TaskContext';
import './css/EditTask.css'
const EditTaskModal = ({ task, onClose }) => {
  const { tasks, setTasks } = useTaskContext();
  const [editedTask, setEditedTask] = React.useState({
    title: task.title,
    description: task.description,
    assignee: task.assignee,
    priority: task.priority,
    status: task.status,
    startDate: task.startDate,
    endDate: task.endDate,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedTask({
      ...editedTask,
      [name]: value,
    });
  };

  const handleSave = () => {
    const updatedTasks = tasks.map((t) => {
      if (t.title === task.title) {
        return editedTask;
      }
      return t;
    });

    setTasks(updatedTasks);
    onClose();
  };

  return (
    <div className="edit-task-modal">
      <div className="modal-content">
      <div className="title-edit">
          <h2>Edit Task</h2>
          <button className='but-edit' ><i className='gg-close' onClick={onClose}></i></button>
          </div>
        
        <form className='form-edit' onSubmit={handleSave}>
          <div className='title-edit-form'>
            <label>Title:</label>
            <input
              type="text"
              name="title"
              value={editedTask.title}
              readOnly
            />
          </div>
          <div>
            <label>Description:</label>
            <textarea
              name="description"
              value={editedTask.description}
              readOnly
            ></textarea>
          </div>
          <div>
            <label>Assignee:</label>
            <input
              type="text"
              name="assignee"
              value={editedTask.assignee}
              readOnly
            />
          </div>
          <div>
            <label>Priority:</label>
            <select
              name="priority"
              value={editedTask.priority}
              onChange={handleChange}
            >
              <option value="P0">P0</option>
              <option value="P1">P1</option>
              <option value="P2">P2</option>
            </select>
          </div>
          <div>
            <label>Status:</label>
            <select
              name="status"
              value={editedTask.status}
              onChange={handleChange}
            >
              <option value="Pending">Pending</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
              <option value="Deployed">Deployed</option>
              <option value="Deferred">Deferred</option>
            </select>
          </div>
          <button className='sub-edit' type="submit">Save</button>
        </form>
        
      </div>
    </div>
  );
};

export default EditTaskModal;
