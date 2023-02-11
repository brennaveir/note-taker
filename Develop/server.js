const express = require('express');
const path = require('path');
const api = require('./routes/index.js');
const routes = require("./routes")

const PORT = 3001;

const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

app.use(express.static('public'));


//TODO: HTML routes

   

//TODO: API routes

    

//TODO: BONUS add the delete route to the application
//  

app.use(routes);