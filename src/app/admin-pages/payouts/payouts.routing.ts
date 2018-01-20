import { Routes } from '@angular/router';

import { PayoutsComponent } from './payouts.component';

export const PayoutsRoutes: Routes = [
    {

      path: '',
      children: [ {
        path: '',
        component: PayoutsComponent
    }]
}
];
