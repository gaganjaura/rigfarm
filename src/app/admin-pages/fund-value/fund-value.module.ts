import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MdFormFieldModule } from '@angular/material';
import { MdInputModule, MdDialogModule } from '@angular/material';

import { FundValueComponent,CashOutDialog } from './fund-value.component';
import { FundValueRoutes } from './fund-value.routing';

@NgModule({
    imports: [
        RouterModule.forChild(FundValueRoutes),
        CommonModule,
        MdFormFieldModule,
        MdInputModule,
        MdDialogModule,
        FormsModule
    ],
    entryComponents: [CashOutDialog],
    declarations: [FundValueComponent,CashOutDialog]
})

export class FundValueModule {}
