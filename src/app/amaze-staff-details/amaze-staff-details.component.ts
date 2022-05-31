import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-amaze-staff-details',
  templateUrl: './amaze-staff-details.component.html',
  styleUrls: ['./amaze-staff-details.component.css']
})
export class AmazeStaffDetailsComponent implements OnInit {

  employeeID:any;
  employeeName:any;
  employeeRole:any;
  dateOfJoining:any;
  gender:any;
  workLocation:any;
  salary:any;
  address:any;
  pincode:any;
  Submit:any;
  id: any;
  showButton: any;

  constructor(private StudentService: StudentService,private ActivatedRoute:ActivatedRoute) { }

  ngOnInit(): void {


    this.ActivatedRoute.params.subscribe((params:any) => {
      this.id = params['id']
debugger
      if (this.id != undefined) {
        this.amaze()
        this.showButton = 1;
        this.Submit='Update';
      }
      else { 
        this.showButton = 0
        this.Submit='Submit';
      }

    })
   
  }

  amaze() {
    debugger
    this.StudentService.GetAmazeCompanyDetails().subscribe(data=>{
      debugger
      // this.studentList = data.filter(x => x.id == this.id);
      let temp = data.filter(x => x.id == this.id);
      console.log("AmazeEmployeeDetails",temp)
      this.employeeID = temp[0].employeeID,
        this.employeeName = temp[0].employeeName,
        this.employeeRole = temp[0].employeeRole,
        this.dateOfJoining = temp[0].dateOfJoining,
        this.gender = temp[0].gender,
        this.workLocation = temp[0].workLocation,
        this.salary = temp[0].salary,
        this.address = temp[0].address, 
        this.pincode = temp[0].pincode
         
    })

  };


 post() {
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
    {
      debugger;
      
      if (
        this.employeeID != undefined &&
        this.employeeID != '' &&
        this.employeeName != undefined &&
        this.employeeName != '' &&
        this.employeeRole != undefined &&
        this.employeeRole != '' && 
        this.dateOfJoining != undefined &&
        this.dateOfJoining != '' &&
        this.gender != undefined &&
        this.gender != '' &&
        this.workLocation != undefined &&
        this.workLocation != '' &&
        this.salary != undefined &&
        this.salary != ''&&
        this.address != undefined &&
        this.address != '' &&
        this.pincode != undefined &&
        this.pincode != '' 
       
       ) {
        debugger;
        var entity = {
          EmployeeID: this.employeeID,
          EmployeeName: this.employeeName,
          EmployeeRole: this.employeeRole,
          DateOfJoining: this.dateOfJoining,
          Gender: this.gender,
          WorkLocation: this.workLocation,
          Salary: this.salary,
          Address: this.address,
          Pincode: this.pincode,
         
        }
        this.StudentService.InsertAmazeCompanyDetails(entity).subscribe((data) => {
          alert('Saved Successfully');
          location.href = '/AmazeData';
        });
      } else {
        alert('sorry some field is empty');
      }
    }
 

}

Update() {
  debugger;
  {
    debugger;
    
    if (
      this.employeeID != undefined &&
      this.employeeID != '' &&
      this.employeeName != undefined &&
      this.employeeName != '' &&
      this.employeeRole != undefined &&
      this.employeeRole != '' && 
      this.dateOfJoining != undefined &&
      this.dateOfJoining != '' &&
      this.gender != undefined &&
      this.gender != '' &&
      this.workLocation != undefined &&
      this.workLocation != '' &&
      this.salary != undefined &&
      this.salary != ''&&
      this.address != undefined &&
      this.address != '' &&
      this.pincode != undefined &&
      this.pincode != '' 
     
     ) {
      debugger;
      var entity = {
        EmployeeID: this.employeeID,
        EmployeeName: this.employeeName,
        EmployeeRole: this.employeeRole,
        DateOfJoining: this.dateOfJoining,
        Gender: this.gender,
        WorkLocation: this.workLocation,
        Salary: this.salary,
        Address: this.address,
        Pincode: this.pincode,
       
      }
      this.StudentService.UpdateAmazeCompanyDetails(entity).subscribe((data) => {
        alert('Update Successfully');
        location.href = '/AmazeData';
      });
    } else {
      alert('sorry some field is empty');
    }
  }


}



}
