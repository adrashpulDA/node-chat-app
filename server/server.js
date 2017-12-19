const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const publicPath = path.join(__dirname, '/../public');
const port = process.env.PORT || 3000;
var app = express();

app.use(express.static(publicPath)); //configures to use public as an index
app.use(bodyParser.json());


app.listen(3000, ()=>{
    console.log(`Server is up on port ${port}`);
})



