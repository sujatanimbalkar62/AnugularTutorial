import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { anyChanged } from '@progress/kendo-angular-common';
import { Observable } from 'rxjs';
import { AuthResponce } from '../appInterface/auth-interface';
import { AuthServiceService } from '../auth-service.service';
import { ErrorService } from '../error.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  form!: FormGroup
  loginMode: boolean = true;
  filterName: any
  error:any
  errMesg:any=this.errorsevice.errorMessges;
  

  constructor(private fb: FormBuilder,
    private authService: AuthServiceService,
    private errorsevice: ErrorService,
    private router:Router) { }


  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    })
  }
  onModeSwitch() {
    this.loginMode = !this.loginMode
  }

  onSubmit() {
    console.log(this.form.value);
    const email = this.form.value.email
    const password = this.form.value.password;

    if (this.loginMode) {
      //login req
      this.authService.signIn(email, password).subscribe((res) => {
        console.log(res)
        this.clear()
        this.router.navigate(['employeedashbord'])
      }, err => {
        console.log(err);
        this.error=err;
       // this.error=err.error.error.message
        
    })
  }
    else {
      //signup req
      this.authService.signUp(email, password).subscribe((res) => {
        console.log(res)
     
        this.clear()
  
      }, err => {
        console.log(err);
         this.error=err;
       // this.error=err.error.error.message
      })
     
    }

  }
  clear() {
    this.form.reset();
  }

}


