import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css']
})
export class StateComponent implements OnInit {
State:any;
  constructor(private StudentService:StudentService) { }

  ngOnInit(): void {
    this.GetStateData();
  }


  GetStateData() {
    this.StudentService.GetStateData().subscribe((data:any) => {
      this.State = data;
      console.log('State List', this.State);
    });
  }





}
