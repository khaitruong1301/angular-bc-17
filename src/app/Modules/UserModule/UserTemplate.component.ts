import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-user-template',
    template: `
        <div class="d-flex">
            <div class="w-50" style="height:100vh">
                <img src="https://picsum.photos/2000" alt="..." class="h-100" />
            </div>
            <div class="out-let w-50" style="min-height:100vh;">
                <router-outlet></router-outlet>
            </div>
        </div>
    `
})

export class UserTemplateComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}