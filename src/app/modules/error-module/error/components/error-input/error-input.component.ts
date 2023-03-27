import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-error-input',
  templateUrl: './error-input.component.html',
  styleUrls: ['./error-input.component.scss']
})
export class ErrorInputComponent {
  @Input()
  public control: AbstractControl | null = null;

  constructor() {

  }

  get errorMessage(): string {
    if (!this.control) {
      return '';
    }
    const errorKeys = this.control.errors !== null ? Object.keys(this.control.errors) : [];
    for (let error of errorKeys) {
      switch(error) {
        case 'required':
          return 'This is a required field';
        case 'email': 
          return `The email is not a valid email format.`;
      }
    }
    return 'Something is wrong'; 
  }
}
