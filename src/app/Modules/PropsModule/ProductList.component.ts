//a-component-inline
import { Component, OnInit, ViewChildren,QueryList } from '@angular/core';
import { ProductItemComponent } from './ProductItem.component';

@Component({
    selector: 'app-product-list',
    template: `
        <div class="container-fuild">
            <h3 class="text-center">Product list</h3>
            <div class="row">
                <div class="col-4" *ngFor="let prod of arrProduct">
                    <app-product-item [product]="prod" (evtViewDetail)="viewDetail($event)" ></app-product-item>
                </div>
            </div>
        </div>
        <hr />
        <div class="form-group row">
            <div class="col-6">
                <p>Chọn sản phẩm</p>
                <select class="form-control" [(ngModel)]="dc.producId">
                    <option *ngFor="let prod of arrProduct" [value]="prod.id">{{prod.name}}</option>
                </select>
            </div>
            <div class="col-6">
                <p>Chọn phần trăm</p>
                <select class="form-control" [(ngModel)]="dc.percent">
                    <option *ngFor="let percent of [10,20,30]" [value]="percent">{{percent}} %</option>
                </select>
            </div>
            <div class="col-6">
                <button class="btn btn-success mt-2" (click)="apDungGiamGia()">Áp dụng</button>
            </div>
        </div>


        <hr />
        <div class="mt-2 row">
            <div class="col-4">
                <h3>Product 1</h3>
                <img class="w-100" [src]="productDetail.img" alt="..." height="300" />
            </div>
            <div class="col-8">
                <h3>Details</h3>
                <table class="table">
                    <thead>
                        <tr>
                            <td>Product name</td>
                            <td>{{productDetail.name}}</td>
                        </tr>
                        <tr>
                            <td>Price</td>
                            <td>{{productDetail.price}}</td>
                        </tr>
                    </thead>
                </table>
            </div>
        </div>
    `
})
export class ProductListComponent implements OnInit {
    dc: Discount = {producId:0,percent:0}
    productDetail:Product ={id:1,name:'Product 1', img:'https://picsum.photos/id/1/200',price:1000}

    arrProduct:Product[] = [
        {id:1,name:'Product 1', img:'https://picsum.photos/id/1/200',price:1000},
        {id:2,name:'Product 2', img:'https://picsum.photos/id/2/200',price:2000},
        {id:3,name:'Product 3', img:'https://picsum.photos/id/3/200',price:3000},
    ];

    @ViewChildren(ProductItemComponent) lstTagProductItem!: QueryList<ProductItemComponent>;
    constructor() { }

    ngOnInit() { }
    // method (param:Product) {
    //     console.log(param);
    //     this.productDetail = param;
    // }
    viewDetail(productDetail:Product) {
        this.productDetail = productDetail;
    }
    apDungGiamGia() {
        console.log(this.dc)
        //Lấy giá trị người dùng chọn
        // this.dc;
        //Duyệt các thẻ để tiến hành thay đổi giá
        this.lstTagProductItem.forEach((tagAppProductItem:ProductItemComponent,index:number) => {
            if(tagAppProductItem.product.id == this.dc.producId){
                tagAppProductItem.product.price -= tagAppProductItem.product.price * this.dc.percent / 100;
                //Gọi luôn sự kiện change detail sản phẩm bên dưới
                tagAppProductItem.handleClick(tagAppProductItem.product);
            }
        })
    }
}

export interface Product {
    id:number,
    name:string,
    img:string,
    price:number
}

export interface Discount {
    producId:number,
    percent: number
}