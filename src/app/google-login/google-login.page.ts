import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
@Component({
  selector: 'app-google-login',
  templateUrl: './google-login.page.html',
  styleUrls: ['./google-login.page.scss'],
})
export class GoogleLoginPage implements OnInit {

  constructor(
    private google: GooglePlus,
    private router: Router
  ) { }

  ngOnInit() {
  }
  loginGoogle() {
    this.google.login({})
      .then((res) => {
        localStorage.setItem('token_id', res.access_token);
        this.router.navigate(['home']);
      })
      .catch(err => console.error(err));
  }
}
