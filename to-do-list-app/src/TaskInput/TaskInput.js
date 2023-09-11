import React, { useState } from 'react';
import '../index.css'; // Import the index.css file


function TaskInput({ addTask }) {
  const [task, setTask] = useState({ title: '', description: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.title.trim() === '') return;
    addTask(task);
    setTask({ title: '', description: '' });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Task title"
          value={task.title}
          onChange={handleChange}
        />
        <input
          type="text"
          name="description"
          placeholder="Task description"
          value={task.description}
          onChange={handleChange}
        />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
}

export default TaskInput;
