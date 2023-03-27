import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AllErrorMessagesComponent } from './components/all-error-messages/all-error-messages.component';
import { ErrorInputComponent } from './components/error-input/error-input.component';



@NgModule({
  declarations: [
    ErrorInputComponent,
    AllErrorMessagesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ErrorInputComponent
  ]
})
export class ErrorModule { }
