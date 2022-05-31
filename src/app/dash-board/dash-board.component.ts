import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/employee.service';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {

  constructor(private EmployeeService:EmployeeService) { }
  employeeList:any;
  ngOnInit(): void {


    this.EmployeeService.GetCollegeStudent2().subscribe(data=>{
      this.employeeList=data;
      console.log("Employe List",this.employeeList)
    })
  }

}
