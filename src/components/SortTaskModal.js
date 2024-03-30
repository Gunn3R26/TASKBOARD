import React, { useState } from 'react';
import './css/SortTaskModal.css'
const SortTaskModal = ({ onSortChange }) => {
  const [sortBy, setSortBy] = useState(''); // State to manage the sort option

  const handleChange = (e) => {
    const { value } = e.target;
    setSortBy(value);
  };

  const applySort = () => {
    onSortChange(sortBy);
  };

  return (
    <div className="sort-modal">

      <div className="sort-group">
        <select 
          id="sortOption" 
          name="sortOption" 
          value={sortBy}
          onChange={handleChange}
        >
          <option value="">Sort By</option>
          <option value="priority">Priority</option>
          <option value="startDate">Start Date</option>
        </select>
      </div>

      <button className='but-sort' onClick={applySort}>Apply Sort</button>
    </div>
  );
};

export default SortTaskModal;
