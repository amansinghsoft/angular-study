import { Component, signal } from '@angular/core';
import { Users } from './service/users';
import { User } from './interfaces/User';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  users: User[] = [];
  selecedUser:User|undefined;

  constructor(private userService: Users) { }

  ngOnInit() {
    this.getUser();
  }
  getUser() {
    this.userService.getUsers().subscribe((data: User[]) => {
      console.log(data);
      this.users = data;
    })
  }

  addUser(user: User) {
    if (!this.selecedUser) {
      this.userService.saveUsers(user).subscribe((data: User) => {
      console.log(data);
      if (data) {
        this.getUser()
      }
    })
    } else {
      const userData = {...user, id:this.selecedUser.id}
      this.userService.updateUser(userData).subscribe((data)=>{
        if (data) {
          this.getUser()
        }
      })
    }
  }

  deleteUser(id: string) {
    this.userService.deleteUser(id).subscribe((data: User) => {
      console.log(data);
      if (data) {
        this.getUser()
      }
    })
  }

  selectUser(id:string){
    this.userService.getSelectedUser(id).subscribe((data:User)=>{
      // console.log(data);
      this.selecedUser = data;
      console.log(this.selecedUser);
      
    })
  }
}
