import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {UserDetailsComponent} from "./user-details/user-details.component";

@NgModule({
  declarations: [UserDetailsComponent],
  imports: [CommonModule, RouterModule.forChild([{
    path: '',
    component: UserDetailsComponent
  }])],
})
export class Remote1UserDetailsModule {}
