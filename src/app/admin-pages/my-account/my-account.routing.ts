import { Routes } from '@angular/router';

import { MyAccountComponent } from './my-account.component';

export const MyAccountRoutes: Routes = [
    {
        path: '',
        children: [{
            path: '',
            component: MyAccountComponent
        }]
    }
];