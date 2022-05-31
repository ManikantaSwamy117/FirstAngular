import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-new-dash-board',
  templateUrl: './new-dash-board.component.html',
  styleUrls: ['./new-dash-board.component.css']
})
export class NewDashBoardComponent implements OnInit {
  staff: any;
  totalEmployee:any
  companydetails: any;
  holiday: any;
  totalHolidays: any;
  totalStaffCount: any;

  constructor(private StudentService:StudentService) { }

  ngOnInit(): void {
    this.GetStaffCount()
    this.GetCompanyCount()
    this.GetHolidaysCount()
  }

  GetStaffCount(){

this.StudentService.GetStaffCount().subscribe(data=>{
  this.staff=data
  this.totalStaffCount=data[0].totalStaffCount
})

  }
  GetCompanyCount(){

    this.StudentService. GetCompanyCount().subscribe(data=>{
      this.companydetails=data
      this.totalEmployee=data[0].totalEmployee
    })
    
      }

      public GetHolidaysCount(){

        this.StudentService.GetHolidaysCount().subscribe(data=>{
          this.holiday=data
          this.totalHolidays=data[0].totalHolidays
        })
        
          }





}
