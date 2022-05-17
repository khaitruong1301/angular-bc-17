//a-component-inline
import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { Ghe } from './BaiTapDatGhe.component';

@Component({
    selector: 'app-ghe',
    template: `
        <button (click)="datGhe()" [disabled]="gheInput.TrangThai" [ngClass]="{'gheDaDat':gheInput.TrangThai,'gheDangDat':trangThai}" class="btn ghe">{{gheInput.SoGhe}}</button>
        <ng-content></ng-content>
    `,
    styles: [
        `
            .ghe{
                background-color:gray;
                width:50px;
                height:35px;
                margin: 15px;
                border-radius:5px;
                cursor:pointer;
                color:#fff;
                text-align:center;  
            }
            .gheDaDat {
                background-color:red;
                cursor:no-drop !important;
            }
            .gheDangDat {
                background-color:green;
            }
        `
    ]
})

export class GheComponent implements OnInit {
    @Input() gheInput!: Ghe;
    trangThai:boolean = false;
    @Output() evtDatGhe = new EventEmitter();
    constructor() { }

    ngOnInit() { }
    datGhe(){
        this.trangThai = !this.trangThai;
        //output ra ngoài thông tin ghế đó
        this.evtDatGhe.emit(this.gheInput);
    }
}