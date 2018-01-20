import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var $: any;
declare var swal: any;

@Component({
    selector: 'app-lock',
    templateUrl: './lock.component.html'
})

export class LockComponent implements OnInit {
    test: Date = new Date();
    ngOnInit() {
        setTimeout(function() {
            // after 1000 ms we add the class animated to the login/register card
            $('.card').removeClass('card-hidden');
        }, 700);
    }

    constructor(private router: Router) {
    }

    //To unlock screen
    userPassword:number;
    password = 123456;
    unlock(){
        if(this.password == this.userPassword)
        {
            this.router.navigateByUrl('/dashboard');
        }
        else{
            swal({
                type: 'warning',
                text: 'Wrong password.Try again!',
                buttonsStyling: false,
                confirmButtonClass: 'btn btn-danger'

            });
        }
    }
}
