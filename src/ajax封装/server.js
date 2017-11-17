var express = require('express')

var app = express()
// express.static中间件
// app.use('/static', express.static('static'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html')
})

app.listen(3000, function () {
    console.log('app is listening at port 3000')
})