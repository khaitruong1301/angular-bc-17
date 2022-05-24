//a-component-inline
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-demo-pipe',
    template: `
        <div class="container">
            <h3>Demo pipe</h3>
        </div>
    `
})

export class DemoPipeComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}