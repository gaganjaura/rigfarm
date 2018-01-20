import { Component, OnInit } from '@angular/core';
import { TableData } from '../../md/md-table/md-table.component';

declare var $: any;
declare var swal: any;

@Component({
    selector: 'app-monitor-mining',
    templateUrl: './monitor-mining.component.html'
})

export class MonitorMiningComponent implements OnInit {
    public tableData1: TableData;
    public tableData2: TableData;
    public tableData3: TableData;
    
  constructor() { }

  ngOnInit() {
    this.tableData1 = {
        headerRow: [ 'Name', 'Country', 'City', 'Salary'],
        dataRows: [
            ['Dakota Rice', 'Niger', 'Oud-Turnhout', '$36,738'],
            ['Minerva Hooper', 'Curaçao', 'Sinaai-Waas', '$23,789'],
            ['Sage Rodriguez', 'Netherlands', 'Baileux', '$56,142'],
            ['Philip Chaney', 'Korea, South', 'Overland Park', '$38,735'],
            ['Doris Greene', 'Malawi', 'Feldkirchen in Kärnten', '$63,542'],
            ['Mason Porter', 'Chile', 'Gloucester', '$78,615']
        ]
     };
     this.tableData2 = {
         headerRow: [ 'ID', 'Name',  'Salary', 'Country', 'City' ],
         dataRows: [
             ['1', 'Dakota Rice', '$36,738', 'Niger', 'Oud-Turnhout' ],
             ['2', 'Minerva Hooper', '$23,789', 'Curaçao', 'Sinaai-Waas'],
             ['3', 'Sage Rodriguez', '$56,142', 'Netherlands', 'Baileux' ],
             ['4', 'Philip Chaney', '$38,735', 'Korea, South', 'Overland Park' ],
             ['5', 'Doris Greene', '$63,542', 'Malawi', 'Feldkirchen in Kärnten', ],
             ['6', 'Mason Porter', '$78,615', 'Chile', 'Gloucester' ]
         ]
      };
      this.tableData3 = {
          headerRow: [ 'MH/s', 'ETH',  'Health', 'Temperature', 'Power', 'Last Mined' ],
          dataRows: [
              ['1', 'Dakota Rice (Success)', '$36,738', '51.38', 'Oud-Turnhout', '6 sec ago' ],
              ['2', 'Minerva Hooper', '$23,789', '25.0', 'Sinaai-Waas', '9 sec ago'],
              ['3', 'Sage Rodriguez (Info)', '$56,142', '45.11', 'Baileux', '4 sec ago' ],
              ['4', 'Philip Chaney', '$38,735', '54.25', 'Overland Park', '13 sec ago' ],
              ['5', 'Doris Greene (Danger)', '$63,542', '14', 'Feldkirchen in Kärnten', '4 sec ago' ],
              ['6', 'Mason Porter', '$78,615', '54', 'Gloucester', '8 sec ago' ],
              ['7', 'Mike Chaney (Warning)', '$38,735', '29.30', 'Bucharest', '12 sec ago' ]
          ]
       };
}
}
