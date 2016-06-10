import { Component, Input } from '@angular/core';
import { AuthService, User } from './auth.service';
import { FORM_DIRECTIVES, FormBuilder, Control, ControlGroup, Validators } from '@angular/common';
import { Router } from '@angular/router-deprecated';

@Component({
  selector: 'user-profile',
  templateUrl: 'app/users/profile.component.html',
  directives: [FORM_DIRECTIVES]
})
export class ProfileComponent {
  submitAttempt: boolean = false;
  firstName: Control;
  lastName: Control;
  profileForm: ControlGroup;
  
  constructor(private auth : AuthService, 
      private builder: FormBuilder,
      private router: Router) {
    this.firstName = new Control(this.auth.currentUser.firstName, Validators.required);
    this.lastName = new Control(this.auth.currentUser.lastName, Validators.required);
    
    this.profileForm = builder.group({
      firstName: this.firstName,
      lastName: this.lastName,
    })
  }
  
  saveProfile(formValues) {
    this.submitAttempt = true;
    if(this.profileForm.valid) {

      this.auth.currentUser.firstName = formValues.firstName;
      this.auth.currentUser.lastName = formValues.lastName;
      
      // this.eventService.createEvent(newEvent)
      //   .subscribe(event => {
      //     this.router.navigate(['Event', {id:event.id}]);
      //   })
      this.submitAttempt = false;
    }
  }
  
  cancel() {
    this.router.navigate(['Events']);
  }
   
}
