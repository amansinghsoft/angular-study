import { Component, computed, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  x = signal(10);
  y = signal(5);
  z = computed(() => this.x() + this.y())

  showValue() {
    console.log(this.z());
    console.log(this.z())
  }

  updateX() {
    this.x.set(200)
  }
}
