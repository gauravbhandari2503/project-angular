import { Component, OnInit } from '@angular/core';
import {
  UntypedFormControl, UntypedFormGroup, Validators
} from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ValidationError } from 'src/app/modules/error-module/error/validation-error';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // Reactive login form
  public loginForm: UntypedFormGroup;
  
  // to show or hide password
  public passwordVisibility : boolean = false;

  // Validation errors
  validationErrors: ValidationError = {};

  constructor (public spinner: NgxSpinnerService) {
    this.loginForm = new UntypedFormGroup({});
  }

  ngOnInit() : void {
    this.setupLoginForm();
  }

  protected setupLoginForm(): void {
    // adding controls
    this.loginForm.addControl('email', new UntypedFormControl('', [Validators.email, Validators.required]));
    this.loginForm.addControl('password', new UntypedFormControl('', [Validators.required]));

  }

  protected login(): void {
    
  }


}
