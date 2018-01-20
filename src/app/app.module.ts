import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { AuthGuard } from './app.guard';

import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule } from './shared/navbar/navbar.module';
import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';
import { DataService } from '../app/service/data.service';
// import { AuthenticationService } from '../app/service/authentication.service'

import { AppRoutes } from './app.routing';
import { Configuration } from './app.constants';
// import { AlertService } from './alert/alert.component.service';
// import { AlertComponent } from './alert/alert.component';


@NgModule({
    imports: [
        CommonModule,
        BrowserAnimationsModule,
        FormsModule,
        RouterModule.forRoot(AppRoutes),
        HttpClientModule,
        SidebarModule,
        NavbarModule,
        FooterModule
    ],
    declarations: [
        AppComponent,
        AdminLayoutComponent,
        AuthLayoutComponent
        // AlertComponent
    ],
    bootstrap: [AppComponent],
    providers: [
        Configuration,
        DataService,
        // AlertService,
        // AuthenticationService,
        AuthGuard
    ]
})
export class AppModule { }
