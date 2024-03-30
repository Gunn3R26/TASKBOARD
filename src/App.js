// src/App.js
import React from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { TaskProvider } from './context/TaskContext';
import '../src/components/css/TaskList.css';
function App() {
  return (
    <TaskProvider>
      <div className="App">
        
        <TaskForm />
        <TaskList />
      </div>
    </TaskProvider>
  );
}

export default App;
