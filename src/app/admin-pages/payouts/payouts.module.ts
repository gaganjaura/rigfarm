import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PayoutsComponent } from './payouts.component';
import { PayoutsRoutes } from './payouts.routing';

@NgModule({
    imports: [
        RouterModule.forChild(PayoutsRoutes),
        CommonModule,
        FormsModule
    ],
    declarations: [PayoutsComponent]
})

export class PayoutsModule {}
