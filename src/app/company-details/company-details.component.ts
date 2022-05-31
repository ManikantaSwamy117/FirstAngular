import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent implements OnInit {
  companyID:any;
  companyName:any;
  address:any;
  phoneNumber:any;
  email:any;
  contactPersonName:any;
  regDate:any;
  noOFEmployees:any;
  submit:any;
  id: any;
  showButton: any;

  constructor(private StudentService: StudentService,private ActivatedRoute:ActivatedRoute) { }

  ngOnInit(): void {

    this.ActivatedRoute.params.subscribe((params:any) => {
      this.id = params['id']
debugger
      if (this.id != undefined) {
        this.Company();
        this.showButton = 1;
        this.submit='Update';
      }
      else {
        this.showButton = 0
        this.submit='Submit';
      }

    })
    this.Company();

  }
  Company() {
    debugger
    this.StudentService.GetCompany().subscribe(data=>{
      debugger
      // this.studentList = data.filter(x => x.id == this.id);
      let temp = data.filter(x => x.id == this.id);
      console.log("companydetails",temp)
      this.companyID = temp[0].companyID,
        this.companyName = temp[0].companyName,
        this.address = temp[0].address,
        this.phoneNumber = temp[0].phoneNumber,
        this.email = temp[0].email,
        this.contactPersonName = temp[0].contactPersonName,
        this.regDate = temp[0].regDate,
        this.noOFEmployees = temp[0].noOFEmployees  
         
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
      this.companyID != undefined &&
      this.companyID != '' &&
      this.companyName != undefined &&
      this.companyName != '' &&
      this.address != undefined &&
      this.address != '' && 
      this.phoneNumber != undefined &&
      this.phoneNumber != '' &&
      this.email != undefined &&
      this.email != '' &&
      this.contactPersonName != undefined &&
      this.contactPersonName != '' &&
      this.regDate != undefined &&
      this.regDate != '' &&
      this.noOFEmployees != undefined &&
      this.noOFEmployees != ''
    ) {
      debugger;
      var entity = {
        CompanyID: this.companyID,
        CompanyName: this.companyName,
        Address: this.address,
        PhoneNumber: this.phoneNumber,
        Email: this.email,
        ContactPersonName: this.contactPersonName,
        RegDate: this.regDate,
        NoOFEmployees: this.noOFEmployees
        
      }
      this.StudentService.InsertCompany(entity).subscribe((data) => {
        alert('Saved Successfully');
        location.href = '/Company';
      });
    } else {
      alert('sorry some field is empty');
    }
  }
  Update() 
{
  debugger;
  
  if (
    this.companyID != undefined &&
    this.companyID != '' &&
    this.companyName != undefined &&
    this.companyName != '' &&
    this.address != undefined &&
    this.address != '' && 
    this.phoneNumber != undefined &&
    this.phoneNumber != '' &&
    this.email != undefined &&
    this.email != '' &&
    this.contactPersonName != undefined &&
    this.contactPersonName != '' &&
    this.regDate != undefined &&
    this.regDate != '' &&
    this.noOFEmployees != undefined &&
    this.noOFEmployees != ''
  ) {
    debugger;
    var entity = {
        ID: this.id,
        CompanyID: this.companyID,
        CompanyName: this.companyName,
        Address: this.address,
        PhoneNumber: this.phoneNumber,
        Email: this.email,
        ContactPersonName: this.contactPersonName,
        RegDate: this.regDate,
        NoOFEmployees: this.noOFEmployees
      
    };
    this.StudentService.UpdateCompany(entity).subscribe((data) => {
      alert('Update Successfully');
      location.href = '/Company';
    });
  } else {
    alert('sorry some field is empty');
  }
}







}
