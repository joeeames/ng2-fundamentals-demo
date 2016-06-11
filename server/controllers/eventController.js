var events = require('../database/events'),
  getNextId = require('./getNextId'),
  url = require('url');

var nextId = getNextId(events);

exports.getEvents = function(req, res) {
  res.send(events);
}

exports.getEvent = function(req, res) {
  var event = events.find(event => event.id === +req.params.eventId);
  res.send(event);
}

exports.searchSessions = function(req, res) {
	var term = req.query.search.toLowerCase();
  var results = [];
  events.forEach(event => {
    results = results.concat(event.sessions.filter(session => session.name.toLowerCase().indexOf(term) > -1));
  })
  res.send(results);
}

exports.createEvent = function(req, res) {
  var newEvent = req.body;
  newEvent.id = nextId;
  newEvent.sessions = [];
  
  nextId++;
  
  events.push(newEvent);

  res.send(newEvent);
  res.end(); 
}


