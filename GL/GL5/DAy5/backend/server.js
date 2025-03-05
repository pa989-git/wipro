
const express = require('express');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const socketIo = require('socket.io');
const http = require('http');
const app = express();
const server = http.createServer(app);
const io = socketIo(server, { cors: { origin: '*' } });

app.use(express.json());
app.use(cors());

const users = [{ username: 'admin', password: 'password' }];
const tasks = [];
const SECRET_KEY = 'mysecretkey';

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: '1h' });
        return res.json({ token });
    }
    res.status(401).json({ message: 'Invalid credentials' });
});

const verifyToken = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) return res.status(403).json({ message: 'Token required' });
    jwt.verify(token.split(' ')[1], SECRET_KEY, (err, decoded) => {
        if (err) return res.status(401).json({ message: 'Invalid token' });
        req.user = decoded;
        next();
    });
};

app.get('/tasks', verifyToken, (req, res) => res.json(tasks));
app.post('/tasks', verifyToken, (req, res) => {
    const task = { id: tasks.length + 1, text: req.body.text };
    tasks.push(task);
    io.emit('taskAdded', task);
    res.json(task);
});
app.delete('/tasks/:id', verifyToken, (req, res) => {
    const taskId = parseInt(req.params.id);
    const index = tasks.findIndex(t => t.id === taskId);
    if (index !== -1) {
        const deletedTask = tasks.splice(index, 1);
        io.emit('taskDeleted', taskId);
        return res.json(deletedTask);
    }
    res.status(404).json({ message: 'Task not found' });
});

server.listen(5000, () => console.log('Server running on port 5000'));
