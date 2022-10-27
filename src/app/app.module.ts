import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { HomeComponent } from './home/home.component';
// import { AboutComponent } from './about/about.component';
// import { EmployeDashBoardComponent } from './employe-dash-board/employe-dash-board.component';
import { HttpClientModule } from '@angular/common/http';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { TableComponent } from './table/table.component';
import { TableDataComponent } from './table-data/table-data.component';
import { StudentDataComponent } from './student-data/student-data.component';
import { EmployeDataComponent } from './employe-data/employe-data.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { DummyLoginFormComponent } from './dummy-login-form/dummy-login-form.component';
import { ShowHidePasswordModule } from 'ngx-show-hide-password';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { DashBoardFormComponent } from './dash-board-form/dash-board-form.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NewDashBoardComponent } from './new-dash-board/new-dash-board.component';
import { LearningAndDevelopmentComponent } from './learning-and-development/learning-and-development.component';
import { CataLogComponent } from './cata-log/cata-log.component';
import { EmpployeeFormComponent } from './empployee-form/empployee-form.component';
import { ChatComponent } from './chat/chat.component';
import { HolidayDashboardComponent } from './holiday-dashboard/holiday-dashboard.component';
import { LeaveElectionComponent } from './leave-election/leave-election.component';
import { Home1Component } from './home1/home1.component';
import { StaffComponent } from './staff/staff.component';
import { CompanyComponent } from './company/company.component';
import { DatePipe } from '@angular/common';
import { StaffDetailsComponent } from './staff-details/staff-details.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { AmazeStaffDetailsComponent } from './amaze-staff-details/amaze-staff-details.component';
import { AmazeDataComponent } from './amaze-data/amaze-data.component';
import { FliterTableComponent } from './fliter-table/fliter-table.component';
import { CityComponent } from './city/city.component';
import { StateComponent } from './state/state.component';
import { CountryComponent } from './country/country.component';
import { LevelDasBoardComponent } from './level-das-board/level-das-board.component';
import { LevelFormComponent } from './level-form/level-form.component';

@NgModule({
  declarations: [
    AppComponent,
    // HomeComponent,
    // AboutComponent,
    DashBoardComponent,
    TableComponent,
    TableDataComponent,
    StudentDataComponent,
    EmployeDataComponent,
    LoginFormComponent,
    DummyLoginFormComponent,
    DashBoardFormComponent,
    HeaderComponent,
    SidebarComponent,
    NewDashBoardComponent,
    LearningAndDevelopmentComponent,
    CataLogComponent,
    EmpployeeFormComponent,
    ChatComponent,
    HolidayDashboardComponent,
    LeaveElectionComponent,
    Home1Component,
    StaffComponent,
    CompanyComponent,
    StaffDetailsComponent,
    CompanyDetailsComponent,
    AmazeStaffDetailsComponent,
    AmazeDataComponent,
    FliterTableComponent,
    CityComponent,
    StateComponent,
    CountryComponent,
    LevelDasBoardComponent,
    LevelFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, 
    ShowHidePasswordModule

  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
