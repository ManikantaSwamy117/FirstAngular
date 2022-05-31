import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { StudentService } from '../student.service';
@Component({
  selector: 'app-amaze-data',
  templateUrl: './amaze-data.component.html',
  styleUrls: ['./amaze-data.component.css'],
})
export class AmazeDataComponent implements OnInit {
  AmazeEmployeeDetails: any;
  employeeID: any;
  employeeName: any;
  employeeRole: any;
  dateOfJoining: any;
  gender: any;
  workLocation: any;
  salary: any;
  address: any;
  pincode: any;
  constructor(private StudentService: StudentService, private router: Router) {}

  ngOnInit(): void {
    this.GetAmazeCompanyDetails();
  }

  GetAmazeCompanyDetails() {
    debugger;
    this.StudentService.GetAmazeCompanyDetails().subscribe((data) => {
      this.AmazeEmployeeDetails = data;

      console.log('AmazeEmployeeDetails', this.AmazeEmployeeDetails);
      // console.log('dummy',data)
    });
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
        this.salary != '' &&
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
        };
        this.StudentService.InsertAmazeCompanyDetails(entity).subscribe(
          (data) => {
            alert('Saved Successfully');
            location.href = '/AmazeData';
          }
        );
      } else {
        alert('sorry some field is empty');
      }
    }
  }

  delete(id: any) {
    debugger;

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able get This Data!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.StudentService.DeleteAmazeCompanyDetails(id).subscribe((data) => {

          }
        );
        Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
        // this.AmazeEmployeeDetails()
        window.location.reload();
      }
    });
  }

  edit(id: number) {
    debugger;
    this.router.navigate(['/AmazeStaffDetails/' + id]);
  }
}
