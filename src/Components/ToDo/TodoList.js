import React, { useState } from 'react';
import TodoItem from './TodoItem';
import './style.css';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() === '') return;

    const newTaskObject = {
      id: Date.now(), // Simulating unique ID
      title: newTask,
      isDone: false, // New field to track completion status
    };

    setTasks([...tasks, newTaskObject]);
    setNewTask('');
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const editTask = (id, updatedTitle) => {
    setTasks(tasks.map(task => (task.id === id ? { ...task, title: updatedTitle } : task)));
  };

  const toggleTaskStatus = (id) => {
    setTasks(tasks.map(task => (task.id === id ? { ...task, isDone: !task.isDone } : task)));
  };

  return (
    <div className="todo-container">
      <h1 id = "txt-heading">Todo List</h1>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="New Task"
      />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map(task => (
          <TodoItem key={task.id} task={task} deleteTask={deleteTask} editTask={editTask} toggleTaskStatus={toggleTaskStatus} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
