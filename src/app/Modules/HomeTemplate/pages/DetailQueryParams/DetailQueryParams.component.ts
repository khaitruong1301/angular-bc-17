import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-detail-query-params',
    template: `<div>
        detail

    </div>`
})

export class DetailQueryParamsComponent implements OnInit {
    constructor(private atvRoute:ActivatedRoute,private title:Title) { }

    ngOnInit() { 
        this.atvRoute.queryParams.subscribe((params) => {
            console.log(params);
            this.title.setTitle(params['biDanh']);
        })

    }
}