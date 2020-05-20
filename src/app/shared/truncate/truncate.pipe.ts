import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'truncate',
  pure: true
})
export class TruncatePipe implements PipeTransform {

  transform(value: string, ...args: any[]): string {
    if (!value) {
      return;
    }

    const limit = args.length ? args[0] : null;

    return limit ? `${value.substring(0, limit)}...` : value;
  }
}
