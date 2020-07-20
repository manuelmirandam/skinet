import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/shared/models/product';
import { ShopService } from '../shop.service';

@Component({
    selector: 'app-product-details',
    templateUrl: './product-details.component.html',
    styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
    product: IProduct;
    productId: number;

    constructor(private shopService: ShopService, private activatedRoute: ActivatedRoute) {
        this.productId = +this.activatedRoute.snapshot.paramMap.get('id');
    }

    ngOnInit(): void {
        this.loadProduct();
    }

    loadProduct() {
      this.shopService.getProduct(this.productId).subscribe(product => {
          this.product = product;
      }, error => {
          console.log(error);
      });
  }
}
