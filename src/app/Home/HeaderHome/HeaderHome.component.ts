import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-header-home',
    template: `<div class="header-home">
        Header
    </div>`,
    styles:[
        `
            .header-home {
                background:red;
                text-align:center;
                padding:15px;
                color:#fff;
            }
        `
    ]
})

export class HeaderHomeComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}