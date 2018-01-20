import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';

import { TableData } from '../../md/md-table/md-table.component';
import { Observable } from 'rxjs/Observable';
import { PayOut } from '../../model/payout';
import { PayOutService } from './payouts.service'

@Component({
  selector: 'app-payouts',
  templateUrl: './payouts.component.html',
  providers: [PayOutService]
})
export class PayoutsComponent implements OnInit {
  public tableData: TableData;

  payouts: Observable<PayOut[]>;
  
  totalOfETHAmount:number=0;
  totalAmountEarned:number=0;
    constructor(private service: PayOutService) {
    }

  ngOnInit() {
    // this.payouts = this.service.payouts;
    this.service.payouts.subscribe((data: any) => {
      if (data.length>0) {
        this.payouts=data;
        data.filter((item:any)=>{
          this.totalOfETHAmount=this.totalOfETHAmount+item.coins_conduct;
          this.totalAmountEarned=this.totalAmountEarned+item.coins_amount;
        }
      );
        // console.log(data);
          // this.dataStore.payouts = data;
          // this._payouts.next(Object.assign({}, this.dataStore).payouts)              
      }
  },
  error => () => {
      console.log('Error');
  });
    this.service.getPayoutsInfo(JSON.parse(localStorage.getItem('currentUser')));
    this.tableData = {
      headerRow: [ 'Date', 'Amount in ETH', 'Amount in USD'],
      dataRows: [
        ['1', '08/15/2017', '25.523691', '$7,657.11'],
        ['2', '09/15/2017', '18.345126', '$5,503.54']
      ]
    };
    /* ----------==========     ETH Payout Chart initialization    ==========---------- */

    var dataEthPayoutsChart = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      series: [
        [0, 0, 0, 0, 0, 0, 0, 25.523691, 18.345126, 0, 0, 0]
      ]
    };

    var optionsEthPayoutsChart = {
      axisX: {
        showGrid: false
      },
      low: 0,
      high: 50,
      chartPadding: { top: 0, right: 5, bottom: 0, left: 0 }
    };

    var responsiveOptions: any[] = [
      ['screen and (max-width: 640px)', {
        seriesBarDistance: 5,
        axisX: {
          labelInterpolationFnc: function (value) {
            return value[0];
          }
        }
      }]
    ];

    var ethPayoutsChart = new Chartist.Bar('#ethPayoutsChart', dataEthPayoutsChart, optionsEthPayoutsChart, responsiveOptions);

    // Start animation for the ETH Payout Chart
    this.startAnimationForBarChart(ethPayoutsChart);

    /* ----------==========     USD Payout Chart initialization    ==========---------- */

    var dataUsdPayoutsChart = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      series: [
        [0, 0, 0, 0, 0, 0, 0, 7657.11, 5503.54, 0, 0, 0]

      ]
    };

    var optionsUsdPayoutsChart = {
      axisX: {
        showGrid: false
      },
      low: 0,
      high: 10000,
      chartPadding: { top: 0, right: 5, bottom: 0, left: 0 }
    };

    var usdPayoutsChart = new Chartist.Bar('#usdPayoutsChart', dataUsdPayoutsChart, optionsUsdPayoutsChart, responsiveOptions);

    // Start animation for the ETH Payout Chart
    this.startAnimationForBarChart(usdPayoutsChart);
  }

  startAnimationForBarChart(chart) {
    let seq2: any, delays2: any, durations2: any;

    seq2 = 0;
    delays2 = 80;
    durations2 = 500;
    chart.on('draw', function (data) {
      if (data.type === 'bar') {
        seq2++;
        data.element.animate({
          opacity: {
            begin: seq2 * delays2,
            dur: durations2,
            from: 0,
            to: 1,
            easing: 'ease'
          }
        });
      }
    });

    seq2 = 0;
  };
}
