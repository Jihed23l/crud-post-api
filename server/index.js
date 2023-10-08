const express = require('express');
const mongoose = require('mongoose');

const urlRoutes = require('./routes/postRoutes');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json({ message: "Hello To Our POST CRUD API!" });
});

app.use('/post', urlRoutes);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`);
});

mongoose.connect('mongodb+srv://admin:iPRT234oZ6XqEbuI@cluster0.5ujb29s.mongodb.net/').then((response) => {
    console.log('Connected to the database...');
    return response;
});