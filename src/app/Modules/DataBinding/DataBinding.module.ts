import { NgModule } from '@angular/core';
import { DatabindingComponent } from './Databinding.component';
import { OneWayBindingComponent } from './OneWaybinding.component';
import { TwoWayComponent } from './TwoWayBinding.component';
//Để sử dụng được 2waybinding => import formsmodule
import {FormsModule} from '@angular/forms'

@NgModule({
    declarations: [DatabindingComponent,OneWayBindingComponent,TwoWayComponent],
    imports: [FormsModule],
    exports: [DatabindingComponent],
})
export class DatabindingModule { }
