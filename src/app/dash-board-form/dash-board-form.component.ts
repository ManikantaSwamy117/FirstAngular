import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-dash-board-form',
  templateUrl: './dash-board-form.component.html',
  styleUrls: ['./dash-board-form.component.css']
})
export class DashBoardFormComponent implements OnInit {
  name:any;
  phone:any;
  email:any;
  address:any;
  country:any;
  state:any;
  city:any;
  emailValid: boolean | undefined;
  id:any;
  showButton:any;
  studentList: any;
  Phnumber: any;
  Name: any;
  Email: any;
  Address: any;
  State: any;
  Country: any;
  City: any;
  constructor(private StudentService: StudentService,private ActivatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    console.log("student details")
    this.ActivatedRoute.params.subscribe((params:any) => {
      this.id = params['id']
debugger
      if (this.id != undefined) {
        this.GetStudentDetails();
        this.showButton = 1;
      }
      else {
        this.showButton = 0
      }

    })
    this.GetStudentDetails();
  }
  GetStudentDetails() {
    debugger
    this.StudentService.GetStudentDetails().subscribe(data=>{
      debugger
      // this.studentList = data.filter(x => x.id == this.id);
      let temp = data.filter(x => x.id == this.id);
      console.log("student details",temp)
      this.name = temp[0].name,
        this.phone = temp[0].phnumber,
        this.email = temp[0].email,
        this.address = temp[0].address,
        this.country = temp[0].country,
        this.state = temp[0].state,
        this.city = temp[0].city
    })

  }
  
  ValidateEmail() {
    debugger;
  
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
   
    if (this.email.match(mailformat)) {
      this.emailValid = true;
      alert('Valid email address!');
      
      return true;
    } else {
      this.emailValid = false;
      alert('Enter Your Details!');
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



  update() {
    debugger;
    this.ValidateEmail();
   {
      debugger;
     
      var entity = {
        Id:this.id,
        Name: this.name,
        Phnumber: this.phone,
        Email: this.email,
        Address: this.address,
        // Country: this.country,
        // State: this.state,
        // City: this.city,
      };
   
      this.StudentService.UpdateStudentDetails(entity).subscribe((data) => {
        alert('Saved Successfully');
       
        location.href = '/StudentData';
      });
    } 
  }




}
