import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  @Input() counter =0;
  name="Tom";
// constructor(){
//   console.log("User Component Constructor");
//   this.name = "Bruce";
// }
// ngOnInit(){
//   console.log("User Component ngOnInit");
//   this.name = "Doomsday";
// }

// ngOnDestroy(){
//   console.log("User Component onDestroy");
// }

// ngOnChanges(){
//   console.log("User Component onChanges");
// }
}
