import { NgFor } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [NgFor],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  students = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank", "Grace", "Heidi", "Ivan", "Judy"];

  studentsData = [
    {name: "Alice", age: 20, email: "alic@example.com"},
    {name: "Bob", age: 22, email: "bob@example.com"},
    {name: "Charlie", age: 29, email: "charlie@example.com"},
    {name: "David", age: 19, email: "david@example.com"},
    {name: "Eve", age: 24, email: "eve@example.com"},
    {name: "Frank", age: 28, email: "frank@example.com"},
    {name: "Grace", age: 25, email: "grace@example.com"}
  ]
}
