//TODO: HTML routes

    //GET/notes should return the notes.html file
    
    //GET * should return the index.html


//TODO: API routes

    //GET /api/notes should read the db.json file and return all saved notes as JSON
    
    //POST /api/notes should receive a new notes to save on the request body and add it to the db.json file, 
    //and then return the new note to the client
    //HINT- each notes will need a unique id when it's save(npm packages)

//TODO: BONUS add the delete route to the application
//  
    //DELETE /api/notes/:id should receive a query parameter containing the id of the note in order to delete. 
    //In order to delete a note, read all notes from the db.json file, remove the note with the given property,
    //and then rewrite all the notes to the db.json file