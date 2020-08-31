const mysql = require("mysql");
const express = require("express");
const bodyParser = require("body-parser");

var app = express();

app.use(bodyParser.json());
const test = "asdasd";

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


app.use(express.static(__dirname));

// routing for pages
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/index.html', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/about.html', (req, res) => {
    res.sendFile(__dirname +'/about.html')
})

app.get('/gladHost.html', (req, res) => {
    res.sendFile(__dirname + '/gladHost.html')
})

app.get('/logIn.html', (req, res) => {
    res.sendFile(__dirname + '/logIn.html')
})

app.get('/rewards.html', (req, res) => {
    res.sendFile(__dirname + '/rewards.html')
})

app.get('/roles.html', (req, res) => {
    res.sendFile(__dirname + '/roles.html')
})

app.get('/rolesSpotA.html', (req, res) => {
    res.sendFile(__dirname + '/rolesSpotA.html')
})

app.get('/rolesSpotB.html', (req, res) => {
    res.sendFile(__dirname + '/rolesSpotB.html')
})

app.get('/sessionMaxV2.html', (req, res) => {
    res.sendFile(__dirname + '/sessionMaxV2.html')
})

app.get('/sessionPage.html', (req, res) => {
    res.sendFile(__dirname + '/sessionPage.html')
})


app.listen(3000);


