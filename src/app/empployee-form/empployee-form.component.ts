// import { ConditionalExpr } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-empployee-form',
  templateUrl: './empployee-form.component.html',
  styleUrls: ['./empployee-form.component.css']
})
export class EmpployeeFormComponent implements OnInit {


  holidays:any;
  holidaydescription:any;
  holidayDate:Date = new Date();
  location:any;
  attachment:any;
  id: any;
  name: any;
  holidayList: any;
  showButton:any;
  submit: any;


  constructor(private StudentService: StudentService,private ActivatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    debugger
    this.ActivatedRoute.params.subscribe((params:any) => {
      this.id = params['id']
debugger
      if (this.id != undefined) {
        this.GetHolidayTable();
        this.showButton = 1;
        this.submit='update';
      }
      else {
        this.showButton = 0
        this.submit='Submit';
      }

    })
  }
  GetHolidayTable() {
    debugger
    this.StudentService.GetHolidayTable().subscribe(data=>{
      debugger
      this.holidayList = data.filter(x => x.id == this.id);
      // let temp = data.filter(x => x.id == this.id);
      // console.log("student details",temp)
      this.holidays = this.holidayList[0].holidays,
        this.holidayDate = this.holidayList[0].holidayDate,
        this.holidaydescription = this.holidayList[0].holidayDescription,
        this.attachment = this.holidayList[0].attchament,
        this.location = this.holidayList[0].location
        
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
    this.holidays != undefined &&
      this.holidays != '' &&
      this.holidaydescription != undefined &&
      this.holidaydescription != '' &&
      this.holidayDate != undefined &&
      // this.holidayDate != '' 
    
      this.location != undefined &&
      this.location != '' &&
      this.attachment != undefined &&
      this.attachment != '' 
    
    ) {
      debugger;
      var entity = {
        holidays: this.holidays,
        holidaydescription: this.holidaydescription,
        holidayDate: this.holidayDate,
        location: this.location,
        attachment: this.attachment,
      
      };
     this.StudentService.InsertHolidayTable(entity).subscribe((data) => {
        alert('Saved Successfully');
        location.href ='/HolidayDashboard';
      });
    } else {
      Swal.fire({
        title: 'Please Enter The Details',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })
    }
  }
  Update() {
    debugger;
  
    if (
    this.holidays != undefined &&
      this.holidays != '' &&
      this.holidaydescription != undefined &&
      this.holidaydescription != '' &&
      this.holidayDate != undefined &&
      // this.holidayDate != '' 
      this.location != undefined &&
      this.location != '' &&
      this.attachment != undefined &&
      this.attachment != '' 
    
    ) {
      debugger;
      var entity = {
        id:this.id,
        holidays: this.holidays,
        holidaydescription: this.holidaydescription,
        holidayDate: this.holidayDate,
        location: this.location,
        attachment: this.attachment,
      
      };
     this.StudentService.UpdateHolidayTable(entity).subscribe((data) => {
        alert('Update Successfully');
        location.href ='/HolidayDashboard';
      });
    } else {
      Swal.fire({
        title: 'Please Enter The Details',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })
    }
  }


}
