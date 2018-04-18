var fs = require("fs");
var browserify = require('browserify');

const myFile = fs.createWriteStream(__dirname + '/public/bundle.js');

var b = browserify(__dirname + '/src/js/main.js');
b.bundle().pipe(myFile);
