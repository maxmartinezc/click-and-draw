import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'timer' })
export class TimerPipe implements PipeTransform {
  transform(v) {
    return ('0'+Math.floor(v/3600) % 24).slice(-2)
        + ':'
        + ('0'+Math.floor(v/60)%60).slice(-2)
        + ':'
        + ('0' + v % 60).slice(-2);
  }
}