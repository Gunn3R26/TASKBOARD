import React from 'react';
import './css/DeleteConfirmationModal.css';

const DeleteConfirmationModal = ({ onConfirm, onCancel }) => {
  return (
    <div className="delete-confirmation-modal">
      <h2>Confirm Deletion</h2>
      <p>Are you sure you want to delete this task?</p>
      <div className="button-container">
        <button onClick={onConfirm}>Yes</button>
        <button onClick={onCancel}>No</button>
      </div>
    </div>
  );
};

export default DeleteConfirmationModal;
