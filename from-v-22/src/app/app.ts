import { Component, effect, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  userName = signal("Test")
  count = signal(0)
  displayHeading=false;

  constructor(){
    effect(() =>{
      if (this.count() == 2) {
        this.displayHeading = true
        // setTimeout(()=>{
        //    this.displayHeading = false
        // },1000)
      } else {
        this.displayHeading = false
      }
    })
  }

  toggleValue(){
    this.count.set(this.count() + 1);
    this.displayHeading = !this.displayHeading;
  }
}
