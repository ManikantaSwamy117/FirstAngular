import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
@Component({
  selector: 'app-home1',
  templateUrl: './home1.component.html',
  styleUrls: ['./home1.component.css']
})
export class Home1Component implements OnInit {

  holiday:any;
  holidays:any;
  holidayDescription:any
  holidayDate:any
  location:any
  attchament:any
  constructor(private StudentService:StudentService) { }

  ngOnInit(): void {

    this.GetHolidayTable()
  }


  GetHolidayTable(){
    debugger
      this.StudentService.GetHolidayTable().subscribe(data=>{
        this.holiday=data;
      })
    }


}
