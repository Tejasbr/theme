import { Component, OnInit } from '@angular/core';
import { enumValues } from 'src/environments/config';
import * as $ from 'jquery';


@Component({
  selector: 'app-accepted',
  templateUrl: './accepted.component.html',
  styleUrls: ['./accepted.component.scss']
})
export class AcceptedComponent implements OnInit {
  tableData: any = Object.values(enumValues.tableData);
  constructor() { }

  ngOnInit(): void {
    this.getStatus();
  }

  getStatus(){
    this.tableData.forEach((e:any) => {
      if(e.orderStatus === 'Regular'){
        
        classes: "e.orderStatus" ?  "subscriptionClass" : "RegularClass";
         console.log(e); 
      }
    });
  }
}
