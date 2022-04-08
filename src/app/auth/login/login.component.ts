import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {
  fLogin: FormGroup;
  estadoM = true;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.initFormulario();
  }
  // METODO QUE NOS VA PERMITIR INICIAR EL FORMULARIO
  private initFormulario(): void{
    this.fLogin = new FormGroup({
      email: new FormControl({ value: '', disabled: false},
      [Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
      password: new FormControl('', { validators: Validators.required})
    });
  }
  // fin
  // METODO QUE NOS VA PERMITIR INICIAR SESSION CON EL USUSARIO
  public iniciarSession(): void{
    const ema: string = this.fLogin.get('email').value;
    const pas: string = this.fLogin.get('password').value;
    const e1 = 'jbarbieri@wallypos.com';
    const p1 = '123456';
    if (ema.trim() === e1 && pas.trim() === p1) {
        this.router.navigate(['page/home']);
    }else{
      this.estadoM = false;
      setTimeout(() => { this.estadoM = true; }, 2000
      );
    }
  }
  // FIN
  // VALIDADOR DEL FORMULARIO
  get fb(){
    return this.fLogin.controls;
  }
  // fin

}
