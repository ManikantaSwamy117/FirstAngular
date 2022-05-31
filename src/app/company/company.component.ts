import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  companydetails:any;
  CompanyID: any;
  CompanyName: any;
  Address: any;
  PhoneNumber: any;
  Email: any;
  ContactPersonName: any;
  RegDate: any;
  NoOFEmployees: any;
  constructor(private StudentService:StudentService,private router:Router) { }

  ngOnInit(): void {
    this.GetCompany();
  }

  GetCompany(){
    debugger
      this.StudentService.GetCompany().subscribe(data=>{
        this.companydetails=data;

        console.log('companydetails',this.companydetails)
        // console.log('dummy',data)
      })
    }


    delete(id: any) {
      debugger;
      this.StudentService.DeleteCompany(id).subscribe(data => {
        alert('Deleted');
        
        window.location.reload();
      
      })
    }

 
    insert() {
      debugger;
      {
        debugger; 
        
        if (
          this.CompanyID != undefined &&
          this.CompanyID != '' &&
          this.CompanyName != undefined &&
          this.CompanyName != '' &&
          this.Address != undefined &&
          this.Address != '' && 
          this.PhoneNumber != undefined &&
          this.PhoneNumber != '' &&
          this.Email != undefined &&
          this.Email != '' &&
          this.ContactPersonName != undefined &&
          this.ContactPersonName != '' &&
          this.RegDate != undefined &&
          this.RegDate != ''&&
          this.NoOFEmployees != undefined &&
          this.NoOFEmployees != '' 
         
         ) {
          debugger;
          var entity = {
            CompanyID: this.CompanyID,
            CompanyName: this.CompanyName,
            Address: this.Address,
            PhoneNumber: this.PhoneNumber,
            Email: this.Email,
            ContactPersonName: this.ContactPersonName,
            RegDate: this.RegDate,
            NoOFEmployees: this.NoOFEmployees,
           
          }
          this.StudentService.InsertCompany(entity).subscribe((data) => {
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
  this.router.navigate(['/CompanyDetails/'+id])
}











}
