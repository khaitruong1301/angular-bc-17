//a-component-inline
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-detail',
    template: `
        <div>
            Detail page: <span class="font-weight-bold">
            {{id}}
            </span> 

            <button class="mt-2 ml-2 btn btn-success" [routerLink]="['/detail',9999]">Link id 9999</button>
            <button class="mt-2 ml-2 btn btn-success" [routerLink]="['/detail',8888]">Link id 8888</button>
            
        </div>
    `
})

export class DetailComponent implements OnInit {
    id:number = 0;
    //Đối tượng ativatedRoute
    constructor(private atvRoute:ActivatedRoute) { }

    ngOnInit() { 
        // //snapshot lấy param từ trang khác get qua 
        // this.id = this.atvRoute.snapshot.params['id'];
        this.atvRoute.params.subscribe((params) => {
            // this.id = params['id'];
            console.log(params)
        })

    }
}