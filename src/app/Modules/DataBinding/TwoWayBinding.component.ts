import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-two-way',
    template: `
        <hr />
        <h3>Twowaybinding</h3>
        <p>Name: {{name}}</p>
        <div class="form-group">
            <p>Name</p>
            <input class="form-control w-25" [(ngModel)]="name"  />
        </div>
        <hr />
        <h3>Demo product</h3>
        <div class="row">
            <div class="col-4">
                <div class="card w-50">
                    <img src="https://i.pravatar.cc?u={{prod.id}}" alt='...' />
                    <div class="card-body">
                        <p>{{prod.name}}</p>
                        <p>{{prod.price}}</p>
                    </div>
                </div>
            </div>
            <div class="col-6">
                <div class="row">
                    <div class="col-4">
                        <p>id</p>
                        <input class="form-control" [(ngModel)]="prod.id" />
                    </div>
                    <div class="col-4">
                        <p>name</p>
                        <input class="form-control" [(ngModel)]="prod.name"/>
                    </div>
                    <div class="col-4">
                        <p>price</p>
                        <input class="form-control" [(ngModel)]="prod.price"/>
                    </div>
                </div>
            </div>
        </div>
    `
})
export class TwoWayComponent implements OnInit {
    prod:Product = {id:'01',name:'Iphone',price:1000}
    name:string = 'abc';
    constructor() { }
    ngOnInit() { }
}


interface Product {
    id:string,
    name:string,
    price:number
}