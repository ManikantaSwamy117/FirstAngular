import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  url:any;
  constructor(private http:HttpClient) { }

private host="http://localhost:4199/"

//   public GetEmployeI()
//   {
// return this.http.get<any[]>(this.host+"Doctor/GetEmployeI");
//   }

  // public InsertEmployeI(data:any){
  //   this.url=this.host+"Doctor/InsertEmployeI"
  //   return this.http.post(this.url,data);
  // }


public GetCollegeStudent2()
   {
 return this.http.get<any[]>(this.host+"Doctor/GetCollegeStudent2");
   }


post1=''


  }