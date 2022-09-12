import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';


import { HomeComponent } from './home/home.component';

import { MasterComponent } from './master.component';
import { Mainroutes } from './routing/mainroutes';


@NgModule({
  declarations: [
   
    HomeComponent,
    MasterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(Mainroutes)
  ],
  providers: [],
  bootstrap: [MasterComponent]
})
export class MasterModule { }
