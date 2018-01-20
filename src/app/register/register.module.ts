
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MdModule } from '../md/md.module';

import { RegisterComponent } from './register.component';
import { RegisterRoutes } from './register.routing';
// import { AlertService } from '../alert/alert.component.service';
// import { AlertComponent } from '../alert/alert.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(RegisterRoutes),
        FormsModule,
        MdModule
    ],
    declarations: [RegisterComponent]
    // providers:[AlertService]
})

export class RegisterModule {}
