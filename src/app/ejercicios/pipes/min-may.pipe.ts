import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'minusMayus',
})
export class MinMayPipe implements PipeTransform {
  transform(value: string, enMayuscula: boolean): string {
    return enMayuscula ? value.toUpperCase() : value.toLowerCase();
  }
}
