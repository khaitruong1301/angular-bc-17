//a-guard-can-deactivate
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ContactComponent } from 'src/app/Modules/HomeTemplate/pages/Contact/Contact.Component';


// Consider using this interface for all CanDeactivate guards,
// and have your components implement this interface, too.
//
//   e.g. export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {
//
// export interface CanComponentDeactivate {
// canDeactivate: () => any;
// }

@Injectable({providedIn: 'root'})
export class isCommentGuard implements CanDeactivate<ContactComponent> {

    canDeactivate(
        component: ContactComponent,
        currentRoute: ActivatedRouteSnapshot, 
        currentState: RouterStateSnapshot
    ): Observable<boolean>|Promise<boolean>|boolean {

        if(component.isSubmit) {
            return true;//được rời đi
        }

        if(window.confirm('Bạn thực sự muốn rời khỏi trang ?')) {
            return true;
        }


        return false;
    }
}