import { Component, OnInit } from '@angular/core';
// import { SideService } from './sidebar.service'
import { User } from '../model/user';
import { MyAccountComponent } from '../admin-pages/my-account/my-account.component'
import { MyAccountService } from '../admin-pages/my-account/my-account.service';
declare const $: any;

// Metadata
export interface RouteInfo {
    path: string;
    title: string;
    type: string;
    icontype: string;
    children?: ChildrenItems[];
}

export interface ChildrenItems {
    path: string;
    title: string;
    ab: string;
    type?: string;
}

// Menu Items
export const ROUTES: RouteInfo[] = [{
    path: '/dashboard',
    title: 'Dashboard',
    type: 'link',
    icontype: 'dashboard'
},
{
    path: '/payouts',
    title: 'Payouts',
    type: 'link',
    icontype: 'payment'

},
{
    path: '/my-account',
    title: 'My Account',
    type: 'link',
    icontype: 'account_balance'

},
{
    path: '/my-investment',
    title: 'My Investment',
    type: 'link',
    icontype: 'timeline'

},
{
    path: '/fund-value',
    title: 'Fund Value',
    type: 'link',
    icontype: 'timeline'

},
{
    path: '/buy-hashpower',
    title: 'Buy Hashpower',
    type: 'link',
    icontype: 'class'

},
{
    path: '/monitor-mining',
    title: 'Monitor Mining',
    type: 'link',
    icontype: 'widgets'

}, {
    path: '/pages',
    title: 'Pages',
    type: 'sub',
    icontype: 'image',
    children: [
        { path: 'login', title: 'Login Page', ab: 'LP' },
        { path: 'register', title: 'Register Page', ab: 'RP' },
        { path: 'lock', title: 'Lock Screen Page', ab: 'LSP' }
    ]
}
];
@Component({
    selector: 'app-sidebar-cmp',
    templateUrl: 'sidebar.component.html'
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    public user = new User();


    constructor(private myAccountService: MyAccountService) { }
    isNotMobileMenu() {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };


    ngOnInit() {

        this.myAccountService.SetModel();
        this.myAccountService.getCustomerInfo(JSON.parse(localStorage.getItem('currentUser')));

        this.myAccountService._user.subscribe((data: any) => {
            if (data.id) {
                this.user.firstName = data.first_name;
                this.user.lastName = data.last_name;
            }

        })
        let isWindows = navigator.platform.indexOf('Win') > -1 ? true : false;
        if (isWindows) {
            // if we are on windows OS we activate the perfectScrollbar function
            const $sidebar = $('.sidebar-wrapper');
            $sidebar.perfectScrollbar();
            // if we are on windows OS we activate the perfectScrollbar function
            $('.sidebar .sidebar-wrapper, .main-panel').perfectScrollbar();
            $('html').addClass('perfect-scrollbar-on');
        } else {
            $('html').addClass('perfect-scrollbar-off');
        }
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
}
