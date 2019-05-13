const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose.connect(
    'mongodb://omnistack:omnistack@localhost:27017/omnistack', {
    useNewUrlParser: true
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(require('./routes'));

console.log('Listening on port 3333');

app.listen(3333);
