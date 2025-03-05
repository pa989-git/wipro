import React from 'react';

const TaskItem = ({ task, onDelete }) => (
    <li>
        {task.text} <button onClick={() => onDelete(task.id)}>Delete</button>
    </li>
);

export default TaskItem;
