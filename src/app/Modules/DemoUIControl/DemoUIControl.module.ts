//a-module
import { NgModule } from '@angular/core';
import { DemoUIComponent } from './DemoUIControl.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AntDModule } from 'src/app/_core/common/baseModule/AntD.module';
import { MaterialDemoComponent } from './MaterialDemo.component';
import { MaterialModule } from 'src/app/_core/common/baseModule/Material.module';

@NgModule({
    declarations: [DemoUIComponent,MaterialDemoComponent],
    imports: [CommonModule,FormsModule,AntDModule,MaterialModule],
    exports: [DemoUIComponent],
})
export class DemoUIControlModule { }
//react-router-dom 6. (90 )