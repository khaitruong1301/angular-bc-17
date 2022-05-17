import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-data-binding',
    template: `
        <div class="container" style="margin-bottom: 500px;">
            <h3>Databinding</h3>
            <app-one-way></app-one-way>
            <app-two-way></app-two-way>
        </div>
    `
})

export class DatabindingComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}