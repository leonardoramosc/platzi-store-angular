import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  constructor() { }

  title = 'platzi-store';
  items = ['leonardo', 'barara', 'ramos'];

  power = 10;

  addItem(): void {
    this.items.push('nuevo item');
  }

  deleteItem(index: number): void {
    this.items.splice(index, 1);
  }

  ngOnInit(): void {
  }

}
