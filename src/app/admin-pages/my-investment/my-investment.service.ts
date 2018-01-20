
import { Injectable } from '@angular/core';

import { DataService } from '../../service/data.service';
import { Investments } from '../../model/investment';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

const MODEL_NAME = 'investment';
declare var swal: any;

@Injectable()
export class MyInvestmentService {

    investments: Observable<Investments[]>
    private _investments: BehaviorSubject<Investments[]>;
    private dataStore: {
        investments: Investments[]
    };
    constructor(private service: DataService) {
        service.setModel(MODEL_NAME);
        this.dataStore = { investments: [] };
        this._investments = <BehaviorSubject<Investments[]>>new BehaviorSubject([]);
        this.investments = this._investments.asObservable();
    }


    public getInvestmentInfo(id: number) {
        this.service
            .getSingle<any>(id)
            .subscribe((data: any) => {
                if (data) {
                    this.dataStore.investments = data.investments;
                    this._investments.next(Object.assign({}, this.dataStore).investments)              
                }
            },
            error => () => {
                console.log('Error');
            });
    }
}