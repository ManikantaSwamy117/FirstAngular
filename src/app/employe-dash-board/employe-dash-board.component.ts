import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/employee.service';

@Component({
  selector: 'app-employe-dash-board',
  templateUrl: './employe-dash-board.component.html',
  styleUrls: ['./employe-dash-board.component.css']
})
export class EmployeDashBoardComponent implements OnInit {

  constructor(private EmployeeService:EmployeeService) { }
  employeeList:any;
  ngOnInit(): void {

   
  }


  


}
