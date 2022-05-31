import { Component, OnInit } from '@angular/core';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { StudentService } from '../student.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-staff-details',
  templateUrl: './staff-details.component.html',
  styleUrls: ['./staff-details.component.css']
})
export class StaffDetailsComponent implements OnInit {
  enteryourID:any
  employeeName:any
  department:any
  gender:any
  position:any
  phoneNumber:any
  email:any
  dateofJoining:any
  manager:any
  id: any;
  staff: any;
  showButton: any;
  submit:any;
  employeeID: any;
  constructor(private StudentService: StudentService,private ActivatedRoute:ActivatedRoute) { }

  ngOnInit(): void {

    this.ActivatedRoute.params.subscribe((params:any) => {
      this.id = params['id']
debugger
      if (this.id != undefined) {
        this.GetStaff1();
        this.showButton = 1;
        this.submit='Update';
      }
      else {
        this.showButton = 0
        this.submit='Submit';
      }

    })
    this.GetStaff1();
  }
  GetStaff1() {
    debugger
    this.StudentService.GetStaff1().subscribe(data=>{
      debugger
      // this.studentList = data.filter(x => x.id == this.id);
      let temp = data.filter(x => x.id == this.id);
      console.log("staff",temp)
      this.enteryourID = temp[0].employeeID,
        this.employeeName = temp[0].employeeName,
        this.department = temp[0].department,
        this.gender = temp[0].gender,
        this.position = temp[0].position,
        this.phoneNumber = temp[0].phoneNumber,
        this.email = temp[0].email,
        this.dateofJoining = temp[0].dateofJoining,
        this.manager = temp[0].manager
      
      
    })

  };


  post()
  {
    debugger
    if (this.id != undefined)
    {
     this.Update(); 
    }
    else{
      this.insert(); 
    }
  }



  insert() {
    debugger;
    
    if (
      this.enteryourID != undefined &&
      this.enteryourID != '' &&
      this.employeeName != undefined &&
      this.employeeName != '' &&
      this.department != undefined &&
      this.department != '' && 
      this.gender != undefined &&
      this.gender != '' &&
      this.position != undefined &&
      this.position != '' &&
      this.phoneNumber != undefined &&
      this.phoneNumber != '' &&
      this.email != undefined &&
      this.email != ''&&
      this.dateofJoining != undefined &&
      this.dateofJoining != '' &&
      this.manager != undefined &&
      this.manager != ''
    ) {
      debugger;
      var entity = {
        enteryourID: this.employeeID,
        employeeName: this.employeeName,
        department: this.department,
        gender: this.gender,
        position: this.position,
        phoneNumber: this.phoneNumber,
        email: this.email,
        dateofJoining: this.dateofJoining,
        manager: this.manager
      };
      this.StudentService.InsertStaff1(entity).subscribe((data) => {
        alert('Saved Successfully');
        location.href = '/Staff';
      });
    } else {
      alert('sorry some field is empty');
    }
  }
  Update() 
{
  debugger;
  
  if (
    
    this.enteryourID != undefined &&
    this.enteryourID != '' &&
    this.employeeName != undefined &&
    this.employeeName != '' &&
    this.department != undefined &&
    this.department != '' && 
    this.gender != undefined &&
    this.gender != '' &&
    this.position != undefined &&
    this.position != '' &&
    this.phoneNumber != undefined &&
    this.phoneNumber != '' &&
    this.email != undefined &&
    this.email != ''&&
    this.dateofJoining != undefined &&
    this.dateofJoining != '' &&
    this.manager != undefined &&
    this.manager != ''
  ) {
    debugger;
    var entity = {
      id: this.id,
      employeeID: this.enteryourID,
      employeeName: this.employeeName,
      department: this.department,
      gender: this.gender,
      position: this.position,
      phoneNumber: this.phoneNumber,
      email: this.email,
      dateofJoining: this.dateofJoining,
      manager: this.manager
    };
    this.StudentService.UpdateStaff1(entity).subscribe((data) => {
      alert('Update Successfully');
      location.href = '/Staff';
    });
  } else {
    alert('sorry some field is empty');
  }
}

}
