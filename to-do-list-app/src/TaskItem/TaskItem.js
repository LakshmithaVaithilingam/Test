import React from 'react';
import '../index.css'; // Import the index.css file



function TaskItem({ task, toggleComplete, deleteTask }) {
    const { id, title, description, completed } = task;
  
    return (
      <li>
        <input
          type="checkbox"
          checked={completed}
          onChange={() => toggleComplete(id)}
        />
        <span>{title}:</span>
        <span>{description}</span> {/* Display the description */}
        <button onClick={() => deleteTask(id)}>Delete</button>
      </li>
    );
  }
  
  export default TaskItem;