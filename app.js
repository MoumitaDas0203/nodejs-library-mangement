var express = require('express');
var bodyParser = require('body-parser');
const login = require('./controllers/loginController');
const register = require('./controllers/registerController');
const http = require('http');
const router = require('./router');
const path = require('path');
const fs = require('fs');
const db = require('./db');
const hostname = '127.0.0.1';
const port = 3000;

var app     = express();

const mime = {
    html: 'text/html',
    txt: 'text/plain',
    css: 'text/css',
    gif: 'image/gif',
    jpg: 'image/jpeg',
    png: 'image/png',
    svg: 'image/svg+xml',
    js: 'application/javascript',
    template: 'text/html',
};

app.use(bodyParser.urlencoded({ extended: true })); 

app.get('*', function (req, res) {
    var file = path.join(__dirname, req.path.replace(/\/$/, '/html/index.html'));
    var type = mime[path.extname(file).slice(1)] || 'text/plain';
    var s = fs.createReadStream(file);
    s.on('open', function () {
        res.set('Content-Type', type);
        s.pipe(res);
    });
    s.on('error', function () {
        res.set('Content-Type', 'text/plain');
        res.status(404).end('Not found');
    });
});

app.post('/login', (req,res) =>{
    login.isRegistered(req,res);
    // if(ans == false){
    //     res.redirect('/html/Signup.html');
    // }else{
    //     res.send("User is registered "+ ans);
    // }
});

app.post('/register', (req,res) =>{
    console.log("register");
    register.inserintoDB(req,res);
    
});

app.listen(port, hostname, () =>{
    console.log(`Server is running in ${hostname} and port is ${port}`);
});

