const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose.connect(
    'mongodb+srv://omnistack:omnistack@cluster0-xbqks.mongodb.net/omnistack?retryWrites=true', {
    useNewUrlParser: true
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(require('./routes'));

console.log('Listening on port 3333');

app.listen(3333);
