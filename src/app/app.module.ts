import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { ContentHomeComponent } from './Home/ContentHome/ContentHome.component';
import { FooterHomeComponent } from './Home/FooterHome/FooterHome.component';
import { HomeComponent } from './Home/Home.component';
import { HomeModule } from './Home/home.module';
import { NavigationHomeComponent } from './Home/NavigationHome/NavigationHome.component';
import { DatabindingModule } from './Modules/DataBinding/DataBinding.module';
import { DirectiveModule } from './Modules/Directive/Directive.module';
import { PropsModule } from './Modules/PropsModule/Props.module';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoUIControlModule } from './Modules/DemoUIControl/DemoUIControl.module';

registerLocaleData(en);
//Định nghĩa route cho angular 
import { RouterModule, Routes } from '@angular/router';
import { HomeTemplateModule } from './Modules/HomeTemplate/HomeTemplate.module';
import { UserModule } from './Modules/UserModule/UserModule.module';

const appRoutes: Routes = [
  { path: 'home', loadChildren: () => HomeTemplateModule },
  { path: 'user', loadChildren: () => UserModule },
  { path: '', loadChildren: () => HomeTemplateModule },
]


@NgModule({
  declarations: [ // Là nơi sẽ chứa các component có thể sử dụng trong module này
    AppComponent, DemoComponent,
  ],
  imports: [ //Là nơi chứa các module khác muốn sử dụng trong module này
    BrowserModule,
    HomeModule,
    DatabindingModule,
    DirectiveModule,
    PropsModule,
    FormsModule,
    HttpClientModule,//module gọi api servic
    BrowserAnimationsModule,
    DemoUIControlModule,
    RouterModule.forRoot(appRoutes), //Chỉ import được module
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }], //Là nới gắn các service sử dụng cho module này
  bootstrap: [AppComponent] //Là các thẻ có thể sử dụng trong index.html
})
export class AppModule { }
