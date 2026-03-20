import { afterEveryRender, afterNextRender, afterRenderEffect, Component, signal, ViewChild } from '@angular/core';
import { User } from './user/user';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [User, NgIf],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  @ViewChild("user") User:any;
  counter = 0;
  constructor(){
    afterEveryRender(() => {
      console.log("afterEveryRender", this.User.counter);
    })
    afterNextRender(() => {
      console.log("afterNextRender", this.User.counter);
    })
  }

  updateCounter(){
    this.counter++;
  }
}
