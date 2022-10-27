import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { ActivatedRoute, Router} from '@angular/router';
import { ThisReceiver } from '@angular/compiler';
@Component({
  selector: 'app-holiday-dashboard',
  templateUrl: './holiday-dashboard.component.html',
  styleUrls: ['./holiday-dashboard.component.css']
})
export class HolidayDashboardComponent implements OnInit {

  constructor(private StudentService:StudentService,private ActivatedRoute:ActivatedRoute,private router:Router) { }
  holiday:any;
  holidays:any;
  holidayDescription:any
  holidayDate:any
  location:any
  attchament:any
id:any
showButton:any
Holidayid:any;
  ngOnInit(): void {
debugger
    this.ActivatedRoute.params.subscribe((params:any) => {
      this.id = params['id']
debugger
      if (this.id != undefined) {
        this.GetHolidayTable();
        this.filterHolidays();
      
        this.showButton = 1;
      }
      else {
        this.showButton = 0;
      this.Holidayid="";
      }

    })
   
    this.GetHolidayTable();
  }

  filterHolidays(){
    debugger
      this.StudentService.GetHolidayTable().subscribe(data=>{
        this.holiday = data.filter((x: { id: any; })=>x.id==this.Holidayid)
        console.log('holiday', this.holiday);
      })
    }

GetHolidayTable(){
debugger
  this.StudentService.GetHolidayTable().subscribe(data=>{
    this.holiday=data;
  })
}

delete(id:any){
  this.StudentService.DeleteHolidayTable(id).subscribe(data=>{
    alert('Deleted');
  window.location.reload();
  })
}


// insertDetails() {
//   debugger;
//   var entity = {
//     holidays: this.holidays,
//     holidayDescription: this.holidayDescription,
//     holidayDate: this.holidayDate,
//     location: this.location,
//     attchament: this.attchament,
  
//   };
//   this.StudentService.InsertStudentDetails(entity).subscribe(data => {
//     alert('Saved Successfully');

//     location.href='/HolidayDashboard';
//   });
// }


edit(id:number)
{
  debugger
  this.router.navigate(['/EmployeeForm/'+id])
}

}
