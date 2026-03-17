import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
  profileForm = new FormGroup({
    name: new FormControl(),
    email: new FormControl(),
    password: new FormControl()
  })

  onSubmit(){
    console.log(this.profileForm.value)
  }
  setValue(){
    this.profileForm.setValue({
      name:'Angular',
      email:'angular@example.com',
      password:'angular123'
    })
  }
}
