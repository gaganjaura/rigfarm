
import { Injectable } from '@angular/core';

import { DataService } from '../../service/data.service';
import { Order } from '../../model/order';

const MODEL_NAME = 'order';
const PROMO_CODE_MODEL = 'promocode';
declare var swal: any;

@Injectable()
export class BuyHashPowerService {

    constructor(private service: DataService) {
        service.setModel(MODEL_NAME);
    }

    public checkPromoCode(order: Order): any {
        this.service.setModel(PROMO_CODE_MODEL);
        this.service.getCode<any>(order.promo_code).subscribe((data: any) => {
            if (data) {
                order.discountPercent = data.discount_percent;
                order.discount = (data.discount_percent / 100) * order.order_amount;
                order.final_amount = (order.order_amount - order.discount);
            }
            else {
                order.discountPercent = "";
                order.discount ="";
                order.final_amount = order.order_amount;
                swal({
                    title: 'Please Enter a Valid Promo Code!',
                    buttonsStyling: false,
                    confirmButtonClass: 'btn btn-danger'
                });
            }
        },
            error => () => {
                console.log('Error');
            });
        return order;
    }

    public placeOrder(model: Order) {
        this.service.setModel(MODEL_NAME);
        this.service
            .add<any>(model)
            .subscribe((data: any) => {
                if (data) {
                    swal({
                        type: 'success',
                        title: 'Created Successfully!',
                        buttonsStyling: false,
                        confirmButtonClass: 'btn btn-success'
                        }).then(function() {
                        // Redirect the user
                        window.location.href = "my-investment";
                        console.log('The Ok Button was clicked.');
                        });
                }
            },
            error => () => {
                console.log('Error');
            });

    }
}