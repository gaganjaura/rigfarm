import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MonitorMiningComponent } from './monitor-mining.component';
import { MonitorMiningRoutes } from './monitor-mining.routing';

@NgModule({
    imports: [
        RouterModule.forChild(MonitorMiningRoutes),
        CommonModule,
        FormsModule
    ],
    declarations: [MonitorMiningComponent]
})

export class MonitorMiningModule {}
