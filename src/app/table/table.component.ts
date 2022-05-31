import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  constructor(private StudentService: StudentService) {}
  officeList: any;
  ngOnInit(): void {
    this.StudentService.GetOffice().subscribe((data:any) => {
      this.officeList = data;
      console.log('Office List', this.officeList);
    });
  }
}
