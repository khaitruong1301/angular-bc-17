//a-module 
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CompareObjectPipe } from './CompareObject.pipe';
import { ShortCutPipe } from './ShortCut.pipe';


@NgModule({
    declarations: [ShortCutPipe,CompareObjectPipe],
    imports: [CommonModule],
    exports:[ShortCutPipe,CompareObjectPipe]
})
export class PipesModule { 

}
