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
  emailValid:any;
  constructor() {}

  ngOnInit() {
    this.dynamictype = 'password';


    this.ValidateEmail()



  }

  ValidateEmail() {

    debugger;

 

    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

   

    if (this.name) {

      this.emailValid = true;

     

    } else {

      this.emailValid = false;

      Swal.fire("eneter valid Email")


    }
  }

  myFunction(even: any) {
    debugger;
    if (even.target.checked == true) {
      this.dynamictype = 'text';
    } 
    
    else {
      debugger;
      this.dynamictype = 'password';
    }
  }
  login() {
    debugger;
    if(
   
      (this.name != undefined &&
      this.name != '' &&
      this.password != undefined &&
      this.password != ''
     ) &&  this.emailValid) {
      Swal.fire({
        title: 'Your Login Sucess',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })

      location.href = '/NewDashBoard';
    } else {
      Swal.fire(
        'Please Enter Your Details!',
       
        
      )
    }
  }
}
