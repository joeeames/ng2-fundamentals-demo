var auth = require('./auth'),
  events = require('./controllers/eventController'),
  users = require('./controllers/userController');
  path = require('path');

var fs = require('fs');


module.exports = function(app) {

  app.post('/api/login', auth.authenticate);
  app.get('/api/currentIdentity', auth.getCurrentIdentity);
  
  app.get('/api/events', events.getEvents);
  app.get('/api/events/:eventId', events.getEvent);
  app.post('/api/events', events.createEvent);
  
  app.post('/api/logout', function(req, res) {
    req.logout();
    res.end();
  });
  
  app.get('/app/*', function(req, res) {
    res.sendStatus(404);
  });
  
  app.get('/node_modules/*', function(req, res) {
    res.sendStatus(404);
  });
  
  app.get('*', function(req, res) {
    // res.sendStatus(404);
    res.sendFile(path.resolve(__dirname + '/../index.html'));
  });
}