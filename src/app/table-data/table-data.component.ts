import { Component, OnInit } from '@angular/core';
import { OfficeService } from 'src/app/office.service';

@Component({
  selector: 'app-table-data',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.css'],
})
export class TableDataComponent implements OnInit {
  constructor(private OfficeService: OfficeService) {}
  officeList: any;
  employeName: string | undefined;
  surname: any;
  employerole: any;
  idnumber: any;
  mobilenumber: any;
  address: any;
  pincode: any;
  ngOnInit(): void {}

  insertDetails() {
    debugger;
    var entity = {
      EmployeName: this.employeName,
      SureName: this.surname,
      EmployeRole: this.employerole,
      idNumber: this.idnumber,
      MobileNumber: this.mobilenumber,
      address: this.address,
      Pincode: this.pincode,
    };
    this.OfficeService.InsertOffice(entity).subscribe((data) => {
      alert('Saved Successfully');

      location.href = '/Table';
    });
  }
}
