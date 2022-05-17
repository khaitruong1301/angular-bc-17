//a-module
//CommonModule hổ trợ directive angular (structural directive)
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BaiTapLoginComponent } from './BaiTapLoginDirective.component';
import { BaiTapQLSPComponent } from './BaiTapQLSP.component';
import { ChildComponent } from './Child.Component';
import { DirectiveComponent } from './Directive.component';


@NgModule({
    declarations: [DirectiveComponent,ChildComponent,BaiTapLoginComponent,BaiTapQLSPComponent],
    imports: [CommonModule,FormsModule],
    exports: [DirectiveComponent],
})
export class DirectiveModule { }
