import React from 'react';

const TaskCounter = React.memo(({ tasks}) => {
    const completed = tasks.filter(t => tasks.completed).length;
    return (
    <div className="counter">
        <span>Всего: {tasks.length}</span>
        <span>Завершено: {completed}</span>
    </div>
    );
});

export default TaskCounter;