import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertsService } from 'src/app/services/alerts.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
      private fb: FormBuilder, 
      private _userService: UserService,
      private _alert: AlertsService
  ) { }

  public loginForm = this.fb.group({
    email: ['mg98sergio@gmail.com', [ Validators.required ]],
    password: ['sergioayala98', [ Validators.required ]],
    remember: [false, [ Validators.required]]
  });
  ngOnInit(): void {
  }

  login() {
    if (this.loginForm.valid) {
      this._userService.loginUser(this.loginForm.value).subscribe(
        (res: any) => {
          console.log(res);
        },
        err => {
          console.error(err);          
        }
      )
    }
    
  }

}
