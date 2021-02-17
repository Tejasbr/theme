import { Component, OnInit } from '@angular/core';
import { enumValues } from 'src/environments/config';
import { NgwWowService } from 'ngx-wow';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor(private wowService: NgwWowService){}
isHide:boolean = false;
  ngOnInit(): void {
   this.wowService.init();
  }



  tableData: any = Object.values(enumValues.tableData);
  title = 'Boottable';

  show(){
      this.isHide=!this.isHide;
  }
}
