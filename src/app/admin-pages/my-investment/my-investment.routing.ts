import { Routes } from '@angular/router';

import { MyInvestmentComponent } from './my-investment.component';

export const MyInvestmentRoutes: Routes = [
    {
        path: '',
        children: [{
            path: '',
            component: MyInvestmentComponent
        }]
    }
]