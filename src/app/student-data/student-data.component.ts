import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-student-data',
  templateUrl: './student-data.component.html',
  styleUrls: ['./student-data.component.css']
})
export class StudentDataComponent implements OnInit {
  studentList:any;

  constructor(private StudentService:StudentService,private ActivatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    debugger
   this.employeeid="Select Training"
    this.StudentService.GetStudentDetails().subscribe((data:any) => {
      this.studentList = data;
      console.log('Student List', this.studentList);
    });

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



  }

  GetStudentDetails() {
    debugger
    this.StudentService.GetStudentDetails().subscribe(data=>{
      debugger
      this.studentList = data.filter(x => x.id == this.id);
      let temp = data.filter(x => x.id == this.id);
      console.log("student details",temp)
      this.Name = temp[0].Name,
        this.Phnumber = temp[0].Phnumber,
        this.Email = temp[0].Email,
        this.Address = temp[0].Address,
        this.Country = temp[0].Country,
        this.State = temp[0].State,
        this.City = temp[0].City
    })

  }
  
  public filterEmployee(){
    this.StudentService.GetStudentDetails().subscribe((data:any) => {
      this.studentList = data.filter((x: { id: any; })=>x.id==this.employeeid)
      console.log('Student List', this.studentList);
    });
  }

  Name:any;
  Phnumber:any;
  Email:any;
  Address:any;
  Country:any;
  State:any;
  City:any;
  id:any
  showButton: any;
  employeeid:any;

  insertDetails() {
    debugger;
    var entity = {
      Name: this.Name,
      Phnumber: this.Phnumber,
      Email: this.Email,
      Address: this.Address,
      Country: this.Country,
      State: this.State,
      City: this.City,
    };
    this.StudentService.InsertStudentDetails(entity).subscribe(data => {
      alert('Saved Successfully');

      location.href = 'StudentData';
    });
  }

  delete(id:any) {
    debugger;
    this.StudentService.DeleteStudentDetails(id).subscribe(data => {
      alert('Deleted');
      
      location.href = 'StudentData';
    })
  }
  
}
