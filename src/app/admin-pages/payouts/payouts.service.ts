
import { Injectable } from '@angular/core';

import { DataService } from '../../service/data.service';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { PayOut } from '../../model/payout';

const MODEL_NAME = 'payouts';
declare var swal: any;

@Injectable()
export class PayOutService {

    payouts: Observable<PayOut[]>
    private _payouts: BehaviorSubject<PayOut[]>;
    private dataStore: {
        payouts: PayOut[]
    };
    constructor(private service: DataService) {
        service.setModel(MODEL_NAME);
        this.dataStore = { payouts: [] };
        this._payouts = <BehaviorSubject<PayOut[]>>new BehaviorSubject([]);
        this.payouts = this._payouts.asObservable();
    }


    public getPayoutsInfo(id: number) {
        this.service
            .getSingle<any>(id)
            .subscribe((data: any) => {
                if (data) {
                    this.dataStore.payouts = data;
                    this._payouts.next(Object.assign({}, this.dataStore).payouts)              
                }
            },
            error => () => {
                console.log('Error');
            });
    }
}