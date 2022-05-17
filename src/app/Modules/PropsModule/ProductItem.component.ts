import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

import { Product } from './ProductList.component';

@Component({
    selector: 'app-product-item',
    template: `
        <div class="card">
            <img [src]="product.img" alt="..." />
            <div class="card-body">
                <p>{{product.name}}</p>
                <p>{{product.price}}</p>
                <button (click)="handleClick(product)" class="btn btn-success">View detail</button>
            </div>
        </div>
    `
})

export class ProductItemComponent implements OnInit {
    @Input() product!:Product;
    //Biến output sẽ giúp đưa giá trị từ component này ra bên ngoài nơi sử dụng thẻ 
    @Output() evtViewDetail = new EventEmitter();
    constructor() { }

    ngOnInit() { }
    handleClick(productClick:Product) {
        //output dùng phương thức emit để đưa giá trị ra ngoài
        //Mỗi lần emit dc gọi thì hàm output bên ngoài sẽ kích hoạt
        this.evtViewDetail.emit(productClick);
    } 
}