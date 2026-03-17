import { NgIf } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  profileForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z0-9][a-zA-Z0-9_.]*@gmail[.]com')]),
    password: new FormControl('', [Validators.minLength(6), Validators.required]),
  })

  onSubmit(){
    console.log(this.profileForm.value)
  }

  get name(){
    return this.profileForm.get('name');
  }
  get email(){
    return this.profileForm.get('email');
  }
  get password(){
    return this.profileForm.get('password');
  }
}
