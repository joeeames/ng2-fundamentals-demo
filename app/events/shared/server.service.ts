/* this is an example of using the {useExisting} on a provider.  To show this
add this file, add 
export * from './server.service';
to the index.ts in this dir
change the event-details page to use this serverService instead of eventService
and add
import { EventService, ServerService, EventsComponent } from './events/index';
and
provide(ServerService, {useExisting: EventService}),
to app.component.ts

and add the following comment to the constructor of the eventService
// I am the server service

*/

import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Event, Session } from './event.model'


@Injectable()
export class ServerService {
  
  constructor(private http: Http) {
    // I am the server service
  }
  
  getEvents() {
    return this.http.get("/api")
      .map((response: Response) => {
        return <Event[]>response.json();
      }).catch(this.handleError);
  }
  
  getEvent(id: number) {
    return this.http.get("/api" + id)
      .map((response: Response) => {
        return <Event>response.json();
      }).catch(this.handleError);
  }
  
  createEvent(eventData: any) {
    let headers = new Headers({ 'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers });
    
    var ret = this.http.post("/api", JSON.stringify(eventData), options);
    return ret.map((response: Response) => {
        var returnedData = response.json();
        return returnedData;
    }).catch(this.handleError);
    
  }
  
  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || "Server Error");
  }
}
