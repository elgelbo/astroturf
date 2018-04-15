const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
const routes = require('./routes/index');
const helpers = require('./helpers');
const errorHandlers = require('./handlers/errorHandlers');
const Bundler = require('parcel-bundler');
// create our Express app
const app = express();

const pkgEntry = path.join(__dirname, './public/main.js');

const pkgOptions = {
  outDir: './public', // The out directory to put the build files in, defaults to dist
  outFile: 'bundle', // The name of the outputFile
};

// Initialise a new bundler using a file and options (for options and file see the bundler documentation)
const bundler = new Bundler(pkgEntry, pkgOptions);

// Let express use the bundler middleware, this will let parcel handle every request over your express server
app.use(bundler.middleware());


// view engine setup
app.set('views', path.join(__dirname, 'views')); // this is the folder where we keep our pug files
app.set('view engine', 'ejs'); // we use the engine pug, mustache or EJS work great too

// serves up static files from the public folder. Anything in public/ will just be served up as the file it is
app.use(express.static(path.join(__dirname, 'public')));

// Takes the raw requests and turns them into usable properties on req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// pass variables to our templates + all requests
app.use((req, res, next) => {
  res.locals.h = helpers;
  res.locals.currentPath = req.path;
  next();
});

// After allllll that above middleware, we finally handle our own routes!
app.use('/', routes);

// If that above routes didnt work, we 404 them and forward to error handler
app.use(errorHandlers.notFound);

// One of our error handlers will see if these errors are just validation errors
// app.use(errorHandlers.flashValidationErrors);

// Otherwise this was a really bad error we didn't expect! Shoot eh
if (app.get('env') === 'development') {
  /* Development Error Handler - Prints stack trace */
  app.use(errorHandlers.developmentErrors);
}

// production error handler
app.use(errorHandlers.productionErrors);
// Initialise a new bundler using a file and options (for options and file see the bundler documentation)

// Let express use the bundler middleware, this will let parcel handle every request over your express server
// app.use(bundler.middleware());
// done! we export it so we can start the site in start.js
module.exports = app;
