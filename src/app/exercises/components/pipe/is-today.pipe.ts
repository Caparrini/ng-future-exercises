import { Pipe, PipeTransform } from '@angular/core'

@Pipe({ name: 'is_today', standalone: true, pure: true })
export class IsTodayPipe implements PipeTransform {
  transform(input: Date): string {
    let output_str: string = "It's not today"

    if (input.toDateString() == new Date().toDateString()) {
      output_str = "It's today!"
    }
    return output_str
  }
}
