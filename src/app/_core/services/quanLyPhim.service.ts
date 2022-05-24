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
        let observer = this.httpClient.get('https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01');
        return observer;
    }

}