import { Component, signal, computed, WritableSignal, Signal } from '@angular/core'

@Component({
  selector: 'app-signals-computed',
  templateUrl: './signals-computed.component.html',
  styleUrl: './signals-computed.component.css',
  standalone: true,
  imports: [],
})
export class SignalsComputedComponent {
  count: WritableSignal<number> = signal(0)
  doubleCount: Signal<number> = computed(() => this.count() * 2)

  reset() {
    this.count.set(0)
  }

  inc_counter() {
    this.count.update(count => count + 1)
  }

  dec_counter() {
    this.count.update(count => count - 1)
  }
}
