import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { StudentService } from '../student.service';
@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {
  staff: any;
  id: any;
  submit:any;
  enteryourID:any
  employeeName:any
  department:any
  gender:any
  position:any
  phoneNumber:any
  email:any
  dateofJoining:any
  manager:any
  showButton: any;
  staffList: any;
  employeeID: any;

  constructor(private StudentService:StudentService,private router:Router) { }

  ngOnInit(): void {

    this.Getstaff1()
    this.enteryourID="";
   
  }

  public filterEmployee(){
    this.StudentService.GetStaff1().subscribe((data:any) => {
      this.staff = data.filter((x: { id: any; })=>x.id==this.enteryourID)
      console.log('staff', this.staff);
    });
  }

  Getstaff1(){
    debugger
      this.StudentService.GetStaff1().subscribe(data=>{
        this.staff=data;

        console.log('GetStaff1Details',this.staff)
        // console.log('dummy',data)
      })
    }

    delete(id: any) {
      debugger;
      this.StudentService.DeleteStaff1(id).subscribe(data => {
        alert('Deleted');
        
        window.location.reload();
      
      })
    }

 
    
    insert() {
      debugger;
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
   

}


edit(id:number)
{
  debugger
  this.router.navigate(['/StaffDetails/'+id])
}

}
