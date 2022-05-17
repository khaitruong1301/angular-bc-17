//a-component-inline
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-content', //b1
    template: `<div>
        Content
    </div>`
})

export class ContentHomeComponent implements OnInit { //b3 đổi tên component
    constructor() { }

    ngOnInit() { }
}