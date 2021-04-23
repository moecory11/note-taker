//Dependencies
const path = require("path");
const express = require('express');
const fs = require('fs');
const util = require('util');
const app = express();
//Sets up Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const PORT = process.env.PORT || 8080;
app.use(express.static("public"));

const readFileAsync = util.promisify(fs.readFile);


app.get('/api/notes', (req, res) => {
    readFileAsync('./db/db.json', "utf8")
    .then(data => {
        return res.json(JSON.parse(data));
    }) 
});

app.get('', (req, res) => {
    res.sendFile(path.join(__dirname, "public/index.html"))
});
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, "public/notes.html"))
});

app.get('/api/notes', (req, res) => res.json(notes));

const storage = JSON.parse(fs.readFileSync("./db/db.json", "utf-8"))
app.post('/api/notes',(req, res)=> {
    const newNotes = req.body
    storage.push(newNotes);
    fs.writeFileSync("./db/db.json", JSON.stringify(storage));
    res.json(storage);
});

app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
  });
  