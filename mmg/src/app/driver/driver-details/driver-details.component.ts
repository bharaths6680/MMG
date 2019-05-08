import { Component, OnInit } from '@angular/core';
import { Driver } from 'src/app/Models/drivermodule';
import { DriverService } from 'src/app/driver.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-driver-details',
  templateUrl: './driver-details.component.html',
  styleUrls: ['./driver-details.component.css']
})
export class DriverDetailsComponent implements OnInit {
drive:Driver;
  constructor(private driverService:DriverService,private router:Router) { }

  ngOnInit() {
    this.drive=this.driverService.getter()
  }
  updateDriver(){
  
    if
    (this.drive.driverId==undefined)
    {
    this.driverService.createDriver(this.drive)
    .subscribe(
      data =>{
        
        alert("Driver created successfully")
      });
    }
  else{
    this.driverService.updateDriver(this.drive)
    .subscribe(
      data =>{
        
        alert("Driver update  successfully")
        this.router.navigate(['/driver-list']);
      });
  }

}
  
  


  }


