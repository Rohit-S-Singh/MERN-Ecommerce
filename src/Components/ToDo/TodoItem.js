import React, { useState } from 'react';
import './style.css';

const TodoItem = ({ task, deleteTask, editTask, toggleTaskStatus }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(task.title);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    editTask(task.id, updatedTitle);
    setIsEditing(false);
  };

  return (
    <li>
      {isEditing ? (
        <>
          <input
            type="text"
            value={updatedTitle}
            onChange={(e) => setUpdatedTitle(e.target.value)}
          />
          <i className="fas fa-save" onClick={handleSave} />
        </>
      ) : (
        <>
          <span className={task.isDone ? 'todo-done' : 'todo-data'}>{task.title}</span>
          <i className="fas fa-edit" onClick={handleEdit} />
          <i className={task.isDone ? 'fas fa-undo' : 'fas fa-check'} onClick={() => toggleTaskStatus(task.id)} />
        </>
      )}
      <i className="fas fa-trash" onClick={() => deleteTask(task.id)} />
    </li>
  );
};

export default TodoItem;
