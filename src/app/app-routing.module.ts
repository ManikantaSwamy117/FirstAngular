import { Component, NgModule } from '@angular/core';

// import { HomeComponent } from './home/home.component';
// import { AboutComponent } from './about/about.component';
// import { HomeComponent } from './home/home.component';
// import { EmployeDashBoardComponent } from './employe-dash-board/employe-dash-board.component';
import { TableComponent } from './table/table.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { TableDataComponent } from './table-data/table-data.component';
import { StudentDataComponent } from './student-data/student-data.component';
import { EmployeDataComponent } from './employe-data/employe-data.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { DummyLoginFormComponent } from './dummy-login-form/dummy-login-form.component';
import { RouterModule, Routes } from '@angular/router';
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
import { StaffDetailsComponent } from './staff-details/staff-details.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { AmazeDataComponent } from './amaze-data/amaze-data.component';
import { AmazeStaffDetailsComponent } from './amaze-staff-details/amaze-staff-details.component';
import { FliterTableComponent } from './fliter-table/fliter-table.component';
import { CityComponent } from './city/city.component';
import { StateComponent } from './state/state.component';
import { CountryComponent } from './country/country.component';
import { LevelDasBoardComponent } from './level-das-board/level-das-board.component';
import { LevelFormComponent } from './level-form/level-form.component';

const routes: Routes = [
 
  //  { path: 'home', component: HomeComponent },
  // { path:'about', component: AboutComponent },
  // { path:'EmployeDashBoard', component: EmployeDashBoardComponent }
  {path: '', redirectTo:'/DummyLoginForm', pathMatch: 'full'},
  {path: '', redirectTo:'/DashBoard', pathMatch: 'full'},
  { path:'DashBoard', component: DashBoardComponent },
  { path:'Table', component: TableComponent },
  { path:'TableData', component: TableDataComponent },
  { path:'StudentData', component: StudentDataComponent },
  { path:'StudentData/:id', component: StudentDataComponent },
  { path:'EmployeData', component: EmployeDataComponent },
  { path:'LoginForm', component: LoginFormComponent },
  { path:'DummyLoginForm', component: DummyLoginFormComponent },
  { path:'DashBoardForm', component: DashBoardFormComponent },
  { path:'DashBoardForm/:id', component: DashBoardFormComponent },

  { path:'Header', component: HeaderComponent },
  { path:'sidebar', component: SidebarComponent },
  { path:'NewDashBoard', component: NewDashBoardComponent },
  { path:'LearningAndDevelopment', component: LearningAndDevelopmentComponent },
  { path:'CataLog', component: CataLogComponent },
  { path:'EmployeeForm', component: EmpployeeFormComponent },
  { path:'EmployeeForm/:id', component: EmpployeeFormComponent },
  { path:'Chat', component: ChatComponent },
  { path:'HolidayDashboard', component: HolidayDashboardComponent },
  { path:'LeaveElection', component: LeaveElectionComponent },
  { path:'Home1', component: Home1Component },
  { path:'Staff', component:StaffComponent },
  { path:'Company', component:CompanyComponent },
  { path:'StaffDetails', component:StaffDetailsComponent },
  { path:'StaffDetails/:id', component: StaffDetailsComponent },
  { path:'CompanyDetails', component:CompanyDetailsComponent },
  { path:'CompanyDetails/:id', component: CompanyDetailsComponent },
  { path:'AmazeData', component:AmazeDataComponent },
  { path:'AmazeStaffDetails', component: AmazeStaffDetailsComponent },
  { path:'AmazeStaffDetails/:id', component: AmazeStaffDetailsComponent },
  { path:'FliterTable', component: FliterTableComponent },
  { path:'City', component: CityComponent },
  { path:'State', component: StateComponent },
  { path:'Country', component: CountryComponent },
  { path:'LevelMaster', component: LevelDasBoardComponent }, 
  { path:'LevelForm', component: LevelFormComponent },
  { path:'LevelForm/:id', component: LevelFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
