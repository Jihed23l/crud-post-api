const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
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

const options = {
    definition: {
        openapi: "3.1.0",
        info: {
            title: "POST CRUD EXPRESS- API with Swagger",
            version: "0.1.0",
            description:
                "This is a simple POST CRUD API application made with Express and documented with Swagger",
            contact: {
                name: "JihedLatiri",
                url: "https://github.com/Jihed23l",
            },
        },
        servers: [
            {
                url: "http://localhost:3000",
            },
        ],
    },
    apis: ["./routes/*.js"],
};

const specs = swaggerJsdoc(options);
app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(specs)
);