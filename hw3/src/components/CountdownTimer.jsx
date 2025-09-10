import React, { useState, useEffect } from "react";

export default function CountdownTimer() {
  const [seconds, setSeconds] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  // Таймер обратного отсчета
  useEffect(() => {
    if (!isRunning || timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [isRunning, timeLeft]);

  
  useEffect(() => {
    if (timeLeft === 0 && isRunning) {
      setIsRunning(false);
      alert("Time's up!");
    }
  }, [timeLeft, isRunning]);

  const handleStart = () => {
    if (seconds > 0) {
      setTimeLeft(seconds);
      setIsRunning(true);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center", 
        alignItems: "center",     
        height: "100vh",          
        textAlign: "center",
        backgroundColor: "#f3f4f6", 
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1 style={{ fontSize: "2.5rem", marginBottom: "20px" }}>
        ⏳ Countdown Timer
      </h1>

      {/* Поле для ввода */}
      <input
        type="number"
        value={seconds}
        onChange={(e) => setSeconds(Number(e.target.value))}
        placeholder="Enter seconds"
        style={{
          padding: "10px",
          textAlign: "center",
          fontSize: "1rem",
          width: "160px",
          border: "1px solid #ccc",
          borderRadius: "8px",
          marginBottom: "15px",
        }}
      />

      {/* Кнопка */}
      <button
        onClick={handleStart}
        disabled={isRunning}
        style={{
          padding: "10px 20px",
          backgroundColor: "#007BFF",
          color: "white",
          fontSize: "1rem",
          fontWeight: "bold",
          border: "none",
          cursor: "pointer",
          borderRadius: "8px",
          transition: "0.3s",
        }}
      >
        Start
      </button>

      {/* Время */}
      <h2 style={{ marginTop: "30px", fontSize: "1.5rem", color: "#333" }}>
        Time left: {timeLeft} sec
      </h2>
    </div>
  );
}
