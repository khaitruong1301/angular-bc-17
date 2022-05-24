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
import { FormDemoComponent } from './pages/FormDemo/FormDemo.component';
import { isCommentGuard } from 'src/app/_core/services/guards/isComment.guard';
import { DemoPipeComponent } from './pages/DemoPipe/DemoPipe.component';

const homeRoutes:Routes = [
    {path:'',component: HomeTemplateComponent,children:[
        {path:'',component:HomePageComponent},
        {path:'about',component:AboutComponent},
        {path:'contact',component:ContactComponent,canDeactivate:[isCommentGuard]},
        {path:'formdemo',component:FormDemoComponent},
        {path:'detail/:id',component:DetailComponent},
        {path:'pipe',component:DemoPipeComponent},
        {path:'detailparams',component:DetailQueryParamsComponent},
    ]}
] 



@NgModule({
    declarations: [AboutComponent,ContactComponent,HomePageComponent,HomeTemplateComponent,HeaderHomeTemplateComponent,DetailComponent,FormDemoComponent],
    imports: [FormsModule,CommonModule,RouterModule.forChild(homeRoutes)],
    exports: [],
})
export class HomeTemplateModule { }
