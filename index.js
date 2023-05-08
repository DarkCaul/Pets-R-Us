//imports

const express = require("express");
const path = require("path");
const port = process.env.PORT || 3000;
const mongoose = require("mongoose");
const fs = require("fs"); 

const Customer = require('./models/customers');
const appointment = require('./models/appointment');

const app = express();


//views
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(express.static('public'));
app.use('/styles', express.static(__dirname + 'public/styles'));
app.use('/images', express.static(__dirname + 'public/images'));


app.use(express.urlencoded({ extended: true })); 
app.use(express.json());



//mongodb connection
const connect = "mongodb+srv://web340_admin:buwebdev@bellevueuniversity.mwwdk3p.mongodb.net/test"

mongoose.connect(connect).then(() => {
    console.log('connected');
}).catch((err) => {
    console.log('connection error:' + err.message);
});

//renders homepage
app.get('/', (req, res) => {
    res.render('index');
});

//renders grooming page

app.get('/grooming', (req, res) => {
    res.render('grooming');
});

//renders boarding page
app.get('/boarding', (req, res) => {
    res.render('boarding');
});

//renders training page
app.get('/training', (req, res) => {
    res.render('training');
});

//renders registration page
app.get('/registration', (req, res) => {
    res.render('registration');
});

//renders customer list page
app.get('/customer-list', (req, res) => {
    res.render('customer-list');
});

//renders appoinments page
app.get('/appointment', (req, res) => {
    res.render('appointment');
});

app.post('./customers', (req, res, next) => {
    console.log(req.body);
    console.log(req.body.customerId);
    console.log(req.body.email);
    console.log(req.body.password);
    const newCustomer = new Customer({
    customerId: customerId,
    email: email,
    password: password
});
    console.log(newCustomer);



Customer.create(newCustomer, function(err, customer) {
    if (err) {
        console.log(err);
    } else {
        res.render('index', {})
    }
});
});

app.get('/customers',(req, res) => {
    Customer.find({}, function(err, customer) {
        if (err) {
            console.log(err);
            next (err);
    }else{
        res.render('customer-list')
    }})
})

app.post('./appointment', (req, res, next) => {
    const newAppointment = new Appointment({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        service: req.body.service
    });

    appointment.create(newAppointment, function(err, appointment){
        if (err) {
            console.log(err);
            next(err);
        } else {
            res.render('appointment-list');
        }
        
    });   
});



//listening on port 3000
app.listen(port, () => console.log(`listening on port ${port}`));
