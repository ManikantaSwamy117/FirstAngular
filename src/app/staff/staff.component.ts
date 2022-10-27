import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import Swal from 'sweetalert2';
import { StudentService } from '../student.service';
@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css'],
})
export class StaffComponent implements OnInit {
  staff: any;
  id: any;
  submit: any;
  enteryourID: any;
  employeeName: any;
  department: any;
  gender: any;
  position: any;
  phoneNumber: any;
  email: any;
  dateofJoining: any;
  manager: any;
  showButton: any;
  staffList: any;
  employeeID: any;
  allstaff: any;

  constructor(private StudentService: StudentService, private router: Router) {}

  ngOnInit(): void {
    this.Getstaff1();
    this.enteryourID = '';
  }

  public filterEmployee(even: any) {
    debugger;
    this.employeeID = even.target.value;
    this.staff = this.allstaff.filter((x: { id: any }) => x.id == this.employeeID);
    // this.StudentService.GetStaff1().subscribe((data:any) => {
    //   this.staff = data.filter((x: { id: any; })=>x.id==this.enteryourID)
    //   console.log('staff', this.staff);
    // });
  }

  public filterdepartment(even: any) {
    this.staff = this.allstaff.filter(
      (x: { department: any }) => x.department == even.target.value
    );
  }

  Getstaff1() {
    debugger;
    this.StudentService.GetStaff1().subscribe((data) => {
      this.allstaff = data;
      this.staff = this.allstaff;

      console.log('GetStaff1Details', this.staff);
      // console.log('dummy',data)
    });
  }

  delete(id: any) {
    debugger;
    this.StudentService.DeleteStaff1(id).subscribe((data) => {
      Swal.fire('Deleted')

      window.location.reload();
    });
  }

  edit(id: number) {
    debugger;
    this.router.navigate(['/StaffDetails/' + id]);
  }
}
