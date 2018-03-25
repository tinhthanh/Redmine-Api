import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public sms: string; // error report
  public isLogin = false; // hide button login
  private userRemember: any = {}; //  variable save the password


  loginFormGroup: FormGroup;
  constructor( private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute) {
    }

  ngOnInit() {
    if (!this.userRemember) { // the case with no log logs login
      this.userRemember = {};
      this.userRemember.email = '';
      this.userRemember.password = '';
      this.userRemember.forword = false;
      }
    this.loginFormGroup = new FormGroup({
      email: new FormControl(this.userRemember.email, [
          Validators.required,
          // tslint:disable-next-line:max-line-length
          Validators.pattern(/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?![_.])$/)
      ]),
      password: new FormControl(this.userRemember.password, [
          Validators.pattern(/^(?=.*[A-Z\u00C0-\u00DF].*)(?=.*[0-9].*)(?=.*[a-z\u00E0-\u00FF].*).{8,}$/),
          Validators.required,
      ]),
      forword: new FormControl(this.userRemember.forword)
  });
  }
  public login(): void {
  }
}
