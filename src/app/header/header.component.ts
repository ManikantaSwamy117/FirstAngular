import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
hh:any;
mm:any;
ampm:any;
time:any;

  constructor() { }

  ngOnInit(): void {

    setInterval(() => {

      var time = new Date();

      this.time = time.toLocaleString('en-US', { hour: '2-digit', minute: 'numeric', hour12: true });

      let temp: any = this.time.split(':');

      this.hh = temp[0];

      let temp1: any = this.time.split(':')[1].split(" ");

      this.mm = temp1[0];

      this.ampm = temp1[1];

    }, 1000);



  }
 
}
