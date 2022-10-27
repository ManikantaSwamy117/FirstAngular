import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-level-form',
  templateUrl: './level-form.component.html',
  styleUrls: ['./level-form.component.css']
})
export class LevelFormComponent implements OnInit {
  id: any;
 
  submit: any;
  short:any;
  description:any;

  constructor(private StudentService: StudentService,private ActivatedRoute:ActivatedRoute) { }

  ngOnInit(): void {

    this.ActivatedRoute.params.subscribe((params:any) => {
      this.id = params['id']
debugger
      if (this.id != undefined) {
        this.GetLevelMaster();
       
        this.submit='Update';
      }
      else {
      
        this.submit='Submit';
      }

    })
    this.GetLevelMaster();



  }
  GetLevelMaster() {
    debugger
    this.StudentService.GetLevelMaster().subscribe(data=>{
      debugger
      // this.studentList = data.filter(x => x.id == this.id);
      let temp = data.filter(x => x.id == this.id);
      console.log("level",temp)
      this.short = temp[0].short,
        this.description = temp[0].description
      
      
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
      this.short != undefined &&
      this.short != '' &&
      this.description != undefined &&
      this.description != '' 
    ) {
      debugger;
      var entity = {
        short: this.short,
        description: this.description,
     
      };
      this.StudentService.InsertLevelMaster(entity).subscribe((data) => {
        alert('Saved Successfully');
        location.href = '/LevelMaster';
      });
    } else {
      alert('sorry some field is empty');
    }
  }

  
  Update() 
{
  debugger;
  
  if (
    
    this.short != undefined &&
    this.short != '' &&
    this.description != undefined &&
    this.description != '' 
  ) {
    debugger;
    var entity = {
      id: this.id,
      short: this.short,
      description: this.description,
    
    };
    this.StudentService.UpdateLevelMaster(entity).subscribe((data) => {
      alert('Update Successfully');
      location.href = '/LevelMaster';
    });
  } else {
    alert('sorry some field is empty');
  }
}



}
