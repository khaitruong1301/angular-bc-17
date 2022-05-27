import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IPhim } from 'src/app/_core/models/Interface/IPhim';
import { quanLyPhimServiceNameService } from 'src/app/_core/services/quanLyPhim.service';

@Component({
    selector: 'app-home-page',
    template: `
        <div class="container">
            <h3 class="text-center">Danh sách phim</h3>
            <div class="row">
                <div class="col-4 mt-2" *ngFor="let phim of (resultObPhim |async)?.content">
                    <div class="card">
                        <img [src]="phim.hinhAnh" alt="..." height="350"/>
                        <div class="card-body">
                            <h3 style="height:35px">{{phim.tenPhim}}</h3>
                            <p style="height:75px">{{phim.moTa | shortCut:100 }}</p>
                            <button class="btn btn-success" routerLink="/detail/{{phim.maPhim}}">Đặt vé</button>
                            <button class="btn btn-primary ml-2" [routerLink]="['/detail',phim.maPhim]">Đặt vé</button>
                            <hr />
                            <button class="btn btn-primary" [routerLink]="['detailparams']" [queryParams]="{id:phim.maPhim,biDanh:phim.biDanh}">Detail query 1</button>
                            <button class="btn btn-warning ml-2" routerLink="/detailparams" [queryParams]="{id:phim.maPhim,biDanh:phim.biDanh}">Detail query 2</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
    `
})

export class HomePageComponent implements OnInit {
    arrPhim: IPhim[] = [];
    constructor(private phimService:quanLyPhimServiceNameService) { }
    resultObPhim!:Observable<ResponsePhim>
    ngOnInit() { 
        this.resultObPhim = this.phimService.layDanhSachPhim();
        //oninit giống component didmount
        // this.phimService.layDanhSachPhim().subscribe({
        //     next:(result) => {
        //         console.log(result);
        //         this.arrPhim = result.content;
        //     },
        //     error:(err) => {
        //         console.log(err);

        //     }
        // });
    }
}

interface ResponsePhim{
        "statusCode": number
        "message": string,
        "content":IPhim[] ,
        "dateTime": Date,
        "messageConstants": string
}
