import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MdSelectModule } from '@angular/material';

import { BuyHashpowerComponent } from './buy-hashpower.component';
import { BuyHashpowerRoutes } from './buy-hashpower.routing';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(BuyHashpowerRoutes),
        MdSelectModule
    ],
    declarations: [BuyHashpowerComponent]
})

export class BuyHashpowerModule {}
