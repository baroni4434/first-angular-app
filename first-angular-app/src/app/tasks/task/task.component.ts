import { Component, Input } from '@angular/core';
interface Task{
id:string;
userId:string;
title:string;
summary:string;
dueDate:string;

}
@Component({
  selector: 'app-task',
  standalone: true,
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  @Input() name?: string;
}
