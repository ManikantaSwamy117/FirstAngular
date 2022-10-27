import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {
  City:any

  constructor(private StudentService:StudentService) { }

  ngOnInit(): void {
   this.GetCityData();
  }

  GetCityData() {
    this.StudentService.GetCityData().subscribe((data:any) => {
      this.City = data;
      console.log('City List', this.City);
    });
  }







}
