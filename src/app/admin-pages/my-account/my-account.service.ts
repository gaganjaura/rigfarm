
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { DataService } from '../../service/data.service';
import { User } from '../../model/user';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

const MODEL_NAME = 'Account';
declare var swal: any;

@Injectable()
export class MyAccountService {

    public user: Observable<User>
    public _user: BehaviorSubject<User>;
    private dataStore: {
        user: User
    };
    constructor(private service: DataService) {
        this.SetModel();
        this.dataStore = { user: new User() };
        this._user = <BehaviorSubject<User>>new BehaviorSubject({});
        this.user = this._user.asObservable();
    }

    public SetModel() {
        this.service.setModel(MODEL_NAME);
    }

    public getCustomerInfo(id: number) {
        let user = new User();
        this.service
            .getSingle<any>(id)
            .subscribe((data: any) => {
                if (data) {
                    this.dataStore.user = data;
                    this._user.next(Object.assign({}, this.dataStore).user)
                }
            },
            error => () => {
                console.log('Error');
            });
    }

    public updateAccountInfo(id: number, model: User) {
        let user = new User();
        this.service
            .update<any>(id, model)
            .subscribe((data: any) => {
                if (data) {
                    // swal({
                    //     type: 'success',
                    //     title: 'Updated Successfully!',
                    //     buttonsStyling: false,
                    //     confirmButtonClass: 'btn btn-success'
                    // });
                    swal({
                        type: 'success',
                        title: 'Updated Successfully!',
                        buttonsStyling: false,
                        confirmButtonClass: 'btn btn-success'
                    }).then(function () {
                        // Redirect the user
                        window.location.href = "my-account";
                        console.log('The Ok Button was clicked.');
                    });
                }
            },
            error => () => {
                console.log('Error');
            });
    }
}