import { Component, OnInit, Inject } from '@angular/core';
import { FundValueService } from "../fund-value/fund-value.service"
import { Fund } from "../../model/fund";
import { Transaction } from '../../model/transaction';
import { PayOut } from '../../model/payout';
import { Observable } from 'rxjs/Observable';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';
import { resetFakeAsyncZone } from '@angular/core/testing';

declare var $: any;
declare var swal: any;


@Component({
    selector: 'app-fund-value',
    templateUrl: './fund-value.component.html',
    providers: [FundValueService]
})

export class FundValueComponent implements OnInit {
    transactions: Observable<Transaction[]>;
    private fund: Fund = new Fund();
    hideDetails = true;
    hash_amount: number = 0;
    payout: PayOut = new PayOut();
    animal: string;
    name: string;

    detailsButtonText: string = "View Details";
    transactionDetails = false;
    viewDetails(transactionDetails: boolean) {
        if (!transactionDetails) {
            this.detailsButtonText = "Hide Details";
            this.transactionDetails = true;
        }
        else {
            this.detailsButtonText = "View Details";
            this.transactionDetails = false;
        }
        this.transactions = this.service.transactions;
        this.service.getTransactions(JSON.parse(localStorage.getItem('currentUser')));
    }



    constructor(private service: FundValueService, public dialog: MdDialog) { }

    ngOnInit() {
        
        this.fund = this.service.getFundValue(JSON.parse(localStorage.getItem('currentUser')));
    }
    openDialog(): void {
        this.payout.user_id = JSON.parse(localStorage.getItem('currentUser'));
        this.payout.date = new Date();
        this.payout.ETHValue = 1500;
        this.payout.coins_conduct = 0;
        let dialogRef = this.dialog.open(CashOutDialog, {
            width: '550px',
            data: { payOut: this.payout }
        });

        dialogRef.afterClosed().subscribe(result => {           
            this.service.makePayOut(result);
        });
    }
}


@Component({
    selector: 'cashOut',
    templateUrl: 'cashOut.html',
    styleUrls: ['./dialog.css']
})
export class CashOutDialog {

    // private cashout:Cashout=new Cashout();
    // ETHValue:number=1500;

    constructor(
        public dialogRef: MdDialogRef<CashOutDialog>,
        @Inject(MD_DIALOG_DATA) public data: any) {

        //   this.cashout.cashCoins=0;
        //   this.cashout.ETHValue=1500;
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

}
