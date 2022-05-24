import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { isLoginGuard } from 'src/app/_core/services/guards/isLogin.guard';
import { LoginComponent } from './Login.component';
import { ProfileComponent } from './Profile.component';
import { RegisterComponent } from './Register.component';
import { UserTemplateComponent } from './UserTemplate.component';
//cấu hình route

const userRoutes:Routes = [
    {path:'',component:UserTemplateComponent,children:[
        {path:'login',component:LoginComponent},
        {path:'register',component:RegisterComponent},
        {path:'profile',component:ProfileComponent,canActivate:[isLoginGuard]}
    ]}
]



@NgModule({
    declarations:[UserTemplateComponent,LoginComponent,RegisterComponent,ProfileComponent],
    imports: [CommonModule,FormsModule,RouterModule.forChild(userRoutes)],
    exports: [],
})
export class UserModule { }
