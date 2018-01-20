import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MdOptionSelectionChange } from '@angular/material';
import { BuyHashPowerService } from "../buy-hashpower/buy-haspower.service";
import { Order } from "../../model/order";

declare var $: any;
declare var swal: any;

@Component({
    selector: 'app-buy-hashpower',
    templateUrl: './buy-hashpower.component.html',
    styleUrls: ['./buy-haspower.css'],
    providers: [BuyHashPowerService]
})

export class BuyHashpowerComponent {
    selectedValue: string;
    currentCity: string[];
    hashValue: number;
    //For current date
    date = new Date();
    private order: Order = new Order();

    //json for cryptocurrency
    cryptocurrency = [{ name: 'ETH-Etherium', value: 'eth' }];

    crypto: any;
    onCryptoCurrencyChange(event: MdOptionSelectionChange, state: any) {
        if (event.source.selected) {
            this.crypto = state;
        }
    }

    //Json for Locking Period
    locks = [
        { name: '2 Years', value: 2 },
        { name: '3 Years', value: 3 },
        { name: '4 Years', value: 4 },
        { name: '5 Years', value: 5 }
    ];

    enable = true;
    lockingPeriod: any;
    paymentType: any = "CreditCard";
    onLockingPeriodChange(event: MdOptionSelectionChange, state: any) {
        if (event.source.selected) {
            this.lockingPeriod = state;
            this.enable = false;
        }
    }

    // lock_value:any;
    // lock_name:any;
    // setValue(list:any)
    // {
    //     this.lock_value = list.value;
    //     this.lock_name = list.name;
    // }
    promoCode:string;
    // promoCode = [
    //     { code: 'Promo1', discount: '10' },
    //     { code: 'Promo2', discount: '20' },
    //     { code: 'Promo3', discount: '30' },
    //     { code: 'Promo4', discount: '40' },
    //     { code: 'Promo5', discount: '50' },
    // ];

    coupon: string = "";
    amount = 1599.00;
    dis: number;
    finalDiscount: any;
    isDiscount:boolean=false;
    total: any;
    hideTotal = true;
    tot = false;

    removePromoCode()
    {
        this.order.discountPercent = "";
        this.order.discount ="";
        this.order.final_amount = this.order.order_amount;
        this.order.promo_code="";

    }
    validate() {
       
        this.order=this.service.checkPromoCode(this.order);       
    }

    selectTheme = 'primary';
    paymentOptions = [
        { value: 'credit', viewValue: 'Credit Card' },
        { value: 'debit', viewValue: 'Debit Card' },
        { value: 'bitcoin', viewValue: 'Bitcoin' },
        { value: 'imps', viewValue: 'IMPS' }
    ];

    constructor(private router: Router, private service: BuyHashPowerService) { }

    // continue(){
    //     this.router.navigateByUrl('/payment-confirmation');
    // }

    //To show Payment Confirmation on Buy HashPower page
    hideContinue = true;
    continue = false;
    continuePayment() {
        this.order.order_amount=this.order.hash_amount * 13.33;
        this.order.final_amount=this.order.order_amount;
        this.continue = !this.continue;
        this.hideContinue = !this.hideContinue;
    }

    //For "View Agreement" Popup
    showSwal(type) {
        if (type === 'title-and-text') {
            swal({
                title: 'Mining Capacity Share Agreement',
                html:
                    '<div style="overflow-y:scroll;height:480px;">' +
                    '<p style="text-align:justify;">' +
                    'I (the "Customer") agree with the following terms and conditions for the provision of mining services (the "Agreement") is made as of today between: Genesis Mining Iceland ehf., Borgartuni 27, 105 Reykjavik, Iceland, acting as agent for Genesis Mining LTD, Chinachem Century Tower, 31/F,178 Gloucester Road, Wanchai, Hong Kong, ("Service Provider"); and me, the Customer. Pursuant to the terms of this Agreement, the Service Provider will rent out to the Customer certain hardware in order to provide the services described herein. 1. Services The Service Provider agrees to provide to the Customer with the output of its mining capacity (the "Services") subject to the following terms: Contract type: Ethereum Mining Mining Algorithm: Ethash Start Date: 14.09.2017 Contract Term: 2 years Mining Power: 55 MH/s Mining Algorithm The Mining Algorithm is the type of algorithm that can be processed on the rented hardware. As of Start Date Ethash can be used to mine the Ethereum cryptocurrency. Mining Power The Mining Power is the number of hashes of the Mining Algorithm that the rented hardware can process per second. For Ethash the Mining Power also depends on a variable factor, the DAG size, thus the number of performed hashes may vary over time. “Mining Output” ("Coins") A given cryptocurrency that can be mined with the above Mining Algorithm and offered by the Service Provider. Where applicable, the mined coins can be converted to, e.g., Bitcoin, Ethereum or other cryptocurrencies. Quality of Service The Customer acknowledges that the Service will be rendered on a best effort basis. The availability of the Mining Power and, accordingly, the output of Coins may vary up to a maximum of 5%. In addition, the Service Provider ensures that it maintains all facilities and the relevant supplies in good working order, in order to avoid any of the aforementioned variance with the diligence that it applies in its own dealings (diligentia quam in suis). Mining Payouts The Customer will receive Coins mined in accordance with the above Mining Power and in accordance with applicable Maintenance Fee (as per section 2b). If (i) the expected transaction fee (needed to ensure that the network will process the transaction) divided by the value of the payout is greater than 5% or (ii) the payout is below an equivalent value of USD 1.00 the Service Provider has the option to accumulate the payouts in the Customer’s account, until the payout value is sufficiently high to meet the requirements (i) and (ii). 2. Remuneration As a consideration for the Services the Customer agrees to pay to the Service Provider an amount of: a. 0.02900 USD per kH/s one-off upfront payment b. USD 0 per MH/s and day deducted on a daily basis from the generated Coins, called the “Maintenance Fee” if, on any day, Coins generated on that day do not suffice to pay the Maintenance Fee, the Service Provider may use Coins generated on any day thereafter for such payment. The provision of section 2b only applies to the extent that the Contract Term is an “open-ended” contract. 3. Limitation of Liability Without detriment to the Service Providers obligation to render the Services on a best effort basis, any liability of the Service Provider hereunder and/or in connection with this Agreement shall be limited to willful misconduct and gross negligence. Further, the Service Provider shall not be liable for any damages incurred by the Customer as a result of force majeure, or any other material event which shall include, inter-alia, any disruption or breakdown of a cryptocurrency market, or a change of the proof-of-work mining algorithm / change to a different consensus system (such as “proof-of-stake”). The Service Provider will try on a best effort basis to make best possible use of the Customer rented hardware to maximize the value of Coins. 4. Term This Agreement is entered into for the term as described in Services and cannot be terminated early or canceled otherwise. If the Contract Term is an “open-ended contract”, the Service Provider may terminate this Agreement with immediate effect if the' +
                    '</p>' +
                    '</div>',
                width: 717,
                buttonsStyling: false,
                animation: false,
                confirmButtonClass: 'btn btn-info'
            });

        }
    }

    //To disable "Confirm Order" Button
    disable = true;
    check() {
        if (this.disable == true) {
            this.disable = false;
        }
        else {
            this.disable = true;
        }
    }

    placeOrder() {
        this.order.user_id = JSON.parse(localStorage.getItem('currentUser'));
        var orderDate = new Date();
        this.order.order_date = orderDate;
        orderDate.setFullYear(orderDate.getFullYear() + this.order.locked_period);
        this.order.locked_period=orderDate;        
        this.order.locked_period=
        this.order.hash_amount=this.order.hash_amount*1000000;
        this.order.payment_type = this.paymentType;        
        delete this.order.currencyType;
        this.service.placeOrder(this.order);
    }
}
