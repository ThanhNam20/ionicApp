import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  myForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) { }
  ngOnInit() {
    this.myForm = this.fb.group({
      email: '',
      password: ''
    });
  }
  submit() {
    const { email, password } = this.myForm.value;
    const user = this.userService.users.find(x => x.email === email && x.password === password);
    if (!user) {
      alert('User is not Exist');
      this.myForm = this.fb.group({
        email: '',
        password: ''
      });
    } else {
      localStorage.setItem('userID', user.id); // store user id when submit
      this.router.navigate([`user/${user.id}`]);
    }
  }
}
