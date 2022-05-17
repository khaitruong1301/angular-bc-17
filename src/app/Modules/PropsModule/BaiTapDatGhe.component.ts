//a-component-inline
import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { GheComponent } from './Ghe.component';

@Component({
    selector: 'app-bt-dat-ghe',
    template: `
        <div>
            <h3 class="text-center">Bài tập đặt ghế</h3>
            <div class="row">
                <div class="col-6">
                    <h3 class="m-5 p-2 bg-dark btn text-white w-100">Tài xế</h3>
                    <div class="text-center">
                        <app-ghe (evtDatGhe)="datGhe($event)" [gheInput]="ghe" *ngFor="let ghe of arrGhe;let i = index">
                        <br *ngIf="(i+1)%4 ==0" />
                        </app-ghe>
                    </div>

                </div>
                <div class="col-6 text-center">
                    <h3 class="m-5 text-warning text-center">Danh sách ghế đã chọn</h3>
                    <p *ngFor="let gheDD of arrGheDangDat">Ghế {{gheDD.SoGhe}} - <span class="text-danger" style="cursor: pointer;" (click)="huyGhe(gheDD.SoGhe)"> [Huỷ] </span></p>
                </div>
            </div>
        </div>
    `
})

export class BaiTapDatGheComponent implements OnInit {
    arrGhe: Ghe[] = [
        { SoGhe: 1, TenGhe: " s ố 1 ", Gia: 100, TrangThai: false }, { SoGhe: 2, TenGhe: " s ố 2 ", Gia: 100, TrangThai: false }, { SoGhe: 3, TenGhe: " s ố 3 ", Gia: 100, TrangThai: false }, { SoGhe: 4, TenGhe: " s ố 4 ", Gia: 100, TrangThai: false }, { SoGhe: 5, TenGhe: " s ố 5 ", Gia: 100, TrangThai: false }, { SoGhe: 6, TenGhe: " s ố 6 ", Gia: 100, TrangThai: false }, { SoGhe: 7, TenGhe: " s ố 7 ", Gia: 100, TrangThai: false }, { SoGhe: 8, TenGhe: " s ố 7 ", Gia: 100, TrangThai: false }, { SoGhe: 9, TenGhe: " s ố 9 ", Gia: 100, TrangThai: false }, { SoGhe: 10, TenGhe: " s ố 10 ", Gia: 100, TrangThai: false }, { SoGhe: 11, TenGhe: " s ố 11 ", Gia: 100, TrangThai: false }, { SoGhe: 12, TenGhe: " s ố 12 ", Gia: 100, TrangThai: false }, { SoGhe: 13, TenGhe: " s ố 13 ", Gia: 100, TrangThai: false }, { SoGhe: 14, TenGhe: " s ố 14 ", Gia: 100, TrangThai: false }, { SoGhe: 15, TenGhe: " s ố 15 ", Gia: 100, TrangThai: false }, { SoGhe: 16, TenGhe: " s ố 16 ", Gia: 100, TrangThai: false }, { SoGhe: 17, TenGhe: " s ố 17 ", Gia: 100, TrangThai: false }, { SoGhe: 18, TenGhe: " s ố 18 ", Gia: 100, TrangThai: false }, { SoGhe: 19, TenGhe: " s ố 19 ", Gia: 100, TrangThai: false }, { SoGhe: 20, TenGhe: " s ố 20 ", Gia: 100, TrangThai: false }, { SoGhe: 21, TenGhe: " s ố 21 ", Gia: 100, TrangThai: false }, { SoGhe: 22, TenGhe: " s ố 22 ", Gia: 100, TrangThai: false }, { SoGhe: 23, TenGhe: " s ố 23 ", Gia: 100, TrangThai: false }, { SoGhe: 24, TenGhe: " s ố 24 ", Gia: 100, TrangThai: false }, { SoGhe: 25, TenGhe: " s ố 25 ", Gia: 100, TrangThai: false }, { SoGhe: 26, TenGhe: " s ố 26 ", Gia: 100, TrangThai: false }, { SoGhe: 27, TenGhe: " s ố 27 ", Gia: 100, TrangThai: false }, { SoGhe: 28, TenGhe: " s ố 28 ", Gia: 100, TrangThai: false }, { SoGhe: 29, TenGhe: " s ố 29 ", Gia: 100, TrangThai: false }, { SoGhe: 30, TenGhe: " s ố 30 ", Gia: 100, TrangThai: true }, { SoGhe: 31, TenGhe: " s ố 31 ", Gia: 100, TrangThai: false }, { SoGhe: 32, TenGhe: " s ố 32 ", Gia: 100, TrangThai: false }, { SoGhe: 33, TenGhe: " s ố 33 ", Gia: 100, TrangThai: false }, { SoGhe: 34, TenGhe: " s ố 34 ", Gia: 100, TrangThai: false }, { SoGhe: 35, TenGhe: " s ố 35 ", Gia: 100, TrangThai: false }, { SoGhe: 36, TenGhe: " s ố 35 ", Gia: 100, TrangThai: true },
    ]
    arrGheDangDat: Ghe[] = []

    constructor() { }
    datGhe(gheDangDat:Ghe) {

        //Kiểm tra ghế đó có trong mảng hay không nếu k có add vào nếu có xoá đi
        let index = this.arrGheDangDat.findIndex(ghe => ghe.SoGhe === gheDangDat.SoGhe);
        if(index!==-1) {
            this.arrGheDangDat.splice(index,1)
        }else 
        {
            this.arrGheDangDat.push(gheDangDat);
        }
    }
    ngOnInit() { }
    @ViewChildren(GheComponent) dsTagGheCom! : QueryList<GheComponent>;
    huyGhe(soGhe:number) {
        this.arrGheDangDat = this.arrGheDangDat.filter(gheDD => gheDD.SoGhe !== soGhe);

        this.dsTagGheCom.forEach((gheCom:GheComponent,index:number) => {
            if(gheCom.gheInput.SoGhe === soGhe) {
                gheCom.trangThai = false;
            }
        })
    }
}


export interface Ghe {
    SoGhe: number,
    Gia: number,
    TenGhe: string,
    TrangThai: boolean
}