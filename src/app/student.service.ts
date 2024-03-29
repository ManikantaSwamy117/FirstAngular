import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class StudentService {


  private Subject = new Subject<any>();



  url: any;

  constructor(private http: HttpClient) {}

  private host = 'http://localhost:4199/';



  errorMessage(pageName:any,ErrorMessage:any)
  {

    var entity={
      PageName:pageName,
      ErrorMessage:ErrorMessage
    }

    this.Subject.next(entity)

  }

  geterrorEvent()
  {
    return this.Subject.asObservable()
  }



  public GetOffice() {
    return this.http.get<any[]>(this.host + 'Doctor/GetOffice');
  }

  public GetCollegeStudent2() {
    return this.http.get<any[]>(this.host + 'Doctor/GetOffice');
  }

  public GetStudentDetails() {
    return this.http.get<any[]>(this.host + 'Doctor/GetStudentDetails');
  }

  public InsertStudentDetails(data: any) {
    this.url = this.host + '/Doctor/InsertStudentDetails';
    return this.http.post(this.url, data);
  }

  public UpdateStudentDetails(data: any) {
    this.url = this.host + '/Doctor/UpdateStudentDetails';
    return this.http.post(this.url, data);
  }

  public DeleteStudentDetails(id: any) {
    return this.http.get<any[]>(
      this.host + 'Doctor/DeleteStudentDetails?ID=' + id
    );
  }

  public GetCompany() {
    return this.http.get<any[]>(this.host + 'Doctor/GetCompany');
  }

  public InsertCompany(data: any) {
    this.url = this.host + '/Doctor/InsertCompany';
    return this.http.post(this.url, data);
  }

  public UpdateCompany(data: any) {
    this.url = this.host + '/Doctor/UpdateCompany';
    return this.http.post(this.url, data);
  }

  public DeleteCompany(id: any) {
    return this.http.get<any[]>(this.host + 'Doctor/DeleteCompany?ID=' + id);
  }

  public GetAmazeCompanyDetails() {
    return this.http.get<any[]>(this.host + 'Doctor/GetAmazeCompanyDetails');
  }
  public InsertAmazeCompanyDetails(data: any) {
    this.url = this.host + '/Doctor/InsertAmazeCompanyDetails';
    return this.http.post(this.url, data);
  }

  public UpdateAmazeCompanyDetails(data: any) {
    this.url = this.host + '/Doctor/UpdateAmazeCompanyDetails';
    return this.http.post(this.url, data);
  }

  public DeleteAmazeCompanyDetails(id: any) {
    return this.http.get<any[]>(
      this.host + 'Doctor/DeleteAmazeCompanyDetails?ID=' + id
    );
  }

  public GetStaffCount() {
    return this.http.get<any[]>(this.host + 'Doctor/GetStaffCount');
  }

  public GetCompanyCount() {
    return this.http.get<any[]>(this.host + 'Doctor/GetCompanyCount');
  }
  public GetHolidaysCount() {
    return this.http.get<any[]>(this.host + 'Doctor/GetHolidaysCount');
  }

  public GetEmployeData() {
    return this.http.get<any[]>(this.host + 'Doctor/GetEmployeData');
  }

  public GetCityData() {
    return this.http.get<any[]>(this.host + 'Doctor/GetCityMaster');
  }

  public GetStateData() {
    return this.http.get<any[]>(this.host + 'Doctor/GetStateMaster');
  }

  public GetCountryData() {
    return this.http.get<any[]>(this.host + 'Doctor/GetCountryMaster');
  }

  public GetHolidayTable() {
    return this.http.get<any[]>(this.host + 'Doctor/GetHolidayTable');
  }

  public InsertHolidayTable(data: any) {
    this.url = this.host + '/Doctor/InsertHolidayTable';
    return this.http.post(this.url, data);
  }
  public UpdateHolidayTable(data: any) {
    this.url = this.host + '/Doctor/UpdateHolidayTable';
    return this.http.post(this.url, data);
  }

  public DeleteHolidayTable(id: any) {
    return this.http.get<any[]>(
      this.host + 'Doctor/DeleteHolidayTable?ID=' + id
    );
  }

  public GetStaff1() {
    return this.http.get<any[]>(this.host + 'Doctor/GetStaff1');
  }
  public InsertStaff1(data: any) {
    this.url = this.host + '/Doctor/InsertStaff1';
    return this.http.post(this.url, data);
  }

  public UpdateStaff1(data: any) {
    this.url = this.host + '/Doctor/UpdateStaff1';
    return this.http.post(this.url, data);
  }

  public DeleteStaff1(id: any) {
    return this.http.get<any[]>(this.host + 'Doctor/DeleteStaff1?ID=' + id);
  }

  // public GetIDDetails()
  // {

  // return this.http.get<any[]>(this.host+ 'Doctor/GetIDDetails')

  // }
  public GetIDDetails() {
    return this.http.get<any[]>(this.host + 'Doctor/GetIDDetails');
  }

  public InsertEmployeDetails(data: any) {
    this.url = this.host + '/Doctor/InsertEmployeDetails';
    return this.http.post(this.url, data);
  }

  public InsertIDDetails(data: any) {
    this.url = this.host + '/Doctor/InsertIDDetails';
    return this.http.post(this.url, data);
  }
  public GetLevelMaster() {
    return this.http.get<any[]>(this.host + 'Doctor/GetLevelMaster');
  }

  public InsertLevelMaster(data: any) {
    this.url = this.host + 'Doctor/InsertLevelMaster';
    return this.http.post(this.url, data);
  }

  public UpdateLevelMaster(data: any) {
    this.url = this.host + 'Doctor/UpdateLevelMaster';
    return this.http.post(this.url, data);
  }

  public DeleteLevelMaster(id: any) {
    return this.http.get<any[]>(
      this.host + 'Doctor/DeleteLevelMaster?ID=' + id
    );
  }
}
