import { Component, signal } from '@angular/core'

@Component({
  selector: 'app-signals',
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.css',
  standalone: true,
  imports: [],
})
export class SignalsComponent {
  counter = signal(0)

  reset() {
    this.counter.set(0)
  }

  inc_counter() {
    this.counter.update(counter => counter + 1)
  }

  dec_counter() {
    this.counter.update(counter => counter - 1)
  }
}
