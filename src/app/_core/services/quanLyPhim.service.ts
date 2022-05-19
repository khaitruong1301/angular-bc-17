//a-service-httpClient
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class quanLyPhimServiceNameService {

    //DI: Dependency injection
    constructor(private httpClient: HttpClient) {

    }

    layDanhSachPhim(): Observable<any> {
        //Khai báo header
        let header = new HttpHeaders();
        header = header.set(
            'TokenCybersoft', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAxNyIsIkhldEhhblN0cmluZyI6IjI2LzEwLzIwMjIiLCJIZXRIYW5UaW1lIjoiMTY2Njc0MjQwMDAwMCIsIm5iZiI6MTYzNzYwMDQwMCwiZXhwIjoxNjY2ODkwMDAwfQ.bsbyK5ZxphAvsyp2ZqB_XhppPE9tnzCxMpCoHby_Wc0'
        );
        let observer = this.httpClient.get('https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01',{headers:header});
        return observer;
    }

}