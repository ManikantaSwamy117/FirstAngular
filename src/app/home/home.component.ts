import { Component, OnInit } from '@angular/core';
// import { EmployeeService } from 'src/employee.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // enterYourName:any;

  constructor(HomeComponent:HomeComponent) { }

  ngOnInit(): void {

  }

  // public Submit(){
  //   var entity={
  //     Name:this.enterYourName,

  //   }
  //   this.EmployeeService.InsertEmployeI(entity).subscribe(
  //     data=>{
  //       alert("SaveD Sucessfully");
  //     }
  //   )
  // }

}