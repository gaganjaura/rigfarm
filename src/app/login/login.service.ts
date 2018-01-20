
import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../service/data.service';
import { UserAuth } from '../model/usermodel';
import { Observable } from 'rxjs/Observable';
// import { AlertService } from '../alert/alert.component.service';
const MODEL_NAME = 'account/authenticate';
declare var swal: any;

@Injectable()
export class LoginService {

    constructor(private service: DataService,private router: Router) {
        service.setModel(MODEL_NAME);
        
    }


    public login(model:UserAuth,route:string) {
        this.service
            .login<any>(model)
            .subscribe(
                data => {
                    if (data) {
                        // store user details and jwt token in local storage to keep user logged in between page refreshes
                        localStorage.setItem('currentUser', JSON.stringify(data.id));
                        this.router.navigate([route]);
                    }                     
                    // this.alertService.openPopupBlockWithType('titldfgbzffffffffffffffffffffffffffde', 'message', 'success');
                },
                error => {
                    // this.alertService.error(error);
                    // this.alertService.openPopupBlockWithType('title', 'message', 'success');
                    // this.loading = false;
                });
        // return user;
    }
    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
    // public updateAccountInfo(id: number, model: User) {
    //     let user = new User();
    //     this.service
    //         .update<any>(id, model)
    //         .subscribe((data: any) => {
    //             if (data) {
    //                 swal({
    //                     type: 'success',
    //                     title: 'Updated Successfully!',
    //                     buttonsStyling: false,
    //                     confirmButtonClass: 'btn btn-success'
    //                 });
    //             }
    //         },
    //         error => () => {
    //             console.log('Error');
    //         });
    // }
}