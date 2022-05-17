//a-module
import { NgModule } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';


@NgModule({
    imports: [NzButtonModule,NzDatePickerModule,NzAutocompleteModule],
    exports: [NzButtonModule,NzDatePickerModule,NzAutocompleteModule],
})
export class AntDModule { }
