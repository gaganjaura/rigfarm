import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MdSelectModule } from '@angular/material';

import { PaymentConfirmationComponent } from './payment-confirmation.component';
import { PaymentConfirmationRoutes } from './payment-confirmation.routing';

@NgModule({
    imports: [        
        CommonModule,
        FormsModule,
        RouterModule.forChild(PaymentConfirmationRoutes),
        MdSelectModule
    ],
    declarations: [PaymentConfirmationComponent]
})

export class PaymentConfirmationModule {}
