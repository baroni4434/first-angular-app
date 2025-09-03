import {Component,computed ,signal , Input , input, Output , EventEmitter , output} from '@angular/core';
import {DUMMY_USERS} from '../dummy-users'

import {type User} from './user.model';
@Component({
 selector: 'app-user',
 standalone: true,
 templateUrl:'./user.component.html',
 styleUrl:'./user.component.css'
})

export class UserComponent{
@Input({required:true}) user!: User;
@Input({required:true}) selected!:boolean;
@Output() select = new EventEmitter<string>();

selectedUser = signal(DUMMY_USERS[Math.floor(Math.random() * DUMMY_USERS.length)]);


get imagePath(){
  return 'assets/users/' +this.user.avatar
}
 onSelectUser (){
 this.select.emit(this.user.id);
 }



// diger kullanimlari
//id = input.required<string>();
//avatar = input.required<string>();
//name = input.required<string>();
//select = output<string>();
//avatar = input.required<string>();
//name = input.required<string>();
//imagePath = computed (() => 'assets/users' + this.selectedUser().avatar)

/*
@Input({required:true}) id!: string;
@Input({required:true}) avatar!: string ;
@Input({required:true}) name!: string;
 onSelectUser ()
 {
 const randomIndex = Math.floor(Math.random()* DUMMY_USERS.length);
 this.selectedUser.set(DUMMY_USERS[randomIndex]);
 }*/
}

// app component
/*
[id]="users[0].id"
[avatar] = "users[0].avatar"
[name]="users[0].name"

[id]="users[1].id"
[avatar] = "users[1].avatar"
[name]="users[1].name"


[id]="users[2].id"
[avatar] = "users[2].avatar"
[name]="users[2].name"



[id]="users[3].id"
[avatar] = "users[3].avatar"
[name]="users[3].name"


[id]="users[4].id"
[avatar] = "users[4].avatar"
[name]="users[4].name"
*/

