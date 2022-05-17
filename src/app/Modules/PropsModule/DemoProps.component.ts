//a-component-inline
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Product, ProductListComponent } from './ProductList.component';

@Component({
    selector: 'app-demo-props',
    template: `
        <div class="container" style="margin-bottom: 500px;">
            <p>DemoProps</p>
            <app-product-list #tagProductList></app-product-list>
            <h3 class="mt-5 text-center">Add product</h3>
            <div class="form-group">
                <p>id</p>
                <input class="form-control" id="id" #id [(ngModel)]="productInput.id"/>
            </div>
            <div class="form-group">
                <p>name</p>
                <input class="form-control" id="name" [(ngModel)]="productInput.name"/>
            </div>
            <div class="form-group">
                <p>price</p>
                <input type="number" class="form-control" id="price" [(ngModel)]="productInput.price" />
            </div>
            <div class="form-group">
              <button class="btn btn-success" (click)="addProduct()">Add product</button>
            </div>
            <hr />
            <app-bt-dat-ghe></app-bt-dat-ghe>
        </div>
    `
})

export class DemoPropsComponent implements OnInit {
    productInput: Product = { id: 0, name: '', price: 0, img: '' }
    constructor() { }

    ngOnInit() { }
    @ViewChild('id') tagId!: ElementRef; // Thường ít dùng trong trường hợp dom đến 1 thẻ bình thường (Thương dùng để dom đối tượng thẻ component)
    @ViewChild('tagProductList') tagAppProdList!: ProductListComponent;
    addProduct() {
        //Lấy thông tin người dùng nhập từ giao diện thông qua 2waybinding
        this.productInput.img = `https://picsum.photos/id/${this.productInput.id}/200`;
        //Clone các giá trị đó ra object mới
        let newProduct: Product = { ...this.productInput };
        //Sử dụng ViewChild của thẻ <app-product-list></app-product-list> để thêm vào cho thuộc tính arrInput của thẻ
        this.tagAppProdList.arrProduct.push(newProduct);

        console.log(this.productInput)
    }
}


