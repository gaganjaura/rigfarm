import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SelectModule } from 'ng2-select';
import {  MaterialModule, MdDatepickerModule, MdNativeDateModule, MdInputModule, MdSelectModule } from '@angular/material';

import { MyInvestmentComponent } from './my-investment.component';
import { MyInvestmentRoutes } from './my-investment.routing';

@NgModule({
    imports: [
        RouterModule.forChild(MyInvestmentRoutes),
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        MdDatepickerModule,
        MdInputModule,
        MdNativeDateModule,
        MdSelectModule
    ],
    declarations: [MyInvestmentComponent]
})

export class MyInvestmentModule {}
