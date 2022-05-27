import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
    selector: 'app-lifecycle',
    template: `
        <div class="container">
            <h3>Life cycle</h3>
            <app-child [price] ="prod.price"></app-child>
            <p>
                {{prod.name}} - {{prod.price}}
            </p>
            <button (click)="changePrice()">Change price</button>
        </div>
    `
})

export class LifecycleComponent implements OnInit,OnChanges,OnDestroy {
    prod : Product = {id:1,name:'Iphone',price:1000};
    timeout:any;

    constructor() { 
        console.log('constructor!');
    }
    changePrice() {
        this.prod.price = (Math.floor( Math.random() * 10) + 1)*1000 ;
        this.prod = {...this.prod};
    }
    ngOnChanges(changes: SimpleChanges): void {
        //Có input thay đổi thì mới chạy hàm này (nhận về props trước khi thay đổi và sau khi thay đổi )
        console.log('onchange',changes)
    }

    ngOnInit() { 
        console.log('oninit');
        this.timeout = setInterval(() => {
            console.log(123);
        },1000)
    }

    ngOnDestroy(): void {
        console.log('nhưng cái chạy ngầm sẽ clear tại đây !');

        if(this.timeout) {
            clearInterval(this.timeout);
        }
       
    }
}

interface Product {
    id:string | number,
    name:string,
    price:number,
}