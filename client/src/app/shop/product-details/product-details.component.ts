import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/shared/models/product';
import { ShopService } from '../shop.service';
import { BreadcrumbService } from 'xng-breadcrumb';
import { BasketService } from '../../basket/basket.service';

@Component({
    selector: 'app-product-details',
    templateUrl: './product-details.component.html',
    styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
    product: IProduct;
    productId: number;
    quantity = 1;

    constructor(
        private shopService: ShopService,
        private activatedRoute: ActivatedRoute,
        private bcService: BreadcrumbService,
        private basketService: BasketService
    ) {
        this.productId = +this.activatedRoute.snapshot.paramMap.get('id');
        this.bcService.set('@productDetails', '');
    }

    ngOnInit(): void {
        this.loadProduct();
    }

    addItemToBasket() {
        this.basketService.addItemToBasket(this.product, this.quantity);
    }

    incrementQuantity() {
        this.quantity++;
    }

    decrementQuantity() {
        if (this.quantity > 1) {
            this.quantity--;
        }
    }

    loadProduct() {
      this.shopService.getProduct(this.productId).subscribe(product => {
          this.product = product;
          this.bcService.set('@productDetails', product.name);
      }, error => {
          console.log(error);
      });
  }
}
