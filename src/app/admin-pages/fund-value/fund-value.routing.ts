import { Routes } from '@angular/router';

import { FundValueComponent } from './fund-value.component';

export const FundValueRoutes: Routes = [
    {
        path: '',
        children: [{
            path: '',
            component: FundValueComponent
        }]
    }
]