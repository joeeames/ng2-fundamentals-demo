var events = require('../database/events'),
  getNextId = require('./getNextId');

var nextId = getNextId(events);

exports.getEvents = function(req, res) {
  res.send(events);
}

exports.getEvent = function(req, res) {
  var event = events.find(event => event.id === +req.params.eventId);
  res.send(event);
}

// exports.getSessionsByUser = function(req, res) {
//   res.send(sessions.filter(session => session.userId === parseInt(req.params.id)))
// }

exports.createEvent = function(req, res) {
  var newEvent = req.body;
  newEvent.id = nextId;
  newEvent.sessions = [];
  
  nextId++;
  
  events.push(newEvent);

  res.send(newEvent);
  res.end(); 
}

// exports.incrementVote = function(req, res) {
  
//   var eventId = parseInt(req.params.sessionId)

//   var event = events.find(event => event.id === eventId);
//   if(event) {
//     event.voteCount++;
//     res.status(200);
//   } else {
//     res.status(500)
//   }
//   res.end();
// }

