import React from 'react';

const TaskItem = React.memo(({ task, onToggle, onDelete }) => (
  <div className={`task ${task.completed ? 'completed' : ''}`}>
    <input
      type="checkbox"
      checked={task.completed}
      onChange={() => onToggle(task.id)}
    />
    <span>{task.text}</span>
    <button onClick={() => onDelete(task.id)}>×</button>
  </div>
));

export default TaskItem;