const path = require('path')
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const hbs = require('hbs')

const publicPath = path.join(__dirname, '../public')
app.use(express.static(publicPath))
app.set('view engine', 'hbs')

app.get('', (req, res) =>{
    res.render('index')
})

app.listen(port, ()=>{
    console.log('server is up on port:' + port)
})