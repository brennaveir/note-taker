const express = require('express')
const router = express.Router()
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');
const uuid = require("../helpers/uuid")

//TODO: GET /api/notes should read the db.json file and return all saved notes as JSON
router.get('/', (req, res) => {
    console.info(`${req.method} request received for notes`);
    readFromFile('./db/db.json')
    .then((data) => res.json(JSON.parse(data)))
})
    
//TODO: POST /api/notes should receive a new notes to save on the request body and add it to the db.json file, 
    //and then return the new note to the client
    //HINT- each notes will need a unique id when it's save(npm packages)
router.post('/', (req, res) => {
    console.info(`${req.method} request received to post note`);
    console.log(req.body)
    const { title, text } = req.body

    if (title && text) {
        const newNote = {
            title,
            text,
            id: uuid(),
        };
console.log(newNote)
        readAndAppend(newNote, './db/db.json');

        const response = {
            status: 'success',
            body: newNote,
        };

        res.json(response);
    } else {
        res.json("Error in posting note")
    }
})

//TODO: DELETE /api/notes/:id should receive a query parameter containing the id of the note in order to delete. 
    //In order to delete a note, read all notes from the db.json file, remove the note with the given property,
    //and then rewrite all the notes to the db.json file

 module.exports = router;


