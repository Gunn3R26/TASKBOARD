import React, { useState } from 'react';
import { useTaskContext } from '../context/TaskContext';
import './css/FilterTaskModal.css'

const FilterTaskModal = ({ onFilterChange }) => {
  const { tasks } = useTaskContext();
  const [filters, setFilters] = useState({
    fromDate: '',
    toDate: '',
    assignee: '',
    priority: '',
  });
  const [isFiltering, setIsFiltering] = useState(false); // State to manage the visibility of the cancel button

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  const applyFilters = () => {
    setIsFiltering(true); // Show the cancel button when filters are applied
    onFilterChange(filters);
  };

  const cancelFilters = () => {
    setFilters({
      fromDate: '',
      toDate: '',
      assignee: '',
      priority: '',
    });
    setIsFiltering(false); // Hide the cancel button and clear the filters
    onFilterChange({
      fromDate: '',
      toDate: '',
      assignee: '',
      priority: '',
    });
  };

  return (
    <div className="filter-modal">
        <h2>Filter By:</h2>
      <div className="filter-date">
      <div className="filter-date1">
        
        <input 
          type="date" 
          id="fromDate" 
          name="fromDate" 
          value={filters.fromDate}
          onChange={handleChange}
        />
      </div>
      <div className="filter-assignee">
        
        <input 
          type="text" 
          id="assignee" 
          name="assignee" 
          placeholder='Assignee'
          value={filters.assignee}
          onChange={handleChange}
        />
      </div>
      </div>

      

      <div className="filter-priority">
        <select 
          id="priority" 
          name="priority" 
          value={filters.priority}
          onChange={handleChange}
        >
          <option value=""> Priority</option>
          <option value="P0">P0</option>
          <option value="P1">P1</option>
          <option value="P2">P2</option>
        </select>
      </div>

      <button className='filter-but' onClick={applyFilters}>Apply Filters</button>
      {isFiltering && <button className='cancel-filter' onClick={cancelFilters}>Cancel</button>} {/* Display the cancel button conditionally */}
    </div>
  );
};

export default FilterTaskModal;
