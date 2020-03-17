import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormtestRoutingModule } from './formtest-routing.module';
import { FormtestComponent } from './formtest.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [FormtestComponent],
  imports: [
    CommonModule,
    FormtestRoutingModule,
    ReactiveFormsModule
  ]
})
export class FormtestModule { }
