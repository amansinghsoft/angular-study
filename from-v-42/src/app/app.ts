import { Component, signal } from '@angular/core';
import { User } from './user/user';

@Component({
  selector: 'app-root',
  imports: [User],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  userName = 'Bruce Wayne';

  onUserChange(user:string){
    this.userName = user;
  }
}
