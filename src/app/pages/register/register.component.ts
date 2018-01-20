import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-register-cmp',
    templateUrl: './register.component.html'
})

export class RegisterComponent implements OnInit {
    test: Date = new Date();
    ngOnInit() {
    }
    constructor(private router: Router) {
    }

    
    register(){
        this.router.navigateByUrl('/dashboard');
    }

    enableRegister = true;
    agreeToTerms() {
        if (this.enableRegister == true) {
            this.enableRegister = false;
        }
        else {
            this.enableRegister = true;
        }
    }
}
