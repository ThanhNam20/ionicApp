import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserService } from './user.service';
import { Injectable } from '@angular/core';
import { listUser } from '../constant';

const httpOptions = {
  headers: new HttpHeaders({ 'app-id': '5f4600497368960002fce8a0' })
};

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  users: any[] = listUser;
  scrollUsers: any[];
  addUsers: any[];
  page: any = 0;
  constructor(
    private userService: UserService,
    private http: HttpClient
  ) { }
  getData() {
    return this.http.get(`https://dummyapi.io/data/api/user?page=${this.page}`, httpOptions);
  }
}
