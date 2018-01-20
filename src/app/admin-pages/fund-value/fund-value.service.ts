
import { Injectable } from '@angular/core';

import { DataService } from '../../service/data.service';
import { Fund } from '../../model/fund';
import { Transaction } from '../../model/transaction';
import { Router, ActivatedRoute } from '@angular/router';
import { PayOut } from '../../model/payout'
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

const MODEL_NAME = 'fundvalue';
const TRASACTION_MODEL_NAME = 'transactions';
const MAKE_PAYOUT_MODEL_NAME = 'payouts'
declare var swal: any;

@Injectable()
export class FundValueService {

    transactions: Observable<Transaction[]>
    private _transactions: BehaviorSubject<Transaction[]>;
    private dataStore: {
        transactions: any[]
    };

    constructor(private service: DataService, private router:Router) {
        service.setModel(MODEL_NAME);
        this.dataStore = { transactions: [] };
        this._transactions = <BehaviorSubject<Transaction[]>>new BehaviorSubject([]);
        this.transactions = this._transactions.asObservable();
    }

    public getTransactions(id: number) {

        this.service.setModel(TRASACTION_MODEL_NAME);
        this.service
            .getSingle<any>(id)
            .subscribe((data: any) => {
                if (data) {
                    this.dataStore.transactions = data;
                    this._transactions.next(Object.assign({}, this.dataStore).transactions);
                }
            },
            error => () => {
                console.log('Error');
            });

    }

    public makePayOut(model:PayOut){
        this.service.setModel(MAKE_PAYOUT_MODEL_NAME);
        model.coins_amount=model.coins_conduct*model.ETHValue;
        model.coins_conduct=0-model.coins_conduct;
        delete model.ETHValue;
        this.service
        .add<any>(model)
        .subscribe(
            data => {
                if (data) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    // localStorage.setItem('currentUser', JSON.stringify(data));
                    // this.router.navigate([route]);
                    swal({
                        type: 'success',
                        title: 'Updated Successfully!',
                        buttonsStyling: false,
                        confirmButtonClass: 'btn btn-success'
                    });
                     this.router.navigate(['/payouts']);
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
    public getFundValue(id: number): Fund {
        this.service.setModel(MODEL_NAME);
        let fund = new Fund()
        this.service
            .getSingle<any>(id)
            .subscribe((data: any) => {
                if (data) {
                    fund.coin_balance = data.coin_balance;
                    fund.earned_amount = data.earned_amount;
                    fund.hash_amount = data.hash_amount;
                    fund.total_earned = data.total_earned;
                }
            },
            error => () => {
                console.log('Error');
            });
        return fund;

    }
}