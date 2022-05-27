//a-pipe
import { Pipe, PipeTransform } from '@angular/core';

// {{value | pipeName : tham_so}}
// {{value | shortCut : 100}}
@Pipe({
    name: 'shortCut'
})

export class ShortCutPipe implements PipeTransform {

    transform(value: any, limit:number): any {
        
        return value.length > limit ? value.substr(0,limit) + '...' : value;
    }
}