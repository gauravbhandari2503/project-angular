import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorInputComponent } from './components/error-input/error-input.component';
import { AllErrorMessagesComponent } from './components/all-error-messages/all-error-messages.component';



@NgModule({
  declarations: [
    ErrorInputComponent,
    AllErrorMessagesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ErrorModule { }
