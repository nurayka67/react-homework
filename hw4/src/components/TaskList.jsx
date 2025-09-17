import React from 'react';
import TaskItem from './TaskItem';

const TaskList = React.memo(({ tasks, onToggle, onDelete }) => {
  if (tasks.length === 0) return <p className="empty">Нет задач</p>;
  
  return (
    <div className="task-list">
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} onToggle={onToggle} onDelete={onDelete} />
      ))}
    </div>
  );
});

export default TaskList;