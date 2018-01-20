import { Component, OnInit } from '@angular/core';
import { MyInvestmentService } from '../my-investment/my-investment.service';
import { Investments } from '../../model/investment';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'app-my-investment',
    templateUrl: './my-investment.component.html',
    providers: [MyInvestmentService]
})

export class MyInvestmentComponent implements OnInit {

  investments: Observable<Investments[]>;

  constructor(private service: MyInvestmentService) {
  }


  ngOnInit() {
    this.investments = this.service.investments;
    this.service.getInvestmentInfo(JSON.parse(localStorage.getItem('currentUser')));
  }
  getLockingPeriodDifference(orderDateString:string,lockedDateString:string)
  {
    var orderDate=new Date(orderDateString);
    var lockedDate=new Date(lockedDateString);
    return lockedDate.getFullYear()-orderDate.getFullYear();
  }
}
