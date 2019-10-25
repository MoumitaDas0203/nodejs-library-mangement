const http = require('http');
const fs = require('fs');
const url = require('url');
const path = require('path');

const routeCSS = (req, res) => {
    if (req.url === '/style.css'){
        res.writeHead(200, {'Content-Type': 'text/css'});
        var read = fs.createReadStream(__dirname + '/style.css','utf8');
        read.pipe(res);  
    }   
}
const routeHTML = (req, res) => {
        res.writeHead(200, {'Content-Type': 'text/html'});
        var read = fs.createReadStream(__dirname + '/index.html','utf8');
        read.pipe(res);
}

const routeImages = (req, res) => {
    var imagePath = path.join(__dirname, req.url);
    res.writeHead(200, {'Content-Type': 'image/jpeg'});
    var read = fs.createReadStream(imagePath);
    read.pipe(res);

}

module.exports = {
    routeCSS,
    routeImages,
    routeHTML
};