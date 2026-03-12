import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  bgColor = '#777';
  fontSize = "40"

  headingSizeBig="80px";
  headingSizeSmall="30px";
  zoom = false

  updateHeadingSize(){
    this.zoom = !this.zoom;
  }

}
