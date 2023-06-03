import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limit'
})
export class LimitPipe implements PipeTransform {

  transform(value: string, limit: number = 50): unknown {
    return value.length > 50
    ? value.substring(0, 47) + '...' : value;
  }

}
