export class Event {
  id: number;
  name: string;
  date: string;
  time: string;
  price: number;
  imageUrl: string;
  location: {
    address: string;
    city: string;
    country: string;
  }
  sessions: Session[]; 
  
  constructor() {
    this.location = {
      address: "",
      city: "",
      country: ""
    }
    
  }
}

export class Session {
  id: number;
  name: string;
  presenter: string;
  duration: number;
  level: string;
  abstract: string;
  voteCount: number;
}

