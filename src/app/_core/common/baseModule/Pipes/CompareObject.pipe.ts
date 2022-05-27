import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash'
@Pipe({
    name: 'compareObject'
})

export class CompareObjectPipe implements PipeTransform {
    transform(ob1: any,ob2:any): boolean {
        
        return _.isEqual(ob1,ob2);
    }
}