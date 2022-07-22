import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {StudentComponent} from "./student.component";
import {ClassroomComponent} from "./classroom.component";
import {status} from "./class/class";
import {CurrentweatherComponent} from "./currentweather/currentweather.component";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {FCWTcomponent} from "./FCweather/fcwt";
import {ChildFCWT} from "./childFCWT/childFCWT";
import {LoginComponent} from "./login/login.component";
import {RouterModule, Routes} from "@angular/router";
import {SignupCPN} from "./login/signup";
const rt:Routes=[
  {path:'signup',component:SignupCPN},
  {path:'login',component:LoginComponent},
  {path:'', redirectTo:'login',pathMatch:'full'},
  {path:'login/signup', redirectTo:'signup',pathMatch:'full'},
  {path:'signup/login', redirectTo:'login',pathMatch:'full'},
]

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    ClassroomComponent,
    status,
    CurrentweatherComponent,
    FCWTcomponent,
    ChildFCWT,
    LoginComponent,
    SignupCPN


  ],
  imports: [
    BrowserModule,FormsModule,
    HttpClientModule,
    RouterModule.forRoot(rt)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

