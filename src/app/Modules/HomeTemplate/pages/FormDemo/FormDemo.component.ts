import { Component, OnInit, Type, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-form-demo',
    template: `
        <form #frm="ngForm" class="container" (ngSubmit)="themSanPham(frm.value)">
            <h1 class="text-center display-4">Quản lý sản phẩm</h1>
            <div class="row">
                <div class="col-6">
                    <div class="form-group">
                        <p>Mã sản phẩm</p>
                        <input class="form-control" name="maSanPham" ngModel [(ngModel)]="sanPhamModel.maSanPham" />
                    </div>
                    <div class="form-group">
                        <p>Tên sản phẩm</p>
                        <input class="form-control" name="tenSanPham" ngModel  [(ngModel)]="sanPhamModel.tenSanPham"/>
                    </div>
                </div>
                <div class="col-6">
                    <div class="form-group">
                            <p>Giá bán</p>
                            <input class="form-control" name="giaBan" ngModel  [(ngModel)]="sanPhamModel.giaBan"/>
                        </div>
                        <div class="form-group">
                            <p>Số lượng</p>
                            <input  class="form-control" name="soLuong" ngModel   [(ngModel)]="sanPhamModel.soLuong"/>
                    </div>
                </div>
            </div>
            <div class="mt-2">
                <button class="btn btn-success" type="submit">Thêm sản phẩm</button>
                <button class="btn btn-primary ml-2" type="button" (click)="capNhatSanPham(frm.value)">Cập nhật sản phẩm</button>
            </div>
            <table class="table mt-2">
                <thead>
                    <tr class="bg-dark text-white">
                        <td>Mã sản phẩm</td>
                        <td>Tên sản phẩm</td>
                        <td>Giá bán</td>
                        <td>Số lượng</td>
                        <td>Thành tiền</td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    <ng-container *ngIf="!edit">
                        <tr *ngFor="let sp of arrSanPham">
                            <td>{{sp.maSanPham}}</td>
                            <td>{{sp.tenSanPham}}</td>
                            <td>{{sp.giaBan}}</td>
                            <td>{{sp.soLuong}}</td>
                            <td>{{sp.giaBan * sp.soLuong}}</td>
                            <td>
                                <button type="button" class="btn btn-primary" (click)="chinhSua(sp)">Sửa</button>
                                <button type="button" class="btn btn-danger">Xoá</button>
                            </td>
                        </tr>
                    </ng-container>
                    <ng-container *ngIf="edit">
                        <tr *ngFor="let sp of arrSanPham">
                            <td>{{sp.maSanPham}}</td>
                            <td><input [(ngModel)]="sp.tenSanPham"  class="form-control" [ngModelOptions]="{standalone: true}"/></td>
                            <td><input [(ngModel)]="sp.giaBan" class="form-control" [ngModelOptions]="{standalone: true}"/></td>
                            <td><input [(ngModel)]="sp.soLuong" class="form-control" [ngModelOptions]="{standalone: true}"/></td>
                            <td>{{sp.giaBan * sp.soLuong}}</td>
                            <td>
                                <button type="button" class="btn btn-primary" (click)="chinhSua(sp)">Sửa</button>
                                <button type="button" class="btn btn-danger">Xoá</button>
                            </td>
                        </tr>
                    </ng-container>
                </tbody>
            </table>
        </form>
       
    `
})

export class FormDemoComponent implements OnInit {
    arrSanPham: SanPham[] = [];
    sanPhamModel: SanPham = { maSanPham: '', tenSanPham: '', giaBan: 0, soLuong: 0 };
    edit: boolean = false;
    @ViewChild('frm') tagForm!: NgForm;
    constructor() { }

    ngOnInit() { }
    themSanPham(sanPham: SanPham): void {
        let newSanPham: SanPham = { ...this.sanPhamModel };
        this.arrSanPham.push(newSanPham);
        // console.log('sanPham', sanPham)
        // this.arrSanPham.push(sanPham);
    }

    capNhatSanPham(sanPham: any | SanPham) {
        // let sanPhamUpdate : any | SanPham = this.arrSanPham.find(sp => sp.maSanPham === sanPham.maSanPham)
        // if (sanPhamUpdate) {
        //     for (let key in sanPhamUpdate) {
        //         sanPhamUpdate[key] = sanPham[key];
        //     }
        // }
        this.edit = false;

    }
    chinhSua(spSua: SanPham) {
        this.edit = true;
        // this.sanPhamModel = spSua;
        // this.tagForm.setValue(spSua);
    }
}


interface SanPham {
    maSanPham: string,
    tenSanPham: string,
    giaBan: number,
    soLuong: number
}