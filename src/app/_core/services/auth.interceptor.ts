//a-http-interceptor
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ACCESS_TOKEN, TOKEN_CYBERSOFT, USER_LOGIN } from '../util/config';

@Injectable()
export class httpApiInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let tokenCybersoft = TOKEN_CYBERSOFT;
        let tokenAuthorization:string | null = '';
    
        if(localStorage.getItem(USER_LOGIN)){
             tokenAuthorization = 'Bearer ' + localStorage.getItem(ACCESS_TOKEN);

        }
        // console.log(tokenAuthorization);
        const autRequest = req.clone({
            setHeaders: {
                'Authorization': tokenAuthorization,
                'TokenCybersoft': tokenCybersoft
            }
        })
        return next.handle(autRequest);
    }
}