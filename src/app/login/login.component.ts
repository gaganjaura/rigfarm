import { Component, OnInit, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

// import { AuthenticationService } from '../service/authentication.service';
import { DataService } from '../service/data.service';
// import { AlertService } from '../alert/alert.component.service';
import { UserAuth } from '../model/usermodel';
import { LoginService } from './login.service';

declare var $: any;
declare var swal: any;
const MODEL_NAME = 'account/authenticate';


@Component({
    // moduleId: module.id,
    selector: 'app-login',
    templateUrl: './login.component.html',
    providers: [LoginService]
})

export class LoginComponent implements OnInit {
    test: Date = new Date();
    private model: UserAuth = new UserAuth();
    private toggleButton: any;
    private sidebarVisible: boolean;
    private nativeElement: Node;
    private load: boolean = false;
    // model: any = {};
    loading = false;
    returnUrl: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private loginService: LoginService,
        private element: ElementRef) { }

    ngOnInit() {
        // reset login status
        // this.load=true;
        this.loginService.logout();

        var navbar: HTMLElement = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];

        setTimeout(function () {
            // after 1000 ms we add the class animated to the login/register card
            $('.card').removeClass('card-hidden');
        }, 700);

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }
    sidebarToggle() {
        var toggleButton = this.toggleButton;
        var body = document.getElementsByTagName('body')[0];
        var sidebar = document.getElementsByClassName('navbar-collapse')[0];
        if (this.sidebarVisible == false) {
            setTimeout(function () {
                toggleButton.classList.add('toggled');
            }, 500);
            body.classList.add('nav-open');
            this.sidebarVisible = true;
        } else {
            this.toggleButton.classList.remove('toggled');
            this.sidebarVisible = false;
            body.classList.remove('nav-open');
        }
    }

    login() {
        this.load = true;
        // this.authenticationService.login(this.model)
        //     .subscribe(
        //     data => {
        //         // this.router.navigate([this.returnUrl]);
        //         this.alertService.openPopupBlockWithType('title', 'message', 'success');
        //     },
        //     error => {
        //         // this.alertService.error(error);
        //         this.alertService.openPopupBlockWithType('title', 'message', 'success');
        //         this.loading = false;
        //     });
        this.loginService.login(this.model, this.returnUrl);
    }
}


// import { Component, OnInit, ElementRef } from '@angular/core';
// import { Router } from '@angular/router';

// declare var $: any;
// declare var swal: any;

// @Component({
//     selector: 'app-login',
//     templateUrl: './login.component.html'
// })

// export class LoginComponent implements OnInit {
//     test: Date = new Date();
//     private toggleButton: any;
//     private sidebarVisible: boolean;
//     private nativeElement: Node;

//     constructor(private element: ElementRef, private router: Router) {
//         this.nativeElement = element.nativeElement;
//         this.sidebarVisible = false;
//     }

//     //Login page
//     userEmail:string;
//     email = "deepti.gangwar@gritsa.com";
//     pass = "123456";
//     userLogin(){
//         if(this.userEmail == this.email){
//             this.router.navigateByUrl('/dashboard');
//         }
//         else{
//             swal({
//                 type: 'warning',
//                 text: 'Login failed!',
//                 buttonsStyling: false,
//                 confirmButtonClass: 'btn btn-danger'

//             });
//         }

//     }

//     ngOnInit() {
//         var navbar : HTMLElement = this.element.nativeElement;
//         this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];

//         setTimeout(function() {
//             // after 1000 ms we add the class animated to the login/register card
//             $('.card').removeClass('card-hidden');
//         }, 700);
//     }
//     sidebarToggle() {
//         var toggleButton = this.toggleButton;
//         var body = document.getElementsByTagName('body')[0];
//         var sidebar = document.getElementsByClassName('navbar-collapse')[0];
//         if (this.sidebarVisible == false) {
//             setTimeout(function() {
//                 toggleButton.classList.add('toggled');
//             }, 500);
//             body.classList.add('nav-open');
//             this.sidebarVisible = true;
//         } else {
//             this.toggleButton.classList.remove('toggled');
//             this.sidebarVisible = false;
//             body.classList.remove('nav-open');
//         }
//     }


// }



