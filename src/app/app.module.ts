import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';

import { ReactiveFormsModule, Validators } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzRateModule } from 'ng-zorro-antd/rate';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from "./sign-up/sign-up.component";
// jab submit ka button use karte hai toh form submit karega
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NzFormModule,
    NzGridModule,
    ReactiveFormsModule,
    NzButtonModule,
    NzInputModule,
    NzRateModule,
    FormsModule,
    CommonModule,
    RouterModule,
    SignUpComponent,
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
