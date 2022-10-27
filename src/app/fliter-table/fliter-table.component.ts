import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-fliter-table',
  templateUrl: './fliter-table.component.html',
  styleUrls: ['./fliter-table.component.css']
})
export class FliterTableComponent implements OnInit {
  EmployeData:any;
  countryID:any;
  allEmployeData:any;
  stateID:any;
  cityID:any;
  constructor(private StudentService:StudentService) { 

  }

  ngOnInit(): void {
   this.GetEmployeData()
   this.countryID=""
   this.stateID=""
   this.cityID=""

  }
  GetEmployeData() {
    this.StudentService.GetEmployeData().subscribe((data:any) => {
      this.allEmployeData = data;
      this.EmployeData=this.allEmployeData;
      console.log('EmployeData List', this.EmployeData);
    });
  }
  public filterCountry(even:any){
    debugger
    this.EmployeData = this.allEmployeData.filter((x: { countryName: any; })=>x.countryName==even.target.value)
  
  }

  public filterState(even:any){
    debugger
    this.EmployeData = this.allEmployeData.filter((x: { stateName: any; })=>x.stateName==even.target.value)
  
  }

  public filterCity(even:any){
    debugger
    this.EmployeData = this.allEmployeData.filter((x: { cityName: any; })=>x.cityName==even.target.value)
  
  }

  public declare(even:any){
    debugger
    this.EmployeData = this.allEmployeData.filter((x: { city: any; })=>x.city==even.target.value)
  
  }





}


