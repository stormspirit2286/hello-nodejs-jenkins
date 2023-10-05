var express = require('express');
var app = express();

app.get('/contact', (req, res) => {
    res.send('Hello world, My name is Duy');
})

app.listen(3000, () => {
    console.log('Server is running on port: 3000');
})