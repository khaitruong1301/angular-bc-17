//a-component-inline
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { Observable, of } from 'rxjs';
@Component({
    selector: 'app-demo-pipe',
    template: `
        <div class="container" style="margin-bottom: 1000px;min-height: 5000px;">
            <h3>{{title | uppercase}}</h3>
            <h3>{{title | lowercase}}</h3>
            <h3>Tỉ giá Euro/ USD: {{tiGia | percent}}</h3>
            <h3>{{tongTien | number}}</h3>
            <h3>{{tienTaiKhoan | number: '9.2-2'}}</h3>
            <h3>{{convertJson(prod)}}</h3>
            <h3>{{prod | json}}</h3>
            <h3>{{arrString |  slice: 1:3}}</h3>
            <!-- <h3>{{renderDay()}}</h3> -->
            <h3>{{day | date : 'dd/MM/yyyy hh:mm:ss'}}</h3>
            <div>{{ messages.length | i18nPlural: messageMapping }}</div>

            <div class="row">
                <div class="col-3" *ngFor="let item of resultObProd | async">
                    <div class="card">
                        <img [src]="'https://picsum.photos/id/'+item.id+'/200/200/' " />
                        <div class="card-body">
                            <p>{{item.name}}</p>
                            <p>{{item.price}}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="mt-2 bg-dark text-white p-5" >
                <div>Compare object</div>
                <div>Object1: {{prod1 | json}}</div>
                <div>Object2: {{prod2 | json}}</div>
                <div *ngIf="(prod1 | compareObject : prod2)">
                    Giống nhau
                </div>
                <div *ngIf="!(prod1 | compareObject : prod2)">
                    Khác nhau
                </div>
            </div>
        </div>
    `
})

export class DemoPipeComponent implements OnInit {
    messages: any[] = ['Message 1', 'Message 2'];
    messageMapping:
        { [k: string]: string } = { '=0': 'No messages.', '=1': 'One message.', 'other': '# messages.' };

    title: string = 'Hello Cybersoft';
    tiGia: number = 1 - (23.1 / 24.5);
    tongTien: number = 15000000.1;
    tienTaiKhoan: number = 10;
    prod: Product = { id: 1, name: 'iphone', price: 1000 };
    // arrProd: Product[] = [];
    arrString: string[] = ['pt1', 'pt2', 'pt3', 'pt4', 'pt5'];
    day: Date = new Date();
    resultObProd!: Observable<Product[]>;
    prod1:Product = { id: 1, name: 'iphone', price: 1000 };
    prod2:Product = { id: 1, name: 'iphone', price: 1000 };

    renderDay() {

        return moment(this.day).format('DD/MM/YYYY hh:mm:ss');
    }
    convertJson(prod: Product) {

        return JSON.stringify(prod);
    }
    ngOnInit() {
        let arrProd: Product[] = [{ id: 1, name: 'iphone', price: 1000 }, { id: 2, name: 'iphone2', price: 2000 }, { id: 3, name: 'iphone3', price: 3000 }, { id: 4, name: 'iphone4', price: 4000 }];
        //Biến mảng thành dữ liệu api trả về
        this.resultObProd = of(arrProd);

        // ob.subscribe({
        //     next: result => {
        //         console.log('result', result)
        //         this.arrProd = result;
        //     }, error: error => {
        //         console.log(error)
        //     }
        // })
    }
   
    constructor() { }

    
}

interface Product {
    id: string | number,
    name: string,
    price: number
}