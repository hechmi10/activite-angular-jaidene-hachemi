import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tab'
})
export class TabPipe implements PipeTransform {

  transform(values: any[],ch:string, ...args: unknown[]): any[] {
    if(!values || !ch){
      return values;
    };
    return values.filter(value => value.toLowerCase().includes(ch.toLowerCase()));
  }

}
