import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import Swal from 'sweetalert2';
// import { AnyCatcher } from 'rxjs/internal/AnyCatcher';


@Component({
  selector: 'app-dummy-login-form',
  templateUrl: './dummy-login-form.component.html',
  styleUrls: ['./dummy-login-form.component.css'],
})
export class DummyLoginFormComponent implements OnInit {
 
  name: any;
  password: any;
  dynamictype: any;
  constructor() {}

  ngOnInit() {
    this.dynamictype = 'password';
  }

  myFunction(even: any) {
    debugger;
    if (even.target.checked == true) {
      this.dynamictype = 'text';
    } else {
      this.dynamictype = 'password';
    }
  }
  login() {
    if (
      this.name != undefined &&
      this.name != '' &&
      this.password != undefined &&
      this.password != ''
    ) {
      Swal.fire({
        title: 'Your Login Sucess',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })

      location.href = '/LoginForm';
    } else {
      Swal.fire(
        'Please Enter Your Details!',
       
        
      )
    }
  }
}
