import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css'],
})
export class ErrorComponent implements OnInit {
  getErrorException: Subscription | undefined;
  constructor(private StudentService: StudentService) {
    this.getErrorException = this.StudentService.geterrorEvent().subscribe(
      (data) => {
        console.log(data);

        
      }
    );
  }

  ngOnInit(): void {}
}
