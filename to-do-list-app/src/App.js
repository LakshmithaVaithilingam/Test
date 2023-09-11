import React, { useState } from 'react';
import './App.css';
import TaskInput from './TaskInput/TaskInput';
import TaskList from './TaskList/TaskList';
import TaskItem from './TaskItem/TaskItem';

function App() {
  const [tasks, setTasks] = useState([]);
  
  const addTask = (newTask) => {
    // Generate a unique ID for the new task (you can use a library like uuid for this)
    newTask.id = Date.now().toString();
    setTasks([...tasks, newTask]);
  };

  const toggleComplete = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <TaskInput addTask={addTask} />
      <TaskList
        tasks={tasks}
        toggleComplete={toggleComplete}
        deleteTask={deleteTask}
      />
    </div>
  );
}

export default App;