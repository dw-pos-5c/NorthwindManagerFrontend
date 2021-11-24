import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ellipsisNotation'
})
export class EllipsisNotationPipe implements PipeTransform {

  transform(value: string, length: number): string {
    if (value.length <= length) return value;
    return value.slice(0, length - 1);
  }
}
