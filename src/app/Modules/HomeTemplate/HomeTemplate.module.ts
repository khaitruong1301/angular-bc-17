import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HomeTemplateComponent } from './HomeTemplate.component';
import { AboutComponent } from './pages/About/About.component';
import { ContactComponent } from './pages/Contact/Contact.Component';
import { HomePageComponent } from './pages/HomePage/HomePage.component';

//Chỉ định ra thằng component nào sẽ được load ra ở app.ts (thẻ router outlet)
import { RouterModule,Routes } from '@angular/router';
import { HeaderHomeTemplateComponent } from './_component/HeaderHome.component';
import { DetailComponent } from './pages/Detail/Detail.component';
import { DetailQueryParamsComponent } from './pages/DetailQueryParams/DetailQueryParams.component';

const homeRoutes:Routes = [
    {path:'',component: HomeTemplateComponent,children:[
        {path:'',component:HomePageComponent},
        {path:'about',component:AboutComponent},
        {path:'contact',component:ContactComponent},
        {path:'detail/:id',component:DetailComponent},
        {path:'detailparams',component:DetailQueryParamsComponent},
    ]}
] 



@NgModule({
    declarations: [AboutComponent,ContactComponent,HomePageComponent,HomeTemplateComponent,HeaderHomeTemplateComponent,DetailComponent],
    imports: [FormsModule,CommonModule,RouterModule.forChild(homeRoutes)],
    exports: [],
})
export class HomeTemplateModule { }
