//imports

const express = require("express");
const path = require("path");
const port = process.env.PORT || 3000;

const app = express();


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');



app.use(express.static(path.join(__dirname, 'public')));


//renders homepage
app.get('/', (req, res) => {
    res.render('index');
});

//renders grooming page

app.get('/grooming', (req, res) => {
    res.render('grooming');
});





//listening on port 3000
app.listen(port, () => console.log(`listening on port ${port}`));
