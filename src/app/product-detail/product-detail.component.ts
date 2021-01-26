import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ProductsService } from '../products.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) { }

  product!: Product | undefined;

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const product = this.productsService.getProduct(params.id);
      this.product = product;
    });
  }

}
