import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  constructor(private router: Router) { }
  // for navigation with query parameters, we can use the navigation extras object to pass the query parameters as an object.
  // goToProfile(name:string){       
  //   this.router.navigate(['profile'], { queryParams: { name }});
  // }

  users = [
    { id: 1, name: 'John', age: 30, email: 'john@example.com' },
    { id: 2, name: 'Jane', age: 25, email: 'jane@example.com' },
    { id: 3, name: 'Bob', age: 35, email: 'bob@example.com' },
    { id: 4, name: 'Alice', age: 28, email: 'alice@example.com' },
    { id: 5, name: 'Charlie', age: 32, email: 'charlie@example.com' },
  ]
}
