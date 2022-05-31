import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent implements OnInit {
  name: any;
  phone: any;
  email: any;
  address: any;
  country: any;
  state: any;
  city: any;
  emailValid: boolean | undefined;

  constructor(private StudentService: StudentService) {}

  ngOnInit(): void {}
  ValidateEmail() {
    debugger;
  
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
   
    if (this.email.match(mailformat)) {
      this.emailValid = true;
      alert('Valid email address!');
      
      return true;
    } else {
      this.emailValid = false;
      alert('You have entered an invalid email address!');
      return false;
    }
  }

  login() {
    debugger;
    this.ValidateEmail();
    if (
      (this.name != undefined &&
      this.name != '' &&
      this.phone != undefined &&
      this.phone != '' &&
      this.email != undefined &&
      this.email != '' && 
      this.address != undefined &&
      this.address != '' &&
      this.country != undefined &&
      this.country != '' &&
      this.state != undefined &&
      this.state != '' &&
      this.city != undefined &&
      this.city != '') && this.emailValid
    ) {
      debugger;
      var entity = {
        Name: this.name,
        Phnumber: this.phone,
        Email: this.email,
        Address: this.address,
        Country: this.country,
        State: this.state,
        City: this.city,
      };
      this.StudentService.InsertStudentDetails(entity).subscribe((data) => {
        alert('Saved Successfully');
        location.href = '/StudentData';
      });
    } else {
      alert('sorry some field is empty');
    }
  }
}
