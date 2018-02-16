const express = require('express');

var app = express();

app.get('/', (req, res) => {
    res.status(404).send({
        error: "Page not found.",
        name: "Todo app v1.0"
    });
});

app.get('/users', (req, res) => {
    res.status(200).send([{
        name: "Karim Mansour",
        age: 26
    }, {
        name: "Andrew Mead",
        age: 25
    }, {
        name: "Nehal",
        age: 25
    }]);
});
app.listen(3000);

module.exports.app = app;