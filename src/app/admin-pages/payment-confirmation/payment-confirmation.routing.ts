import { Routes } from '@angular/router';

import { PaymentConfirmationComponent } from './payment-confirmation.component';

export const PaymentConfirmationRoutes: Routes = [
    {
        path: '',
        children: [{
            path: '',
            component: PaymentConfirmationComponent
        }]
    }
]