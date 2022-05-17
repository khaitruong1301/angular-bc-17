//a-component-inline
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-footer',
    template: `
        <div>
            Footer
        </div>
    `
})

export class FooterHomeComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}