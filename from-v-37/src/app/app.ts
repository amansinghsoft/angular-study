import { Component, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  name= new FormControl('John Cook');
  password= new FormControl('pass0987');

  displayValue(){
    console.log(this.name.value,  this.password.value)
  }

  setValues(){
    this.name.setValue('John Doe');
    this.password.setValue('password123');
  }
}
