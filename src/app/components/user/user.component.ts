import { Component, OnInit } from '@angular/core';

import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name: string;
  age: number;
  email: string;
  address: Address;
  hobbies: string[];
  posts: Post;
  isEdit: boolean = false;

  constructor(private dataService:DataService) {
    console.log('constructor ran');
   }

  ngOnInit() {
    console.log('user.component ngOnInit ran');
    this.name = 'Jane Doe';
    this.age = 30;
    this.email = 'janedoe@gmail.com'
    this.address = {
      street: 'Itäinenkatu 14',
      city: 'Tampere',
      state: 'Pirkanmaa',
    };
    this.hobbies = [
      'Pelaaminen', 'Elokuvat', 'Jotain',
    ];

    this.dataService.getPosts().subscribe((posts) => {
      //console.log(posts);
      this.posts = posts;
    });
  }

  makeUserOlder() {
    this.age = this.age + 1;
  }

  makeUserYounger() {
    this.age = this.age - 1;
  }

  addHobby(hobby) {
    this.hobbies.push(hobby);
  }

  deleteHobby(hobby) {
    for (let i = 0; i < this.hobbies.length; i++) {
      if (this.hobbies[i] == hobby) {
        this.hobbies.splice(i, 1);
      }
    }
  }

  toggleEdit() {
    this.isEdit = !this.isEdit;
  }

}

interface Address {
  street: string,
  city: string,
  state: string,
}

interface Post {
  id: number,
  title: string,
  body: string,
  userId: number,
}


