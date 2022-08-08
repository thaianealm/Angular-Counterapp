import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  count: number = 0;

  incrementBtn(){
    this.count = this.count + 1;
  }

  decrementBtn(){
    this.count = this.count - 1;
  }

  resetBtn(){
    this.count = 0;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
