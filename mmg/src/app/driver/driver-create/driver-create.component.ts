import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Driver } from 'src/app/Models/drivermodule';
import { DriverService } from 'src/app/driver.service';
import { NgForm,FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-driver-create',
  templateUrl: './driver-create.component.html',
  styleUrls: ['./driver-create.component.css']
})
export class DriverCreateComponent implements OnInit {
driver: Driver =new Driver();


  constructor(private router:Router,private driverService:DriverService,private formBuilder:FormBuilder) { }

  ngOnInit():void {
  }
  addDriver(f:NgForm){
    this.driverService.createDriver(this.driver)
    .subscribe(
      data =>{
        
        alert("Driver created successfully")
      });
      f.resetForm();
  };

}
