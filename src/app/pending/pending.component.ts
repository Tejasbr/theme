import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgwWowService } from 'ngx-wow';
import { mediDetails } from 'src/environments/medicine';

@Component({
  selector: 'app-pending',
  templateUrl: './pending.component.html',
  styleUrls: ['./pending.component.scss']
})
export class PendingComponent implements OnInit {
  state: any;
  orders: any;
  config: any;
  OrdersByStatus: any;
  orderSubscription: any;
  patientData: any;
  isHide:boolean = false;
  tableData: any = Object.values(mediDetails.tableData);
  groups: any;

  constructor(
    public activatedRoute: ActivatedRoute,
    public router: Router,  
    private wowService: NgwWowService
  ) {
    const navigation = this.router.getCurrentNavigation();
    // const state = navigation.extras.state as {
    //   transId: string,
    //   workQueue: boolean,
    //   services: number,
    //   code: string
    // };
    // console.log(state);

  }

  ngOnInit(): void {
  }

  addItem(index:any) {
    
    this.tableData.splice(index);
  }
  addItem1(i:any) {
    
    this.tableData.push(i);
  }
}
