
import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../service/data.service';
import { Register } from '../model/register';
// import { AlertService } from '../alert/alert.component.service';
const MODEL_NAME = 'account';
declare var swal: any;

@Injectable()
export class RegisterService {

    constructor(private service: DataService,private router: Router) {
        service.setModel(MODEL_NAME);
        
    }


    public register(model:Register,route:string) {
        this.service
            .add<any>(model)
            .subscribe(
                data => {
                    if (data ) {
                        // store user details and jwt token in local storage to keep user logged in between page refreshes
                        // localStorage.setItem('currentUser', JSON.stringify(data));
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