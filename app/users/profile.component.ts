import { Component, Inject } from '@angular/core';
import { AuthService, User } from './auth.service';
import { FORM_DIRECTIVES, FormBuilder, Control, ControlGroup, Validators } from '@angular/common';
import { Router } from '@angular/router-deprecated';
import { TOASTR_TOKEN, Toastr } from '../common/toastr.service';

@Component({
  selector: 'user-profile',
  templateUrl: 'app/users/profile.component.html',
  directives: [FORM_DIRECTIVES]
})
export class ProfileComponent {
  firstName: Control;
  lastName: Control;
  profileForm: ControlGroup;
  
  constructor(private auth : AuthService, 
      private builder: FormBuilder,
      private router: Router,
      @Inject(TOASTR_TOKEN) private toastr: Toastr) {
    this.firstName = new Control(this.auth.currentUser.firstName, Validators.required);
    this.lastName = new Control(this.auth.currentUser.lastName, Validators.required);

    this.profileForm = builder.group({
      firstName: this.firstName,
      lastName: this.lastName,
    })
  }
  
  saveProfile(formValues) {
    if(this.profileForm.valid) {

      this.auth.currentUser.firstName = formValues.firstName;
      this.auth.currentUser.lastName = formValues.lastName;
      
      // should probably have error handling
      this.auth.updateCurrentUser()
        .subscribe() // do nothing, but still have to subscribe
 

      this.toastr.success('Profile Saved');
    }
  }
  
  cancel() {
    this.router.navigate(['Events']);
  }
   
}
