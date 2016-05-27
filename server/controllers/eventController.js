var events = require('../database/events'),
  getNextId = require('./getNextId');

var nextId = getNextId(events);

exports.getEvents = function(req, res) {
  console.log('sending events');
  res.send(events);
}

exports.getEvent = function(req, res) {
  console.log('event id', req.params.eventId);
  var event = events.find(event => event.id === +req.params.eventId);
  console.log('event', event);
  res.send(event);
}

// exports.getSessionsByUser = function(req, res) {
//   res.send(sessions.filter(session => session.userId === parseInt(req.params.id)))
// }

exports.createEvent = function(req, res) {
  var newEvent = req.body;
  console.log('new event', newEvent);
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

