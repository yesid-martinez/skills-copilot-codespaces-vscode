// Create a web server

const express = require('express');
const app = express();
const port = 3000;

// Middleware
app.use(express.json());

const comments = [
    {message: 'Hello'},
    {message: 'Hi'},
    {message: 'Bye'}
];

app.get('/comments', (req, res) => {
    res.send(comments);
});

app.post('/comments', (req, res) => {
    const comment = req.body;
    comments.push(comment);
    res.send(comment);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});