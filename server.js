//Dependencies
const path = require("path");
const express = require('express');
const fs = require('fs');
const app = express();
//Sets up Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const PORT = process.env.PORT || 8080;
app.use(express.static("public"));

app.get('/api/notes', (req, res) => {

    fs.readFile('./db/db.json', "utf8", (err, data) => {
        let notes = JSON.parse(data);
        console.log(notes)
    });

});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "public/index.html"))
});
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, "public/notes.html"))
});

app.get('/api/notes', (req, res) => res.json(notes));

app.post('/api/notes',(req, res)=> {
        notes.push(req.body)
        res.json(req.body)
})


app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
  });
  