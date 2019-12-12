const fs = require("fs");
const express = require("express");
const app = express();
const router = require("router");
const apiRoutes = require("../routes/apiRoutes");
const htmlRoutes = require("../routes/htmlRoutes");


//ROUTES HTML

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'notes.html'));
});
