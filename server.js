const mysql = require("mysql");
const express = require("express");
const bodyParser = require("body-parser");

var app = express();

app.use(bodyParser.json());

/*
var mysqlConnection = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : ,
    database : "goc",
    multipleStatements: true
});

mysqlConnection.connect( (err) => {
    if (!err) {
        console.log("Connected");
    } else {
        console.log(err.code);
        console.log("Connection Failed");
    }
})*/


app.use(express.static(__dirname + '/public'));

// routing for pages
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/index', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/about', (req, res) => {
    res.sendFile(__dirname +'/about.html')
})

app.get('/gladHost', (req, res) => {
    res.sendFile(__dirname + '/gladHost.html')
})

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/logIn.html')
})

app.get('/rewards', (req, res) => {
    res.sendFile(__dirname + '/rewards.html')
})

app.get('/roles', (req, res) => {
    res.sendFile(__dirname + '/roles.html')
})

app.get('/spotA', (req, res) => {
    res.sendFile(__dirname + '/rolesSpotA.html')
})

app.get('/spotB', (req, res) => {
    res.sendFile(__dirname + '/rolesSpotB.html')
})

app.get('/sessionMaxV2', (req, res) => {
    res.sendFile(__dirname + '/sessionMaxV2.html')
})

app.get('/sessionPage', (req, res) => {
    res.sendFile(__dirname + '/sessionPage.html')
})


app.listen(3000);


