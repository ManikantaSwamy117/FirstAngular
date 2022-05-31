import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class OfficeService {
  url: any;
  constructor(private http: HttpClient) {}
  private host = 'http://localhost:4199/';

  public InsertOffice(data: any) {
    this.url = this.host + '/Doctor/InsertOffice';
    return this.http.post(this.url, data);
  }

}
