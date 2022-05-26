import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  signInUp: boolean = false;
  errorMessage: string = '';

  signupForm = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl('', [Validators.required]),
  })

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required]),
  })

  constructor(private authService: AuthService, private route : Router) { }

  ngOnInit(): void { }

  toggleLoginForm() {
    this.signInUp = !this.signInUp;
  }

  register() {
    this.errorMessage = "";
    this.authService.register({ email: this.signupForm.value.email, password: this.signupForm.value.password }).subscribe(
      data=>{
        this.signInUp = true
        this.route.navigate(['login'])
      },
      error => {
        this.errorMessage = error.error.error.message;
      }
    )
  }

  login() {
    this.errorMessage = "";
    console.log('login form', this.loginForm.value)
    this.authService.login({ email: this.loginForm.value.email, password: this.loginForm.value.password })
      .subscribe(data => {
        // console.log(data)
        //  console.log("token",data.idToken)
        //  localStorage.setItem('token',data.idToken)
        this.route.navigate(['/'])
      },
      error =>{ console.log(error.error.error.message)
        this.errorMessage = error.error.error.message
      }
    )
  }

}
