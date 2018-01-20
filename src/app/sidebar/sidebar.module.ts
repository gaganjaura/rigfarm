import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar.component';
import { MyAccountService } from '../admin-pages/my-account/my-account.service';
// import { MyAccountService } from '../admin-pages/my-account/my-account.service'

@NgModule({
    imports: [ RouterModule, CommonModule ],
    declarations: [ SidebarComponent ],
    exports: [ SidebarComponent ],
    providers:[MyAccountService]
})

export class SidebarModule {}
