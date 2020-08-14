const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const { restart } = require('nodemon')
const MongoClient = require('mongodb').MongoClient
const port = 3000
const connectionString = 'mongodb+srv://gocdata:gladgecko6767!!!@cluster0.bkkhx.mongodb.net/goc-data?retryWrites=true&w=majority'

MongoClient.connect(connectionString, { useUnifiedTopology: true })
  .then(client => {

    console.log('Connected to Database')

    const db = client.db('goc-data')
    const namesCollection = db.collection('names')

    // handlers 
    app.post('/test-form', (req, res) => {
        namesCollection.insertOne(req.body)
            .then(result => {
                res.redirect('/')
            })
            .catch(error => console.log(error))
    })

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

    app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
    })


  })
  .catch(error => console.error(error))


app.use(bodyParser.urlencoded({ extended: true}))

