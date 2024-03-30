import React, { useState } from 'react';
import { useTaskContext } from '../context/TaskContext';
import TaskItem from './TaskItem';
import FilterTaskModal from './FilterTaskModal';
import SortTaskModal from './SortTaskModal';  // Import the SortTaskModal
import './css/TaskList.css';
import './css/TaskCards.css';

const TaskList = () => {
  const { tasks } = useTaskContext();
  const [filters, setFilters] = useState({
    fromDate: '',
    toDate: '',
    assignee: '',
    priority: '',
  });
  const [sortBy, setSortBy] = useState('');  // State for sort option

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const handleSortChange = (newSortBy) => {  // Function to handle sort change
    setSortBy(newSortBy);
  };

  // Filter tasks based on the current filters
  const filteredTasks = tasks.filter((task) => {
    const matchFromDate = !filters.fromDate || new Date(task.startDate) >= new Date(filters.fromDate);
    const matchToDate = !filters.toDate || new Date(task.startDate) <= new Date(filters.toDate);
    const matchAssignee = !filters.assignee || task.assignee.toLowerCase().includes(filters.assignee.toLowerCase());
    const matchPriority = !filters.priority || task.priority === filters.priority;

    return matchFromDate && matchToDate && matchAssignee && matchPriority;
  });

  // Sort filtered tasks based on the current sort option
  const sortedTasks = [...filteredTasks].sort((a, b) => {
    if (sortBy === 'priority') {
      return a.priority.localeCompare(b.priority);
    }
    if (sortBy === 'startDate') {
      return new Date(a.startDate) - new Date(b.startDate);
    }
    return 0;
  });

  const allStatuses = ['Pending', 'In Progress', 'Completed', 'Deployed', 'Deferred'];

  // Group sorted tasks by status
  const groupedTasks = sortedTasks.reduce((acc, task) => {
    if (!acc[task.status]) {
      acc[task.status] = [];
    }
    acc[task.status].push(task);
    return acc;
  }, {});

  return (
    <>
      <div className="filter-list">
        <FilterTaskModal onFilterChange={handleFilterChange} />
        <SortTaskModal onSortChange={handleSortChange} />  {/* Add SortTaskModal here */}
      </div>
      <div className="task-list">
        {allStatuses.map((status) => (
          <div key={status} className="task-column">
            <div className="status-card">
              <h2 className='status-title'>{status}</h2>
              <div className="task-cards-container">
                {!groupedTasks[status] || groupedTasks[status].length === 0 ? (
                  <p>No tasks for this status</p>
                ) : (
                  <div className="task-cards">
                    {groupedTasks[status].map((task) => (
                      <div key={task.title} className="task-card">
                        <TaskItem task={task} />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TaskList;
