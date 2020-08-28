import { ScrollService } from './../service/scroll.service';
import { UserService } from './../service/user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.page.html',
  styleUrls: ['./user-info.page.scss'],
})
export class UserInfoPage implements OnInit {
  dataUsers: any[];
  addedUsers: any = [];
  maxPage: any = 5;
  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    public scrollService: ScrollService
  ) { }
  ngOnInit() {
    this.addMoreItem();
  }
  loadData(event) {
    this.addMoreItem();
    event.target.complete();
    if (this.scrollService.page === 4) {
      event.target.disabled = true;
    }

  }
  addMoreItem() {
    this.scrollService.page++;
    this.scrollService.getData().subscribe((response: any) => {
      this.addedUsers = this.addedUsers.concat(response.data);
    });
    console.log(this.addedUsers);
  }
}
