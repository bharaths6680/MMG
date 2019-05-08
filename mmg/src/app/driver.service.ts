import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Driver} from 'src/app/Models/drivermodule';

const httpOptions={
  headers: new HttpHeaders({'content Type':'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class DriverService {
private drive:Driver;
  constructor(private http:HttpClient) { }

createDriver(driver){
    return this.http.post<Driver>('http://localhost:1234/111/create',driver);
}
getDriverList(){
  return this.http.get<Driver>('http://localhost:1234/111/getDrivers');
}
getDriver(driver){
  return this.http.get<Driver>('http://localhost:1234/111/getDriver/'+ driver.driverId);
}
updateDriver(driver){
  return this.http.put<Driver>('http://localhost:1234/111/update',driver);
}
setter(drive:Driver){
  this.drive=drive;
}
getter(){
  return this.drive;
}
}