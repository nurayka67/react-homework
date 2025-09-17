import React, { useState, useCallback, useRef, useEffect } from 'react';
import TaskList from './components/TaskList';
import TaskFilter from './components/TaskFilter';
import TaskCounter from './components/TaskCounter';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');
  const inputRef = useRef(null);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    setTasks(savedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = useCallback((text) => {
    if (text.trim()) {
      setTasks(prev => [...prev, {
        id: Date.now(),
        text: text.trim(),
        completed: false
      }]);
    }
  }, []);

  const toggleTask = useCallback((id) => {
    setTasks(prev => prev.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  }, []);

  const deleteTask = useCallback((id) => {
    setTasks(prev => prev.filter(task => task.id !== id));
  }, []);

  const filteredTasks = tasks.filter(task => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });

  const handleAddTask = () => {
    if (inputRef.current?.value) {
      addTask(inputRef.current.value);
      inputRef.current.value = '';
      inputRef.current.focus();
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleAddTask();
  };

  return (
    <div className="app">
      <div className="container">
        <h1>ToDo List</h1>
        
        <div className="input-section">
          <input
            ref={inputRef}
            type="text"
            placeholder="Новая задача..."
            onKeyPress={handleKeyPress}
          />
          <button onClick={handleAddTask}>Добавить</button>
        </div>

        <TaskCounter tasks={tasks} />
        <TaskFilter filter={filter} setFilter={setFilter} />
        <TaskList tasks={filteredTasks} onToggle={toggleTask} onDelete={deleteTask} />
      </div>
    </div>
  );
}

export default App;