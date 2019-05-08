import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css']
})
export class DriverComponent implements OnInit {
public agreed:boolean;
setAgreed(agree){
  this.agreed =agree;
}
  constructor() { }

  ngOnInit() {
  }

}
