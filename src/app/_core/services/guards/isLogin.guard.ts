//a-guard-can-activate

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({providedIn: 'root'})
export class isLoginGuard implements CanActivate {
    constructor(private router:Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        //Hàm này return true => cho phép tiến route đó , return false thì chặn lại không cho vào

        if(localStorage.getItem('userLogin')){
            return true;
        }
        //Nếu người dùng chưa đăng nhập thì chuyển hướng trang về login bắt người dùng đăng nhập
        this.router.navigate(['/user/login'])
        return false;
    }
}