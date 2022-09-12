import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {RouterModule} from '@angular/router';
import { signuproutes } from '../routing/signuproutes';


import { SignupComponent } from './signup.component';



@NgModule({
  declarations: [
    SignupComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(signuproutes)
  ],
  providers: [],
  bootstrap: [SignupComponent]
})
export class SignupModule { }
