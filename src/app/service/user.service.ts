import { listUser } from './../constant';
import { User } from './../models/user';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'app-id' : '5f4600497368960002fce8a0' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: any[] = listUser;
  constructor(
    private http: HttpClient,
  ) { }

  dataUrl = 'https://dummyapi.io/data/api/user';
  getDataUser() {
    return this.http.get(this.dataUrl, httpOptions);
  }
}
