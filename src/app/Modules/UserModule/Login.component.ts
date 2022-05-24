import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NguoiDungService } from 'src/app/_core/services/nguoiDung.service';

@Component({
    selector: 'app-login',
    template: `<form #frmLogin = 'ngForm' class="container d-flex justify-content-center align-items-center h-100" (ngSubmit)="dangNhap(frmLogin.value)">
        <div class="w-50">
            <div class="form-group">
                <p>Tài khoản</p>
                <input #taiKhoan="ngModel" class="form-control" name="taiKhoan" ngModel  [(ngModel)]="userLogin.taiKhoan" required maxlength="32" minlength="6"/>
                <div *ngIf="(taiKhoan.touched || taiKhoan.dirty) && taiKhoan.errors" class="alert alert-danger">
                    <p class="text text-danger" *ngIf="taiKhoan.errors['required']">
                        Tài khoản không được bỏ trống !
                    </p>
                    <p class="text text-danger" *ngIf="taiKhoan.errors['minlength'] || taiKhoan.errors['maxlength']">
                        Tài khoản từ 6 - 32 ký tự
                    </p>
                </div>
            </div>
            <div class="form-group">
                <p>Mật khẩu</p>
                <input  #matKhau="ngModel" type="password" class="form-control" name="matKhau" ngModel [(ngModel)]="userLogin.matKhau" required/>
            </div>
            <div class="form-group">
                <p>Email</p>
                <input  #email="ngModel"  class="form-control" name="email" ngModel  required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required=""/>
                <div *ngIf="(email.touched || email.dirty) && email.errors" class="alert alert-danger">
                    <p class="text text-danger" *ngIf="email.errors['required']">
                        Email không được bỏ trống !
                    </p>
                    <p class="text text-danger" *ngIf="email.errors['pattern']">
                        Email không đúng định dạng !
                    </p>
                </div>
            </div>
            <div class="form-group">
                <button class="btn btn-success" [disabled]="frmLogin.invalid || frmLogin.submitted" type="submit">Đăng nhập</button>
            </div>

            <button class="btn btn-primary" (click)="setValues()">Set Values</button>
        </div>
    </form>`,
    styles:[
        `
            input.ng-valid{
                border-left:5px solid green;
            }
            input.ng-invalid{
                border-left:5px solid red;
            }
        `
    ]
})

export class LoginComponent implements OnInit {
    userLogin:IUserLogin = {taiKhoan:'',matKhau:''};
    @ViewChild('frmLogin') tagForm!:NgForm;
    constructor(private nguoiDungService:NguoiDungService,private router:Router) { }
    ngOnInit() { }
    dangNhap(values:NgForm) {
        // console.log('values',values);

        this.nguoiDungService.dangNhap(values).subscribe({
            next: result => {
                //Thành công lưu vào localstorage
                localStorage.setItem('userLogin',JSON.stringify(result.content));
                localStorage.setItem('accessToken',result.content.accessToken);
                alert('Đăng nhập thành công!');
                //Chuyển hướng về trang chủ 
                this.router.navigate(['/']);

            },
            error: (err) =>{
                console.log({err})
                alert('Đăng nhập thất bại!');

            }
        });
    }
    setValues() {
        this.tagForm.setValue({
            taiKhoan:'haiadmin123',
            matKhau:'123456789',
            email:'haibanh@gmail.com'
        })
    }
}

interface IUserLogin {
    taiKhoan:string,
    matKhau:string
}
