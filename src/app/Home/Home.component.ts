//a-component-inline
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home', //selector (ten the, attribute)
    template: `
        <div class="container">
            <app-header-home></app-header-home>
            <div class="row">
                <div class="col-8">
                    <app-navigation></app-navigation>
                </div>
                <div class="col-4">
                    <app-content></app-content>
                </div>
            </div>
            <app-footer></app-footer>
        </div>
    
    `
})

export class HomeComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}