import React, { useState, useEffect } from "react";

export default function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  
  useEffect(() => {
    if (tasks.length > 10) {
      alert("You have more than 10 jobs to do!");
    }
  }, [tasks]);

  const addTask = () => {
    if (newTask.trim() === "") return; 
    setTasks([...tasks, newTask]);
    setNewTask(""); 
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f0f4f8",
      }}
    >
      <div
        style={{
          backgroundColor: "#ffffff",
          padding: "30px",
          borderRadius: "12px",
          boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
          textAlign: "center",
          width: "350px",
        }}
      >
        <h1 style={{ marginBottom: "20px", color: "#333" }}>ToDo List</h1>

        {/* Поле ввода и кнопка */}
        <div style={{ marginBottom: "20px", display: "flex", gap: "10px" }}>
          <input
            type="text"
            placeholder="Enter a new task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            style={{
              padding: "10px",
              flex: 1,
              border: "1px solid #ccc",
              borderRadius: "8px",
              outline: "none",
            }}
          />
          <button
            onClick={addTask}
            style={{
              padding: "10px 15px",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              transition: "0.3s",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#007bff")}
          >
            Add
          </button>
        </div>

        {/* Список задач */}
        <ul style={{ listStyleType: "none", padding: 0, textAlign: "left" }}>
          {tasks.length === 0 ? (
            <p style={{ color: "#888", textAlign: "center" }}>No tasks yet</p>
          ) : (
            tasks.map((task, index) => (
              <li
                key={index}
                style={{
                  padding: "10px",
                  borderBottom: "1px solid #eee",
                  color: "#333",
                }}
              >
                {index + 1}. {task}
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}
