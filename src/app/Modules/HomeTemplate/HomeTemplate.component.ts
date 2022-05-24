import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home-template',
    template: `
        <app-header-home-template></app-header-home-template>
        <router-outlet></router-outlet>
    `
})

export class HomeTemplateComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}