export const loginUser = (username, password) => dispatch => {
    fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    })
    .then(res => res.json())
    .then(data => {
        localStorage.setItem('token', data.token);
        dispatch({ type: 'LOGIN_SUCCESS', payload: data.token });
    })
    .catch(() => dispatch({ type: 'LOGIN_FAIL' }));
};

export const fetchTasks = () => dispatch => {
    fetch('http://localhost:5000/tasks', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    })
    .then(res => res.json())
    .then(tasks => dispatch({ type: 'FETCH_TASKS', payload: tasks }));
};

export const addTask = text => dispatch => {
    fetch('http://localhost:5000/tasks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${localStorage.getItem('token')}` },
        body: JSON.stringify({ text })
    })
    .then(res => res.json())
    .then(task => dispatch({ type: 'ADD_TASK', payload: task }));
};

export const deleteTask = id => dispatch => {
    fetch(`http://localhost:5000/tasks/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    })
    .then(() => dispatch({ type: 'DELETE_TASK', payload: id }));
};
