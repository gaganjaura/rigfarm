import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';
import { AuthGuard } from './app.guard'

export const AppRoutes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
    },
    {
        path: '',
        component: AdminLayoutComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: '',
                loadChildren: './dashboard/dashboard.module#DashboardModule'
            },
            {
                path: 'payouts',
                loadChildren: './admin-pages/payouts/payouts.module#PayoutsModule'
            },
            {
                path: 'my-account',
                loadChildren: './admin-pages/my-account/my-account.module#MyAccountModule'
            },
            {
                path: 'my-investment',
                loadChildren: './admin-pages/my-investment/my-investment.module#MyInvestmentModule'
            },
            {
                path: 'buy-hashpower',
                loadChildren: './admin-pages/buy-hashpower/buy-hashpower.module#BuyHashpowerModule'
            },
            {
                path: 'payment-confirmation',
                loadChildren: './admin-pages/payment-confirmation/payment-confirmation.module#PaymentConfirmationModule'
            },
            {
                path: 'fund-value',
                loadChildren: './admin-pages/fund-value/fund-value.module#FundValueModule'
            },
            {
                path: 'monitor-mining',
                loadChildren: './admin-pages/monitor-mining/monitor-mining.module#MonitorMiningModule'
            }
        ]
    },
    {
        path: 'login',
        component: AuthLayoutComponent,
        children: [{
            path: '',
            loadChildren: './login/login.module#LoginModule'
        }
        ]
    },
    {
        path: 'register',
        component: AuthLayoutComponent,
        children: [{
            path: '',
            loadChildren: './register/register.module#RegisterModule'
        }
        ]
    },
    { path: '**', redirectTo: '' }
];
