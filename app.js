var express = require("express");
var ejs = require("ejs");
var app = express();


///////////////////////////////////////////////////////////////////////////////
// APP CONFIGURATION                                                         //
///////////////////////////////////////////////////////////////////////////////
//configure logging
app.use(express.logger());
//make files in static folder publicly accessible
app.use('/static', express.static(__dirname + '/static'));
//use ejs for html templates
app.engine('html', ejs.renderFile);


///////////////////////////////////////////////////////////////////////////////
// APP ROUTES                                                                //
///////////////////////////////////////////////////////////////////////////////
//default route
app.get('/', function(req, res) {
  res.render('index.html', { });
});

app.get('/test', function(req, res) {
  res.render('test.html', { });
});

app.get('/calc', function(req, res) {
  res.render('calc.html', { });
});

app.get('/stuff', function(req, res) {
  res.render('stuff.html', { });
});

app.get('/imgrr', function(req, res) {
  res.render('imgrr.html', { });
});

app.get('/canvas', function(req, res) {
  res.render('canvas.html', { });
});

app.get('/funcs', function(req, res) {
  res.render('funcs.html', { });
});

app.get('/ball', function(req, res) {
  res.render('ball.html', { });
});

app.get('/chain-reaction', function(req, res) {
  res.render('chain_reaction.html', { });
});

app.get('/facts', function(req, res) {
  res.render('facts.html', {your_name: "Bob Saget" });
});
///////////////////////////////////////////////////////////////////////////////
// RUN CONFIGURATION                                                         //
///////////////////////////////////////////////////////////////////////////////
var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
    console.log("Listening on " + port);
});
