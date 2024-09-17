import React, { useState } from 'react';
import './css/TodoForm.css';
import { IoTrashBinSharp } from "react-icons/io5";
import { MdEdit } from "react-icons/md";
import { FaRegSave } from "react-icons/fa";
import { FcCancel } from "react-icons/fc";


function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [currentTaskIndex, setCurrentTaskIndex] = useState(null);
  const [editedTaskText, setEditedTaskText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask !== '') {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const handleDelete = (index) => {
    setTasks(tasks.filter((task, i) => i !== index));
  };

  const handleToggle = (index) => {
    setTasks(
      tasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleEdit = (index) => {
    setIsEditing(true);
    setCurrentTaskIndex(index);
    setEditedTaskText(tasks[index].text);
  };

  const handleSaveEdit = () => {
    const updatedTasks = tasks.map((task, i) =>
      i === currentTaskIndex ? { ...task, text: editedTaskText } : task
    );
    setTasks(updatedTasks);
    setIsEditing(false);
    setCurrentTaskIndex(null);
  };


  const handleCancelEdit = () => {
    setIsEditing(false);
    setCurrentTaskIndex(null);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Enter ny oppgave"
          />
          <button type="submit">Legg til</button>
        </div>
      </form>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <div className="task-item">
              <div className="checkbox-container">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => handleToggle(index)}
                />
              </div>
              <div className="task-text-container">
                <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                  {task.text}
                </span>
              </div>
              <div className="edit-button-container">
                <button onClick={() => handleEdit(index)}><MdEdit /></button>
              </div>
              <div className="delete-button-container">
                <button onClick={() => handleDelete(index)}><IoTrashBinSharp /></button>
              </div>
            </div>
          </li>
        ))}
      </ul>

      {isEditing && (
        <div className="modal">
          <div className="modal-content">
            <h2>Rediger Oppgave</h2>
            <input
              type="text"
              value={editedTaskText}
              onChange={(e) => setEditedTaskText(e.target.value)}
            />
            <div className="modal-buttons">
              <button onClick={handleSaveEdit}><FaRegSave /></button>
              <button onClick={handleCancelEdit}><FcCancel /></button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default TodoList;
