import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'eGPcurrency',
  standalone: true
})
export class EGPcurrencyPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    let lengthOfValue:number = value.toString().length
    let stringValue:string = value.toString()
    if(lengthOfValue > 3)
    {
      const result = stringValue.slice(0, lengthOfValue - 3) + ',' + stringValue.slice(lengthOfValue - 3);
      return `${result} EGP`
    }

    return `${value} EGP`;
  }

}
