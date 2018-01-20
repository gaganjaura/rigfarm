
import { Component, OnInit, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

// import { AuthenticationService } from '../service/authentication.service';
import { DataService } from '../service/data.service';
// import { AlertService } from '../alert/alert.component.service';
import { Register } from '../model/register';
import { RegisterService } from './register.service';
import { fadeInContent } from '@angular/material/typings/select/select-animations';

declare var $: any;
declare var swal: any;


@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    providers: [RegisterService]
})

export class RegisterComponent implements OnInit {
    test: Date = new Date();
    private model: Register = new Register();

    ngOnInit() {
        this.model.terms = false;
    }
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private registerService: RegisterService,
        private element: ElementRef) { }


    register() {
        delete this.model.terms;
        this.registerService.register(this.model, 'login');
    }

    enableRegister = true;    
}
