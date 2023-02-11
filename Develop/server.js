const express = require('express');
const path = require('path');
const api = require('./routes/index.js');


const PORT = 3001;

const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

app.use(express.static('public'));


//TODO: HTML routes
 //TODO: GET /notes should return the notes.html file
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirName, '/public/notes.html'))
})
    //GET * should return the index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirName, '/public/index.html'))
})
   

//TODO: API routes

    

//TODO: BONUS add the delete route to the application
//  

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);