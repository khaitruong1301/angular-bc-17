import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
    selector: 'app-child',
    template: `<div>
        <h3>Child</h3>
        <p>oldPrice: {{oldPrice}} - newPrice: {{newPrice}} </p>
        <p>{{price}}</p>
    </div>`
})

export class ChildComponent implements OnInit,OnChanges {

    oldPrice!:number;
    newPrice!:number;
    @Input() price!: number;
    constructor() { 
        console.log('constructor child');
    }
    ngOnChanges(changes: SimpleChanges): void {
        console.log('onchange child',changes);
        this.oldPrice = changes['price'].previousValue;
        this.newPrice = changes['price'].currentValue;
        
    }

    ngOnInit() {
        console.log('on init child');

     }
}
interface Product {
    id:string | number,
    name:string,
    price:number,
}