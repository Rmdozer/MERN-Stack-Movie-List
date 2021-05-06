const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const todoRoutes = express.Router();
const PORT = 4000;

let Movie = require('./movie.model');

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/movies', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

todoRoutes.route('/').get(function(req, res) {
    Movie.find(function(err, todos) {
        if (err) {
            console.log(err);
        } else {
            res.json(todos);
        }
    });
});

todoRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    Movie.findById(id, function(err, todo) {
        res.json(todo);
    });
});

todoRoutes.route('/delete/:id').post(function(req, res) {
    Movie.findByIdAndRemove(req.params.id)
        .then(result => {
        res.status(200).json( {
        message: 'Address Deleted',
        result
        });
    });
});

todoRoutes.route('/add').post(function(req, res) {
    let todo = new Movie(req.body);
    todo.save()
        .then(todo => {
            res.status(200).json({'todo': 'todo added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new todo failed');
        });
});

app.use('/movies', todoRoutes);

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});