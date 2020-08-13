const express = require('express')
const app = express()
const port = 3000


app.get('/', (req, res) => {
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


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

