import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Router, RouterLink } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-level-das-board',
  templateUrl: './level-das-board.component.html',
  styleUrls: ['./level-das-board.component.css']
})
export class LevelDasBoardComponent implements OnInit {
  level: any;
id:any;
  constructor(private StudentService:StudentService,private router: Router) { }

  ngOnInit(): void {
    this.GetLevelMaster()
  }

  GetLevelMaster() {
    debugger;
    this.StudentService.GetLevelMaster().subscribe((data) => {
    this.level=data;
      console.log('GetLevelMasterDetails', this.level);
   
    });
  }

  delete(id: any) {
    debugger;
    this.StudentService.DeleteLevelMaster(id).subscribe((data) => {
      Swal.fire('Deleted')

      window.location.reload();
    });
  }

  edit(id: number) {
    debugger;
    this.router.navigate(['LevelForm/' + id]);
  }

}
function data(data: any) {
  throw new Error('Function not implemented.');
}

