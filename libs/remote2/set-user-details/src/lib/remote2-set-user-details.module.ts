import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {SetUserDetailsComponent} from "./set-user-details/set-user-details.component";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [SetUserDetailsComponent],
  imports: [FormsModule, CommonModule, RouterModule.forChild([{
    path: '',
    component: SetUserDetailsComponent
  }])],
})
export class Remote2SetUserDetailsModule {
}
