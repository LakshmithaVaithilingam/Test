import React, { useState } from 'react';
import TaskItem from '../TaskItem/TaskItem';
import '../index.css'; // Import the index.css file

function TaskList({ tasks, toggleComplete, deleteTask }) {
  const [filter, setFilter] = useState('all'); // State for the filter

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  // Filter the tasks based on the selected filter
  const filteredTasks = tasks.filter((task) => {
    if (filter === 'all') {
      return true;
    } else if (filter === 'completed') {
      return task.completed;
    } else {
      return !task.completed; // 'uncompleted' filter
    }
  });

  return (
    <div>
      {/* Filter controls */}
      <div>
        <label>
          <input
            type="radio"
            value="all"
            checked={filter === 'all'}
            onChange={handleFilterChange}
          />
          All
        </label>
        <label>
          <input
            type="radio"
            value="completed"
            checked={filter === 'completed'}
            onChange={handleFilterChange}
          />
          Completed
        </label>
        <label>
          <input
            type="radio"
            value="uncompleted"
            checked={filter === 'uncompleted'}
            onChange={handleFilterChange}
          />
          Uncompleted
        </label>
      </div>

      {/* Task list */}
      <ul>
        {filteredTasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            toggleComplete={toggleComplete}
            deleteTask={deleteTask}
          />
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
