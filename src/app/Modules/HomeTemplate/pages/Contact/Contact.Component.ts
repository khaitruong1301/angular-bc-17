import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-contact',
    template: `
        <div class="container">
            <h3>Contact</h3>
            <form #frmContact="ngForm" (ngSubmit)="submit(frmContact.value)">
                <div class="form-group">
                    <p>Họ tên</p>
                    <input class="form-control" name="hoTen" ngModel />
                </div>
                <div class="form-group">
                    <p>Số điện thoại</p>
                    <input class="form-control" name="soDienThoai" ngModel />
                </div>
                <div class="form-group">
                    <p>Email</p>
                    <input class="form-control" name="email" ngModel />
                </div>
                <div class="form-group">
                    <button type="submit" class="btn btn-success">Gửi</button>
                </div>
            </form>
        </div>
    `
})

export class ContactComponent implements OnInit {
    isSubmit: boolean = false;
    constructor() { }

    ngOnInit() { }
    submit(value:NgForm) {
        this.isSubmit = true;
    }
}