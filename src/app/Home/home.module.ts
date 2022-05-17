//a-module
import { NgModule } from '@angular/core';
import { ContentHomeComponent } from './ContentHome/ContentHome.component';
import { FooterHomeComponent } from './FooterHome/FooterHome.component';
import { HeaderHomeComponent } from './HeaderHome/HeaderHome.component';
import { HomeComponent } from './Home.component';
import { NavigationHomeComponent } from './NavigationHome/NavigationHome.component';



@NgModule({
    declarations: [HomeComponent,HeaderHomeComponent,NavigationHomeComponent,ContentHomeComponent,FooterHomeComponent], //Là các component được quản lý bởi module này
    imports: [], //Các module khác sử dụng cho module này (Các hàm thư viên ... để code được trong các file component)
    exports: [HomeComponent],//Nơi đóng gói xuất ra các chức năng mà module này cho phép 

})
export class HomeModule { } //Tên module


