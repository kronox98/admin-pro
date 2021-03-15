import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertsService } from 'src/app/services/alerts.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formSubmitted: boolean = false;
  constructor(
    private fb: FormBuilder, 
    private _userService: UserService,
    private _alert: AlertsService,
    private _router: Router
  ) { }

  public registerForm = this.fb.group({
    name: ['Sergio', [ Validators.required ]],
    email: ['mg98sergio@gmail.com', [ Validators.required ]],
    password: ['sergioayala98', [ Validators.required ]],
    confirm: ['sergioayala98', [ Validators.required ]],
    term: [true, [ Validators.required]]
  });

  ngOnInit(): void {
  }

  registerUser() {
    this.formSubmitted = true;
    if (this.registerForm.valid && this.registerForm.value.term && this.passwordsCheck()) {
      this._userService.registerUser(this.registerForm.value).subscribe( 
        (res: any) => {
          console.log(res);
          this.registerForm.reset();
          this.formSubmitted = false;
          this._alert.showAlert('Registro exitoso', res.message, 'success', 'Aceptar');
          this._router.navigate(['/dashboard'])
        }, 
        err => {
          console.log(err);
          if (err.error && !err.error.ok) {
            this._alert.showAlert('Error', err.error.message, 'error', 'Aceptar');
          }
          this.formSubmitted = false;
        }
      );
    } else {
      this._alert.showAlert('Formulario no válido', 'Revisa los datos', 'error', '');
      console.log('Formulario no válido');
    }
  }

  terms() {
    return !this.registerForm.get('term').valid && this.formSubmitted;
  }

  passwordsCheck(): boolean {
    const { password, confirm } = this.registerForm.getRawValue();
    console.log(password);
    return (password === confirm)? true:false;
  }

}
