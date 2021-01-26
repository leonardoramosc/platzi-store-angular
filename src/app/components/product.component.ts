import { Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  OnInit,
  DoCheck,
  OnDestroy,
  SimpleChanges
 } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, DoCheck, OnDestroy {

  @Input() product!: Product;
  @Output() productClicked: EventEmitter<any> = new EventEmitter();

  today = new Date();

  constructor() {
    console.log('1. Constructor');
  }

  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log(changes);
  // }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  ngDoCheck(): void {
    console.log('ngDoCheck');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }

  addCart(): void {
    console.log('Add to cart');
    this.productClicked.emit(this.product.id);
  }
}
