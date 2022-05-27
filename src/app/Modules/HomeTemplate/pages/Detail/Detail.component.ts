//a-component-inline
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

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

export class DetailComponent implements OnInit,OnDestroy {
    id:number = 0;

    subParam!: Subscription;

    //Đối tượng ativatedRoute
    constructor(private atvRoute:ActivatedRoute) { }

    ngOnInit() { 
        // //snapshot lấy param từ trang khác get qua 
        // this.id = this.atvRoute.snapshot.params['id'];
      this.subParam =   this.atvRoute.params.subscribe((params) => {
            // this.id = params['id'];
            console.log(params);
        })

    }
    ngOnDestroy(): void {
        if(this.subParam) {
            this.subParam.unsubscribe();
        }
    }
}