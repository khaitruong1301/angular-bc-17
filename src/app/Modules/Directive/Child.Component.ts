import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-child',
    template: `
        <div>
            <ng-content select=".header"></ng-content>
            <div class="text-center" style="height: 100px">Content</div>
            <ng-content select=".footer"></ng-content>
        </div>
    `
})

export class ChildComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

    // let className = flag? 'blue' : 'red';
    // <div className={`${className}`}>
    // </div>
}


