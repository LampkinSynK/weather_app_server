const path = require('path')
const express = require('express')

const app = express()

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates')

// Settup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
app.use(express.static(publicDirectoryPath))


//Setup static directory to serve
app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Jaylin Ceja'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About me',
        name: 'Jaylin Ceja'
    })
})

app.get('/help', (req, res) => {
    res.render('about', {
        title: 'Help',
        name: 'Jaylin Ceja'
    })
})

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'It is snowing',
        location: 'Philadelphia'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000')
})