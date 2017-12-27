var express = require('express'),
app = express(),
partials = require('express-partials'),
routes = require('./routes'),
errorHandlers = require('./middleware/errorHandlers');

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/static'));
app.use(partials());

app.get('/', routes.index);
app.get('/about', routes.about);
app.get('/blog', routes.blog);
app.get('/services', routes.services);
app.get('/contact', routes.contact);

app.get('/error', function(req, res, next) {
 	next(new Error('A contrived error'));
 });
 app.use(errorHandlers.error);
 app.use(errorHandlers.notFound);
 
app.listen(3005)
console.log('server running port 3005');