import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onDelete }) => (
    <ul>
        {tasks.map(task => (
            <TaskItem key={task.id} task={task} onDelete={onDelete} />
        ))}
    </ul>
);

export default TaskList;
