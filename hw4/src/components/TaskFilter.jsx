import React from 'react';

const TaskFilter = React.memo(({ filter, setFilter}) => {
    const filters = ['all', 'active', 'completed'];
    const labels = { all: 'Все', active: 'Активные', completed: 'Завершенные' };
    return (
    <div className="filters">
        {filters.map(f => (
            <button
                key={f}
                className={filter === f ? 'active' : ''}
                onClick={() => setFilter(f)}
            >
                {labels[f]}
            </button>
        ))}
    </div>
    );
});

export default TaskFilter;