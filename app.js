const express = require ('express')

const app = express()

const port = 3000

app.use(express.static('public'))

app.get('/', (req, res) => res.sendFile(__dirname + '/frontPage.html'))

app.get('/application', (req, res) => res.sendFile(__dirname + '/geobasement.html'))

app.get('/home', (req, res) => res.sendFile(__dirname + '/frontPage.html'))

app.listen(port, () => console.log(`App listening on port ${ port }! `))
