import { NgModule } from '@angular/core';
import { DemoPropsComponent } from './DemoProps.component';
import { ProductItemComponent } from './ProductItem.component';
import { ProductListComponent } from './ProductList.component';
//common module là module đọc các structural directive
import { CommonModule } from '@angular/common';
//Sử dụng 2waybinding
import { FormsModule } from '@angular/forms';
import { BaiTapDatGheComponent } from './BaiTapDatGhe.component';
import { GheComponent } from './Ghe.component';



@NgModule({
    declarations: [DemoPropsComponent,ProductListComponent,ProductItemComponent,BaiTapDatGheComponent,GheComponent],
    imports: [CommonModule,FormsModule],
    exports: [DemoPropsComponent],
})
export class PropsModule { }
