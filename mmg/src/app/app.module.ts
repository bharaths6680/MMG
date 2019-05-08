import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { from } from 'rxjs';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatCardModule, MatTableModule, MatInputModule, MatFormFieldModule } from '@angular/material';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DriverComponent } from './driver/driver.component';
import { CustomerComponent } from './customer/customer.component';
import { OperatorComponent } from './operator/operator.component';
import { FranchiseComponent } from './franchise/franchise.component';
import { DriverCreateComponent } from './driver/driver-create/driver-create.component';
import { DriverListComponent } from './driver/driver-list/driver-list.component';
import { HttpClientModule } from '@angular/common/http';
import { DriverDetailsComponent } from './driver/driver-details/driver-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DriverService } from './driver.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideNavComponent,
    DashboardComponent,
    DriverComponent,
    CustomerComponent,
    OperatorComponent,
    FranchiseComponent,
    DriverCreateComponent,
    DriverListComponent,
    DriverDetailsComponent,
  ],
  
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    RouterModule,
    AppRoutingModule,
    MatTableModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
 
    
  
 
  ],
  providers: [DriverService],
  bootstrap: [AppComponent]
})

export class AppModule { }
