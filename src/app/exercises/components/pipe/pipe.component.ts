import { Component } from '@angular/core'
import { IsTodayPipe } from './is-today.pipe'
import { DatePipe } from '@angular/common'

@Component({
  selector: 'app-pipe',
  standalone: true,
  templateUrl: `./pipe.component.html`,
  styles: ``,
  imports: [IsTodayPipe, DatePipe],
})
export class PipeComponent {
  today = new Date()
  yesterday = new Date(new Date().setDate(this.today.getDate() - 1))
}
