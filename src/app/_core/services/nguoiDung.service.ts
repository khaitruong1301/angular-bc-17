import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';

@Injectable({providedIn: 'root'})
export class NguoiDungService {
    constructor(private httpClient: HttpClient) { }


    dangNhap(nguoiDung:IUserLogin | NgForm):Observable<any>{
        let header = new HttpHeaders();
        header = header.set(
            'TokenCybersoft', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAxNyIsIkhldEhhblN0cmluZyI6IjI2LzEwLzIwMjIiLCJIZXRIYW5UaW1lIjoiMTY2Njc0MjQwMDAwMCIsIm5iZiI6MTYzNzYwMDQwMCwiZXhwIjoxNjY2ODkwMDAwfQ.bsbyK5ZxphAvsyp2ZqB_XhppPE9tnzCxMpCoHby_Wc0'
        );

        let ob:any = this.httpClient.post('https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap',nguoiDung, {headers:header});
        return ob;
    }
    
}


interface IUserLogin {
    taiKhoan:string,
    matKhau:string
}
