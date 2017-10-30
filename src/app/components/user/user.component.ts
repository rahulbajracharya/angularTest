import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  name: string;
  age:number;
  email:string;
  address:Address;
  hobbies:string[];
  
  constructor() { }

  ngOnInit() {
    this.name='Rahul Bajracharya';
    this.age = 24;
    this.email="rahulbajracharya2@gmail.com";
    this.address = {
      street:'Freak Street',
      city:'Boston',
      state:'MA'
    }
    this.hobbies=[
      'Write code',
      'Watch movies',
    ]
  }
  onClick(){
    this.name='Json Mraz';
    this.hobbies.push('Hobby Added');
  }

  addHobby(Hobby)
  {
  this.hobbies.push(Hobby);
  return false;
  }
}

interface Address{
  street:string,
  city:string,
  state:string,
}