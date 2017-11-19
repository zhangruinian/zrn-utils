var express = require('express')

var app = express()
// express.static中间件
// app.use('/static', express.static('static'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html')
})

var resObj = {a:1,b:2}
app.get('/user', function (req, res) {
    res.send(resObj)
})
app.listen(3000, function () {
    console.log('app is listening at port 3000')
})