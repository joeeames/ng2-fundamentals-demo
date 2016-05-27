
var events = [
  {
    id: 1,
    name: 'Angular Connect',
    date: '9/26/2016',
    time: '10:00 am',
    imageUrl: '/app/assets/images/angularconnect-shield.png',
    location: {
      address: '1057 DT',
      city: 'London',
      country: 'England'
    },
    sessions: [
      {
        id: 1,
        name: "Angular 2 Pipes",
        presenter: "Peter Bacon Darwin",
        duration: 3,
        level: "Intermediate",
        abstract: "Learn all about Pipes with PBD",
        voteCount: 4
      },
      {
        id: 2,
        name: "Getting the most out of your dev team",
        presenter: "Jeff Cross",
        duration: 4,
        level: "Intermediate",
        abstract: "We all know that our dev teams work hard, but with the right management they can be even more productive, without overworking them. In this session I'll show you how to get the best results from the talent you already have on staff.",
        voteCount: 7
      },
      {
        id: 3,
        name: "Angular Performance Metrics",
        presenter: "Rob Wormald",
        duration: 4,
        level: "Advanced",
        abstract: "Angular 2 Performance is hot. In this session, we'll see all about it",
        voteCount: 2
      },
      {
        id: 4,
        name: "Basics of Angular 2",
        presenter: "John Papa",
        duration: 4,
        level: "Beginner",
        abstract: "It's time to learn the basics of Angular 2. This talk will give you everything you need to know about Angular 2 to get started with it today.",
        voteCount: 2
      }
    ]
  },
  {
    id: 2,
    name: 'ng-nl',
    date: '4/15/2017',
    time: '9:00 am',
    imageUrl: '/app/assets/images/ng-nl.png',
    location: {
      address: 'The NL Convention Center',
      city: 'Amsterdam',
      country: 'Netherlands'
    },
    sessions: []
  }
]

module.exports = events;