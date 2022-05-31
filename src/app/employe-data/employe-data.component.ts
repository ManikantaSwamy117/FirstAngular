import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
@Component({
  selector: 'app-employe-data',
  templateUrl: './employe-data.component.html',
  styleUrls: ['./employe-data.component.css']
})
export class EmployeDataComponent implements OnInit {
  idDetailsList:any;
  constructor(private StudentService:StudentService) { }

  ngOnInit(): void {


    this.StudentService.GetIDDetails().subscribe((data:any) => {
      this.idDetailsList = data;
      console.log('Student List', this.idDetailsList);
    });

  }
  IDType:any;
  Number:any;
  NameOnDocument:any;
  IssueDate:any;
  ExpiryDate:any;
  IssuingAuthority:any;
  PlaceOfIssue:any;
  // Age:any;
  // BloodGroup:any;
  // Mobilenumber:any;
  // Address:any;
  // Country:any;
  // State:any;
  // City:any;
  // Pincode:any;

  insertDetails() {
    debugger;
    var entity = {
      IDType: this.IDType,
      Number: this.Number,
      NameOnDocument: this.NameOnDocument,
      IssueDate: this.IssueDate,
      ExpiryDate: this.ExpiryDate,
      IssuingAuthority: this.IssuingAuthority,
      PlaceOfIssue: this.PlaceOfIssue,
      // Age: this.Age,
      // BloodGroup: this.BloodGroup,
      // Mobilenumber: this.Mobilenumber,
      // Address: this.Address,
      // Country: this.Country,
      // State: this.State,
      // City: this. City,
      // Pincode: this. Pincode,

    };
    this.StudentService.InsertIDDetails(entity).subscribe((data) => {
      alert('Saved Successfully');

      location.href = 'EmployeData';
    });



  }



}
