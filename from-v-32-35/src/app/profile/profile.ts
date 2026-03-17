import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {

  userName:string|null = '';
  constructor(private route:ActivatedRoute){}

  ngOnInit() {
    // for link data passing
    // this.userName = this.route.snapshot.paramMap.get("name");
    // console.log(this.userName);

    // for navigation data passing by button click
    // this.route.queryParamMap.subscribe(params => {
    //   this.userName = params.get('name');
    // });

    //Global data passing using route data
    this.route.data.subscribe(data => {
      this.userName = data['name'];
    })
  }
}
