import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { EqualValidator } from './my-account.directive';
import { MyAccountComponent } from './my-account.component';
import { MyAccountRoutes } from './my-account.routing';

@NgModule({
    imports: [
        RouterModule.forChild(MyAccountRoutes),
        CommonModule,
        FormsModule
    ],
    declarations: [MyAccountComponent,EqualValidator]
})

export class MyAccountModule {}