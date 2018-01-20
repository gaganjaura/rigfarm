import { Routes } from '@angular/router';

import { BuyHashpowerComponent } from './buy-hashpower.component';

export const BuyHashpowerRoutes: Routes = [
    {
        path: '',
        children: [{
            path: '',
            component: BuyHashpowerComponent
        }]
    }
]