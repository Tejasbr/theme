import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rejected',
  templateUrl: './rejected.component.html',
  styleUrls: ['./rejected.component.scss']
})
export class RejectedComponent implements OnInit {

  storedTheme: any= localStorage.getItem('theme-color');
  constructor() { }

  ngOnInit(): void {
  }

  setTheme(theme: any){
    localStorage.setItem('theme-color', theme);
    this.storedTheme = localStorage.getItem('theme-color');
  }
}
