import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  Country:any;
  constructor(private StudentService:StudentService) { }

  ngOnInit(): void {

    this.GetCountryData();
  }



  GetCountryData() {
    this.StudentService.GetCountryData().subscribe((data:any) => {
      this.Country = data;
      console.log('State List', this.Country);
    });
  }



}
