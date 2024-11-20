import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'na',
  standalone: true
})
export class NaPipe implements PipeTransform {

  

  transform(value: unknown, ...args: unknown[]): unknown {
    //return null;
    if(value== "" || value== "null")
      {
        return "NA";
      }
      else{
        return value;
      }
  }

}
