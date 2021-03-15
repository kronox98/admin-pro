import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertsService } from 'src/app/services/alerts.service';
import { UserService } from 'src/app/services/user.service';
declare const gapi: any;
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
    this.renderButton();
  }

  login() {
    if (this.loginForm.valid) {
      this._userService.loginUser(this.loginForm.value).subscribe(
        (res: any) => {
          console.log(res);
          console.log(this.loginForm.get('remember').value);
          
          if (this.loginForm.get('remember').value) {
            localStorage.setItem('email', this.loginForm.get('email').value)
          }

          this.router.navigate(['/dashboard'])
        },
        err => {
          console.error(err);          
        }
      )
    }
    
  }

  onSuccess(googleUser) {
    console.log('Logged in as: ' + googleUser.getBasicProfile().getName());
  }
  onFailure(error) {
    console.log(error);
  }
  renderButton() {
    gapi.signin2.render('my-signin2', {
      'scope': 'profile email',
      'width': 240,
      'height': 50,
      'longtitle': true,
      'theme': 'dark',
      'onsuccess': this.onSuccess,
      'onfailure': this.onFailure
    });
  }

}
