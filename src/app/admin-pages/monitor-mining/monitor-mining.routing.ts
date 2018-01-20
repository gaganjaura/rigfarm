import { Routes } from '@angular/router';

import { MonitorMiningComponent } from './monitor-mining.component';

export const MonitorMiningRoutes: Routes = [
    {
        path: '',
        children: [{
            path: '',
            component: MonitorMiningComponent
        }]
    }
]