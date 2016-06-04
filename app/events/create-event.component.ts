import { Component, Input, OnInit } from '@angular/core';
import { FORM_DIRECTIVES, FormBuilder, Control, ControlGroup, Validators } from '@angular/common';
import { EventService, Event, Session } from './shared/index';
import { Router } from '@angular/router-deprecated';

function exactly2(control: any): {[key: string]: boolean} {
  return control.value.length !== 3 ? { "exactly3": true} : null
}

@Component({
  moduleId: module.id,
  selector: 'create-event',
  templateUrl: "/app/events/create-event.component.html",
  styles: [`
    em {float:right; color:#E05C65;}
    .error input {background-color:#E3C3C5;}
    .error ::-webkit-input-placeholder { color: #999; }
  `],
  directives: [FORM_DIRECTIVES]
})
export class CreateEventComponent implements OnInit {
  newEvent: Event;
  newEventForm: ControlGroup;
  name: Control;
  date: Control;
  time: Control;
  price: Control;
  address: Control;
  city: Control;
  country: Control;
  imageUrl: Control;
  
  constructor(private eventService: EventService, 
      private builder: FormBuilder, private router: Router) {
    this.name = new Control('', Validators.required);
    this.date = new Control('', Validators.required);
    this.time = new Control('', Validators.required);
    this.price = new Control('', Validators.required)
    this.address = new Control('', Validators.required);
    this.city = new Control('', Validators.required);
    this.country = new Control('', Validators.required);
    this.imageUrl = new Control('', Validators.required);
    // this.country = new Control('', exactly2);
    
    this.newEventForm = builder.group({
      name: this.name,
      date: this.date,
      time: this.time,
      price: this.price,
      location: builder.group({
        address: this.address,
        city: this.city,
        country: this.country
      }),
      // }),
      imageUrl: this.imageUrl,
    })
  }
  
  ngOnInit() {
    this.newEvent = new Event();
  }
  
  saveEvent(formValues) {
    console.log(formValues)
    if(this.newEventForm.valid) {

      var newEvent = {
        name: formValues.name,
        date: formValues.date,
        time: formValues.time,
        price: +formValues.price,
        location: {
          address: formValues.locationAddress,
          city: formValues.locationCity,
          country: formValues.locationCountry
        },
        imageUrl: formValues.imageUrl,
      }
      
      this.eventService.createEvent(newEvent)
        .subscribe(event => {
          this.router.navigate(['Event', {id:event.id}]);
        })
      
      
    }
  }
  
  cancelEvent() {
    this.router.navigate(['Events']);
  }
  

}