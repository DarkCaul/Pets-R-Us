//imports

const express = require("express");
const path = require("path");
const port = process.env.PORT || 3000;

const app = express();

//views
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(express.static('public'));
app.use('/styles', express.static(__dirname + 'public/styles'));
app.use('/images', express.static(__dirname + 'public/images'));


//renders homepage
app.get('', (req, res) => {
    res.render('index');
});

//renders grooming page

app.get('/grooming', (req, res) => {
    res.render('grooming');
});

app.get('/boarding', (req, res) => {
    res.render('boarding');
});

app.get('/training', (req, res) => {
    res.render('training');
});


//listening on port 3000
app.listen(port, () => console.log(`listening on port ${port}`));
